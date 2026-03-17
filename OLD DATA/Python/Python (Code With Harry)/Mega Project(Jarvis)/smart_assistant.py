import webbrowser as web
import subprocess
import os
import json
import time
import threading
import re
from urllib.parse import quote
import winreg
import ctypes

KNOWN_APPS_FILE = "known_apps.json"

user32 = ctypes.windll.user32
kernel32 = ctypes.windll.kernel32

# ================= HARD FORCE TERMINAL TO FRONT =================
def force_terminal_front():
    try:
        console_hwnd = kernel32.GetConsoleWindow()
        if not console_hwnd:
            return

        fg_hwnd = user32.GetForegroundWindow()
        fg_thread = user32.GetWindowThreadProcessId(fg_hwnd, None)
        this_thread = kernel32.GetCurrentThreadId()

        user32.AttachThreadInput(fg_thread, this_thread, True)
        user32.ShowWindow(console_hwnd, 9)   # SW_RESTORE
        user32.SetForegroundWindow(console_hwnd)
        user32.BringWindowToTop(console_hwnd)
        user32.AttachThreadInput(fg_thread, this_thread, False)
    except:
        pass

# ================= APP DISCOVERY =================
def discover_installed_apps():
    apps = {}
    registry_paths = [
        (winreg.HKEY_LOCAL_MACHINE, r"SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths"),
        (winreg.HKEY_CURRENT_USER, r"SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths"),
        (winreg.HKEY_LOCAL_MACHINE, r"SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\App Paths"),
    ]

    for hive, path in registry_paths:
        try:
            with winreg.OpenKey(hive, path) as key:
                for i in range(winreg.QueryInfoKey(key)[0]):
                    app = winreg.EnumKey(key, i)
                    try:
                        with winreg.OpenKey(key, app) as ak:
                            p, _ = winreg.QueryValueEx(ak, "")
                            if p and os.path.exists(p):
                                apps[app.replace(".exe", "").lower()] = p
                    except:
                        pass
        except:
            pass

    u = os.getlogin()
    apps.update({
        "chrome": r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        "firefox": r"C:\Program Files\Mozilla Firefox\firefox.exe",
        "edge": r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
        "code": fr"C:\Users\{u}\AppData\Local\Programs\Microsoft VS Code\Code.exe",
        "notepad": "notepad.exe",
        "calc": "calc.exe",
        "paint": "mspaint.exe",
        "explorer": "explorer.exe",
    })
    return apps

def update_db():
    apps = discover_installed_apps()
    with open(KNOWN_APPS_FILE, "w") as f:
        json.dump(apps, f, indent=2)
    return apps

# ================= OPEN APP =================
def open_app(app, apps_db):
    def run():
        if app in apps_db:
            subprocess.Popen(apps_db[app], shell=False)
            time.sleep(0.6)
            force_terminal_front()
            print(f"✅ Opened (background): {app}")
        else:
            print("❌ App not found")
    threading.Thread(target=run, daemon=True).start()

# ================= CLOSE APP =================
def close_app(app):
    def run():
        subprocess.run(
            ["taskkill", "/f", "/im", f"{app}.exe"],
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
            shell=True
        )
        time.sleep(0.2)
        force_terminal_front()
        print(f"🛑 Closed: {app}")
    threading.Thread(target=run, daemon=True).start()

# ================= RUNNING APPS =================
def show_running_apps():
    out = subprocess.check_output("tasklist", shell=True, text=True)
    apps = set()
    for line in out.splitlines()[3:]:
        if ".exe" in line:
            apps.add(line.split()[0].replace(".exe", "").lower())
    print("\n🟢 Running Apps:")
    for a in sorted(apps):
        print(" -", a)

# ================= WEB =================
def is_domain(t):
    return re.match(r"^[\w-]+(\.[\w-]+)+$", t)

def open_site(url):
    if not url.startswith("http"):
        url = "https://" + url
    web.open(url)
    time.sleep(0.3)
    force_terminal_front()

def google(q):
    web.open(f"https://www.google.com/search?q={quote(q)}")
    time.sleep(0.3)
    force_terminal_front()

def youtube(q):
    web.open(f"https://www.youtube.com/results?search_query={quote(q)}")
    time.sleep(0.3)
    force_terminal_front()

# ================= FILE SEARCH =================
def search_file(filename):
    print(f"🔍 Searching for '{filename}' in all drives...")
    drives = [f"{d}:\\" for d in "ABCDEFGHIJKLMNOPQRSTUVWXYZ" if os.path.exists(f"{d}:\\")]
    results = []
    for drive in drives:
        for root, dirs, files in os.walk(drive):
            for f in files:
                if filename.lower() in f.lower():
                    results.append(os.path.join(root, f))
    if results:
        print("📁 Found files:")
        for r in results:
            print(" -", r)
    else:
        print("❌ File not found")

# ================= NATURAL LANGUAGE PARSING =================
def parse_command(text, apps_db):
    text = text.lower()

    # "open [browser] and search [query]"
    m = re.match(r"open\s+(\w+)\s+and\s+search\s+(.*?)$", text)
    if m:
        app = m.group(1)
        query = m.group(2)
        if app in apps_db:
            open_app(app, apps_db)
            if app in ["firefox", "chrome", "edge"]:
                youtube(query)
            else:
                print(f"Cannot search inside {app}, just opened app.")
            return True

    # Close apps
    for app in apps_db:
        if f"close {app}" in text:
            close_app(app)
            return True

    # File search
    if text.startswith("file -s"):
        filename = re.findall(r'"(.*?)"', text)
        if filename:
            search_file(filename[0])
        else:
            search_file(text.replace("file -s", "").strip())
        return True

    # Direct YouTube search without specifying browser
    if "youtube" in text or "search youtube" in text:
        q = re.sub(r"(search|youtube)", "", text).strip()
        youtube(q)
        return True

    # Google search without specifying browser
    if "google" in text or "search google" in text:
        q = re.sub(r"(search|google)", "", text).strip()
        google(q)
        return True

    # Open website
    if is_domain(text):
        open_site(text)
        return True

    return False

# ================= UI =================
def banner():
    os.system("cls")
    print("════════════════════════════════════")
    print("🚀 PERSONAL J.A.R.V.I.S TERMINAL AI")
    print("✔ Terminal always on top")
    print("✔ Background apps")
    print("✔ Natural commands")
    print("════════════════════════════════════")

def help_menu():
    print("""
code -a           Open VS Code
firefox -a        Open Firefox
chrome -a         Open Chrome
edge -a           Open Edge
explorer -a       Open File Explorer
explorer C:\\Path  Open specific folder
close [app]       Close an app
running           Show running apps
file -s "name"    Search file in all drives
query -y          YouTube search
query -s          Google search
site.com          Open website
exit              Quit
""")

# ================= MAIN =================
def main():
    apps = update_db()
    banner()
    help_menu()

    while True:
        cmd = input("\n🎯 Command > ").strip()
        if not cmd:
            continue

        if cmd.lower() == "exit":
            break
        elif cmd.lower() == "running":
            show_running_apps()
        elif parse_command(cmd, apps):
            continue
        else:
            # Open app if exact match
            if cmd.lower() in apps:
                open_app(cmd.lower(), apps)
            else:
                google(cmd)

# ================= START =================
if __name__ == "__main__":
    main()
    