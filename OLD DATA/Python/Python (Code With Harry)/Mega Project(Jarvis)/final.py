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
from pathlib import Path

# ================= CONFIG =================
KNOWN_APPS_FILE = "known_apps.json"
MAX_FILE_RESULTS = 20

user32 = ctypes.windll.user32
kernel32 = ctypes.windll.kernel32

# ================= TERMINAL FOCUS =================
def force_terminal_front():
    try:
        hwnd = kernel32.GetConsoleWindow()
        if not hwnd:
            return
        fg = user32.GetForegroundWindow()
        fg_tid = user32.GetWindowThreadProcessId(fg, None)
        tid = kernel32.GetCurrentThreadId()
        user32.AttachThreadInput(fg_tid, tid, True)
        user32.ShowWindow(hwnd, 9)
        user32.SetForegroundWindow(hwnd)
        user32.BringWindowToTop(hwnd)
        user32.AttachThreadInput(fg_tid, tid, False)
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
        "explorer": "explorer.exe",
        "notepad": "notepad.exe",
        "calc": "calc.exe",
        "paint": "mspaint.exe",
    })
    return apps

def update_db():
    apps = discover_installed_apps()
    with open(KNOWN_APPS_FILE, "w") as f:
        json.dump(apps, f, indent=2)
    return apps

# ================= APP CONTROL =================
def open_app(app, apps):
    def run():
        if app in apps:
            subprocess.Popen(apps[app], shell=False)
            time.sleep(0.5)
            force_terminal_front()
            print(f"✅ Opened (background): {app}")
        else:
            print("❌ App not found")
    threading.Thread(target=run, daemon=True).start()

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

def show_running_apps():
    out = subprocess.check_output("tasklist", shell=True, text=True)
    apps = set()
    for line in out.splitlines()[3:]:
        if ".exe" in line:
            apps.add(line.split()[0].replace(".exe", ""))
    print("\n🟢 Running Apps:")
    for a in sorted(apps):
        print(" -", a)

# ================= OFFLINE AI =================
KNOWLEDGE_BASE = {
    "python": "Python is a high-level programming language known for simplicity and power.",
    "git": "Git is a version control system used to track code changes.",
    "-r": "`-r` means analysis mode in JARVIS.",
    "-f": "`-f` enables friend mode — just talk, no commands.",
    "jarvis": "I’m your personal terminal JARVIS, always here 😎"
}

def ai_analyze(query):
    key = query.lower().strip()
    for k in KNOWLEDGE_BASE:
        if k in key:
            return KNOWLEDGE_BASE[k]
    if "what is" in key or "explain" in key:
        return f"I don’t know everything yet, but `{query}` looks like something technical. Maybe try online search?"
    return f"I analyzed `{query}` — looks interesting, but I need more context."

def friend_reply(text):
    replies = [
        "Haha 😄 I’m listening.",
        "That’s interesting, tell me more.",
        "I’m here with you, buddy.",
        "You sound curious today 🔥",
        "Chill, I got your back."
    ]
    return replies[hash(text) % len(replies)]

# ================= FILE SEARCH =================
def search_files(term):
    results = []
    drives = [f"{d}:\\" for d in "ABCDEFGHIJKLMNOPQRSTUVWXYZ" if os.path.exists(f"{d}:\\")]
    for drive in drives:
        for root, dirs, files in os.walk(drive):
            for f in files:
                if term.lower() in f.lower():
                    results.append(os.path.join(root, f))
                    if len(results) >= MAX_FILE_RESULTS:
                        return results
    return results

# ================= WEB =================
def is_domain(t):
    return re.match(r"^[\w-]+(\.[\w-]+)+$", t)

def google(q):
    web.open(f"https://www.google.com/search?q={quote(q)}")
    time.sleep(0.3)
    force_terminal_front()

def youtube(q):
    web.open(f"https://www.youtube.com/results?search_query={quote(q)}")
    time.sleep(0.3)
    force_terminal_front()

# ================= UI =================
def banner():
    os.system("cls")
    print("══════════════════════════════════════")
    print("🤖 JARVIS – Personal Terminal AI")
    print("✔ Offline AI Brain")
    print("✔ Safe Intent Engine")
    print("✔ Friend Mode & Analysis Mode")
    print("✔ Online Search & File Search")
    print("══════════════════════════════════════")

def help_menu():
    print("""
code -a                 Open VS Code
firefox -a              Open Firefox
explorer -a             Open File Explorer
explorer C:\\Users       Open folder
close chrome             Close Chrome
list                     Show apps
running                  Show running apps
query -y                 YouTube search
query -s                 Google search
file -s "text"           Search files on all drives
something -r             Analyze & explain
talk -f                  Friend mode
exit                     Quit
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
        low = cmd.lower()
        parts = low.split()

        # Exit
        if low == "exit":
            break

        # List running apps
        elif low == "running":
            show_running_apps()

        # List installed apps
        elif low == "list":
            print("\n📦 Apps:")
            for a in sorted(apps):
                print(" -", a)

        # Friend mode
        elif "-f" in parts:
            print("🤖:", friend_reply(cmd.replace("-f", "").strip()))

        # Analysis mode
        elif "-r" in parts:
            print("🧠 Analysis:", ai_analyze(cmd.replace("-r", "").strip()))

        # File search
        elif "-s" in parts and parts[0] == "file":
            term = cmd.split('"')[1] if '"' in cmd else parts[-1]
            results = search_files(term)
            print("\n🗂 Found files:")
            if results:
                for r in results:
                    print(r)
            else:
                print("No files found matching:", term)

        # Close app
        elif "close" in parts:
            close_app(parts[-1])

        # Open app
        elif "-a" in parts:
            open_app(parts[0], apps)

        # YouTube search
        elif "-y" in parts:
            youtube(" ".join(parts[:-1]))

        # Google search
        elif "-s" in parts:
            google(" ".join(parts[:-1]))

        # Domain
        elif is_domain(low):
            web.open("https://" + low)
            force_terminal_front()

        # App direct
        elif low in apps:
            open_app(low, apps)

        # Default: analyze & suggest online search
        else:
            print("🧠 Analysis:", ai_analyze(cmd))
            print("🌐 Suggest online search: type `query -s {term}` or `query -y {term}`")

# ================= START =================
if __name__ == "__main__":
    main()
