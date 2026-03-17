# import webbrowser as web
# import subprocess
# import os
# import sys
# import json
# import time
# import threading
# import re
# from urllib.parse import quote
# import winreg

# # ========== FILES ==========
# KNOWN_APPS_FILE = "known_apps.json"

# # ========== APP DISCOVERY ==========
# def discover_installed_apps():
#     apps = {}

#     registry_paths = [
#         (winreg.HKEY_LOCAL_MACHINE, r"SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths"),
#         (winreg.HKEY_CURRENT_USER, r"SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths"),
#         (winreg.HKEY_LOCAL_MACHINE, r"SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\App Paths"),
#     ]

#     for hive, path in registry_paths:
#         try:
#             with winreg.OpenKey(hive, path) as key:
#                 for i in range(winreg.QueryInfoKey(key)[0]):
#                     app_name = winreg.EnumKey(key, i)
#                     try:
#                         with winreg.OpenKey(key, app_name) as app_key:
#                             app_path, _ = winreg.QueryValueEx(app_key, "")
#                             if app_path and os.path.exists(app_path):
#                                 apps[app_name.replace(".exe", "").lower()] = app_path
#                     except:
#                         continue
#         except:
#             continue

#     common_apps = {
#         "notepad": "notepad.exe",
#         "calc": "calc.exe",
#         "paint": "mspaint.exe",
#         "cmd": "cmd.exe",
#         "powershell": "powershell.exe",
#         "explorer": "explorer.exe",
#         "taskmgr": "taskmgr.exe",

#         "chrome": r"C:\Program Files\Google\Chrome\Application\chrome.exe",
#         "edge": r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
#         "firefox": r"C:\Program Files\Mozilla Firefox\firefox.exe",

#         "vscode": fr"C:\Users\{os.getlogin()}\AppData\Local\Programs\Microsoft VS Code\Code.exe",
#         "telegram": fr"C:\Users\{os.getlogin()}\AppData\Roaming\Telegram Desktop\Telegram.exe",
#         "whatsapp": fr"C:\Users\{os.getlogin()}\AppData\Local\WhatsApp\WhatsApp.exe",
#     }

#     apps.update(common_apps)
#     return apps


# def save_known_apps(apps):
#     with open(KNOWN_APPS_FILE, "w") as f:
#         json.dump(apps, f, indent=2)


# def load_known_apps():
#     if os.path.exists(KNOWN_APPS_FILE):
#         with open(KNOWN_APPS_FILE, "r") as f:
#             return json.load(f)
#     return {}


# def update_app_database():
#     print("🔍 Scanning installed apps...")
#     apps = discover_installed_apps()
#     save_known_apps(apps)
#     return apps


# # ========== OPEN APP (SAFE + NON-BLOCKING) ==========
# def open_app_non_blocking(app_name, apps_db):
#     app = app_name.lower()

#     def runner():
#         if app in apps_db:
#             try:
#                 path = apps_db[app]
#                 if not path.lower().endswith(".exe"):
#                     print("❌ Invalid app path")
#                     return
#                 subprocess.Popen([path], shell=False)
#                 print(f"✅ Opened: {app_name}")
#             except Exception as e:
#                 print(f"❌ Error: {e}")
#         else:
#             print("❌ App not found")

#     threading.Thread(target=runner, daemon=True).start()


# # ========== WEB / SEARCH ==========
# def is_website_domain(text):
#     pattern = r"^[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$"
#     return re.match(pattern, text.lower()) is not None


# def open_website(site):
#     if not site.startswith("http"):
#         site = "https://" + site

#     threading.Thread(target=lambda: web.open(site), daemon=True).start()
#     print(f"🌐 Opening: {site}")


# def web_search(query):
#     url = f"https://www.google.com/search?q={quote(query)}"
#     threading.Thread(target=lambda: web.open(url), daemon=True).start()
#     print(f"🔍 Searching: {query}")


# def open_youtube(query):
#     url = f"https://www.youtube.com/results?search_query={quote(query)}"
#     threading.Thread(target=lambda: web.open(url), daemon=True).start()
#     print(f"🎬 YouTube: {query}")


# # ========== UI ==========
# def clear_screen():
#     os.system("cls" if os.name == "nt" else "clear")


# def banner():
#     clear_screen()
#     print("════════════════════════════════════════════")
#     print("🚀 SMART COMMAND ASSISTANT (SAFE MODE)")
#     print("════════════════════════════════════════════")
#     print("✔ No auto-start")
#     print("✔ Apps open in background")
#     print("✔ Terminal stays active")
#     print("Type: help -h")
#     print("════════════════════════════════════════════")


# def help_menu():
#     print("""
# 📖 COMMANDS
# --------------------------------
# appname -a     Open app
# query -y       YouTube search
# query -s       Google search
# site.com       Open website
# list -l        List apps
# update -u      Update app database
# clear -c       Clear screen
# exit           Quit
# --------------------------------
# """)


# # ========== MAIN ==========
# def main():
#     apps_db = update_app_database()
#     banner()
#     help_menu()

#     while True:
#         try:
#             cmd = input("\n🎯 Command > ").strip()
#             if not cmd:
#                 continue

#             if cmd in ["exit", "quit"]:
#                 print("👋 Goodbye!")
#                 break

#             if cmd in ["help", "-h"]:
#                 help_menu()
#                 continue

#             if cmd in ["clear", "-c"]:
#                 banner()
#                 continue

#             if cmd in ["update", "-u"]:
#                 apps_db = update_app_database()
#                 print("✅ Apps updated")
#                 continue

#             if cmd in ["list", "-l"]:
#                 print("\n📦 Apps:")
#                 for a in sorted(apps_db):
#                     print(" -", a)
#                 continue

#             parts = cmd.split()

#             if "-a" in parts:
#                 open_app_non_blocking(" ".join(p for p in parts if p != "-a"), apps_db)

#             elif "-y" in parts:
#                 open_youtube(" ".join(p for p in parts if p != "-y"))

#             elif "-s" in parts:
#                 web_search(" ".join(p for p in parts if p != "-s"))

#             else:
#                 if is_website_domain(cmd):
#                     open_website(cmd)
#                 elif cmd.lower() in apps_db:
#                     open_app_non_blocking(cmd, apps_db)
#                 else:
#                     web_search(cmd)

#         except KeyboardInterrupt:
#             print("\n⚠ Interrupted")
#         except Exception as e:
#             print("❌ Error:", e)


# # ========== START ==========
# if __name__ == "__main__":
#     main()

# import webbrowser as web
# import subprocess
# import os
# import json
# import time
# import threading
# import re
# from urllib.parse import quote
# import winreg
# import ctypes

# # ========== FILE ==========
# KNOWN_APPS_FILE = "known_apps.json"

# # ========== WINDOWS: BRING TERMINAL TO FRONT ==========
# def bring_terminal_to_front():
#     try:
#         hwnd = ctypes.windll.kernel32.GetConsoleWindow()
#         if hwnd:
#             ctypes.windll.user32.ShowWindow(hwnd, 5)  # SW_SHOW
#             ctypes.windll.user32.SetForegroundWindow(hwnd)
#     except:
#         pass

# # ========== APP DISCOVERY ==========
# def discover_installed_apps():
#     apps = {}

#     registry_paths = [
#         (winreg.HKEY_LOCAL_MACHINE, r"SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths"),
#         (winreg.HKEY_CURRENT_USER, r"SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths"),
#         (winreg.HKEY_LOCAL_MACHINE, r"SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\App Paths"),
#     ]

#     for hive, path in registry_paths:
#         try:
#             with winreg.OpenKey(hive, path) as key:
#                 for i in range(winreg.QueryInfoKey(key)[0]):
#                     app_name = winreg.EnumKey(key, i)
#                     try:
#                         with winreg.OpenKey(key, app_name) as app_key:
#                             app_path, _ = winreg.QueryValueEx(app_key, "")
#                             if app_path and os.path.exists(app_path):
#                                 apps[app_name.replace(".exe", "").lower()] = app_path
#                     except:
#                         continue
#         except:
#             continue

#     user = os.getlogin()
#     common_apps = {
#         "notepad": "notepad.exe",
#         "calc": "calc.exe",
#         "paint": "mspaint.exe",
#         "cmd": "cmd.exe",
#         "powershell": "powershell.exe",
#         "explorer": "explorer.exe",
#         "taskmgr": "taskmgr.exe",

#         "chrome": r"C:\Program Files\Google\Chrome\Application\chrome.exe",
#         "edge": r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
#         "firefox": r"C:\Program Files\Mozilla Firefox\firefox.exe",

#         "vscode": fr"C:\Users\{user}\AppData\Local\Programs\Microsoft VS Code\Code.exe",
#         "telegram": fr"C:\Users\{user}\AppData\Roaming\Telegram Desktop\Telegram.exe",
#         "whatsapp": fr"C:\Users\{user}\AppData\Local\WhatsApp\WhatsApp.exe",
#     }

#     apps.update(common_apps)
#     return apps


# def save_known_apps(apps):
#     with open(KNOWN_APPS_FILE, "w") as f:
#         json.dump(apps, f, indent=2)


# def update_app_database():
#     print("🔍 Scanning installed apps...")
#     apps = discover_installed_apps()
#     save_known_apps(apps)
#     return apps


# # ========== OPEN APP (BACKGROUND + TERMINAL FRONT) ==========
# def open_app_non_blocking(app_name, apps_db):
#     app = app_name.lower()

#     def runner():
#         if app in apps_db:
#             try:
#                 subprocess.Popen([apps_db[app]], shell=False)
#                 time.sleep(0.3)  # allow app to grab focus
#                 bring_terminal_to_front()
#                 print(f"✅ Opened (background): {app}")
#             except Exception as e:
#                 print(f"❌ Open error: {e}")
#         else:
#             print("❌ App not found")

#     threading.Thread(target=runner, daemon=True).start()


# # ========== CLOSE APP ==========
# def close_app(app_name):
#     app = app_name.lower()

#     def runner():
#         try:
#             subprocess.run(
#                 ["taskkill", "/f", "/im", f"{app}.exe"],
#                 stdout=subprocess.DEVNULL,
#                 stderr=subprocess.DEVNULL,
#                 shell=True
#             )
#             bring_terminal_to_front()
#             print(f"🛑 Closed: {app}")
#         except Exception as e:
#             print(f"❌ Close error: {e}")

#     threading.Thread(target=runner, daemon=True).start()


# # ========== WEB ==========
# def is_website_domain(text):
#     return re.match(r"^[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$", text) is not None


# def open_website(site):
#     if not site.startswith("http"):
#         site = "https://" + site
#     threading.Thread(target=lambda: web.open(site), daemon=True).start()
#     bring_terminal_to_front()
#     print(f"🌐 Opening: {site}")


# def web_search(query):
#     url = f"https://www.google.com/search?q={quote(query)}"
#     threading.Thread(target=lambda: web.open(url), daemon=True).start()
#     bring_terminal_to_front()
#     print(f"🔍 Searching: {query}")


# def open_youtube(query):
#     url = f"https://www.youtube.com/results?search_query={quote(query)}"
#     threading.Thread(target=lambda: web.open(url), daemon=True).start()
#     bring_terminal_to_front()
#     print(f"🎬 YouTube: {query}")


# # ========== UI ==========
# def clear_screen():
#     os.system("cls")


# def banner():
#     clear_screen()
#     print("════════════════════════════════════")
#     print("🚀 SMART COMMAND ASSISTANT")
#     print("════════════════════════════════════")
#     print("✔ Apps open in background")
#     print("✔ Terminal always in front")
#     print("✔ Open & Close apps")
#     print("Type: help -h")
#     print("════════════════════════════════════")


# def help_menu():
#     print("""
# 📖 COMMANDS
# --------------------------------
# firefox -a        Open Firefox
# firefox close     Close Firefox
# close firefox     Close Firefox
# firefox -x        Close Firefox
# query -y          YouTube search
# query -s          Google search
# site.com          Open website
# list -l           List apps
# update -u         Update app database
# clear -c          Clear screen
# exit              Quit
# --------------------------------
# """)


# # ========== MAIN ==========
# def main():
#     apps_db = update_app_database()
#     banner()
#     help_menu()

#     while True:
#         try:
#             cmd = input("\n🎯 Command > ").strip().lower()
#             if not cmd:
#                 continue

#             if cmd in ["exit", "quit"]:
#                 print("👋 Goodbye!")
#                 break

#             if cmd in ["help", "-h"]:
#                 help_menu()
#                 continue

#             if cmd in ["clear", "-c"]:
#                 banner()
#                 continue

#             if cmd in ["update", "-u"]:
#                 apps_db = update_app_database()
#                 print("✅ Apps updated")
#                 continue

#             if cmd in ["list", "-l"]:
#                 print("\n📦 Apps:")
#                 for a in sorted(apps_db):
#                     print(" -", a)
#                 continue

#             parts = cmd.split()

#             if "close" in parts or "-x" in parts:
#                 app = parts[0] if parts[0] not in ["close", "-x"] else parts[1]
#                 close_app(app)

#             elif "-a" in parts:
#                 open_app_non_blocking(parts[0], apps_db)

#             elif "-y" in parts:
#                 open_youtube(" ".join(p for p in parts if p != "-y"))

#             elif "-s" in parts:
#                 web_search(" ".join(p for p in parts if p != "-s"))

#             else:
#                 if is_website_domain(cmd):
#                     open_website(cmd)
#                 elif cmd in apps_db:
#                     open_app_non_blocking(cmd, apps_db)
#                 else:
#                     web_search(cmd)

#         except KeyboardInterrupt:
#             print("\n⚠ Interrupted")
#         except Exception as e:
#             print("❌ Error:", e)


# # ========== START ==========
# if __name__ == "__main__":
#     main()









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

# ================= TERMINAL FOCUS =================
def bring_terminal_to_front():
    try:
        hwnd = ctypes.windll.kernel32.GetConsoleWindow()
        if hwnd:
            ctypes.windll.user32.ShowWindow(hwnd, 5)
            ctypes.windll.user32.SetForegroundWindow(hwnd)
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
                    app_name = winreg.EnumKey(key, i)
                    try:
                        with winreg.OpenKey(key, app_name) as app_key:
                            app_path, _ = winreg.QueryValueEx(app_key, "")
                            if app_path and os.path.exists(app_path):
                                apps[app_name.replace(".exe", "").lower()] = app_path
                    except:
                        pass
        except:
            pass

    user = os.getlogin()
    common_apps = {
        "notepad": "notepad.exe",
        "calc": "calc.exe",
        "paint": "mspaint.exe",
        "cmd": "cmd.exe",
        "powershell": "powershell.exe",
        "explorer": "explorer.exe",

        "chrome": r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        "edge": r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
        "firefox": r"C:\Program Files\Mozilla Firefox\firefox.exe",

        "code": fr"C:\Users\{user}\AppData\Local\Programs\Microsoft VS Code\Code.exe",
        "telegram": fr"C:\Users\{user}\AppData\Roaming\Telegram Desktop\Telegram.exe",
        "whatsapp": fr"C:\Users\{user}\AppData\Local\WhatsApp\WhatsApp.exe",
    }

    apps.update(common_apps)
    return apps


def update_app_database():
    apps = discover_installed_apps()
    with open(KNOWN_APPS_FILE, "w") as f:
        json.dump(apps, f, indent=2)
    return apps


# ================= OPEN APP =================
def open_app(app, apps_db):
    def runner():
        if app in apps_db:
            try:
                subprocess.Popen(apps_db[app], shell=False)
                time.sleep(0.4)
                bring_terminal_to_front()
                print(f"✅ Opened (background): {app}")
            except Exception as e:
                print("❌ Open error:", e)
        else:
            print("❌ App not found")

    threading.Thread(target=runner, daemon=True).start()


# ================= CLOSE APP =================
def close_app(app):
    def runner():
        subprocess.run(
            ["taskkill", "/f", "/im", f"{app}.exe"],
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
            shell=True
        )
        bring_terminal_to_front()
        print(f"🛑 Closed: {app}")

    threading.Thread(target=runner, daemon=True).start()


# ================= RUNNING APPS =================
def show_running_apps():
    try:
        output = subprocess.check_output(
            "tasklist", shell=True, text=True
        )
        apps = set()
        for line in output.splitlines()[3:]:
            if ".exe" in line:
                apps.add(line.split()[0].replace(".exe", "").lower())

        print("\n🟢 Running Apps:")
        for app in sorted(apps):
            print(" -", app)
    except:
        print("❌ Unable to fetch running apps")


# ================= WEB =================
def is_website_domain(text):
    return re.match(r"^[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$", text) is not None


def open_site(url):
    if not url.startswith("http"):
        url = "https://" + url
    threading.Thread(target=lambda: web.open(url), daemon=True).start()
    bring_terminal_to_front()


def google_search(q):
    web.open(f"https://www.google.com/search?q={quote(q)}")
    bring_terminal_to_front()


def youtube_search(q):
    web.open(f"https://www.youtube.com/results?search_query={quote(q)}")
    bring_terminal_to_front()


# ================= UI =================
def clear():
    os.system("cls")


def banner():
    clear()
    print("════════════════════════════════════")
    print("🚀 SMART COMMAND ASSISTANT")
    print("════════════════════════════════════")
    print("✔ Terminal always in front")
    print("✔ Background apps")
    print("✔ Running apps supported")
    print("Type: help")
    print("════════════════════════════════════")


def help_menu():
    print("""
📖 COMMANDS
--------------------------------
code -a            Open VS Code
firefox -a         Open Firefox
close firefox      Close Firefox
running            Show running apps
query -y           YouTube search
query -s           Google search
site.com           Open website
list               List known apps
clear              Clear screen
exit               Quit
--------------------------------
""")


# ================= MAIN =================
def main():
    apps_db = update_app_database()
    banner()
    help_menu()

    while True:
        try:
            cmd = input("\n🎯 Command > ").strip().lower()
            if not cmd:
                continue

            parts = cmd.split()

            if cmd in ["exit", "quit"]:
                break

            if cmd == "help":
                help_menu()

            elif cmd == "clear":
                banner()

            elif cmd in ["running", "-r"]:
                show_running_apps()

            elif cmd == "list":
                print("\n📦 Known Apps:")
                for a in sorted(apps_db):
                    print(" -", a)

            elif "close" in parts:
                close_app(parts[-1])

            elif "-a" in parts:
                open_app(parts[0], apps_db)

            elif "-y" in parts:
                youtube_search(" ".join(parts[:-1]))

            elif "-s" in parts:
                google_search(" ".join(parts[:-1]))

            else:
                if is_website_domain(cmd):
                    open_site(cmd)
                elif cmd in apps_db:
                    open_app(cmd, apps_db)
                else:
                    google_search(cmd)

        except KeyboardInterrupt:
            break


# ================= START =================
if __name__ == "__main__":
    main()
