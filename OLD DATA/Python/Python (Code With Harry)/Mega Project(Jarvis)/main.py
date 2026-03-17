import webbrowser as web
import subprocess
import os
import sys
from urllib.parse import quote

# Auto-start on PC startup (place this in startup folder)
# Copy this Python file to: C:\Users\YourUsername\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup

def open_app(app_name):
    """Open different applications"""
    app_commands = {
        # System & Utilities
        "notepad": "notepad",
        "calc": "calc",
        "calculator": "calc",
        "shot": "snippingtool",
        "screenshot": "snippingtool",
        "record": "soundrecorder",
        "recorder": "soundrecorder",
        "file": "explorer",
        "explorer": "explorer",
        "cmd": "cmd",
        "terminal": "wt",
        "wl": "wt",
        "wt": "wt",
        "clock": "explorer shell:AppsFolder\Microsoft.WindowsAlarms_8wekyb3d8bbwe!App",
        
        # Browsers
        "chrome": r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        "edge": "msedge",
        "fox": r"C:\Program Files\Mozilla Firefox\firefox.exe",
        "firefox": r"C:\Program Files\Mozilla Firefox\firefox.exe",
        
        # Development & Programming
        "code": r"C:\Users\{}\AppData\Local\Programs\Microsoft VS Code\Code.exe".format(os.getlogin()),
        "vscode": r"C:\Users\{}\AppData\Local\Programs\Microsoft VS Code\Code.exe".format(os.getlogin()),
        "python": "python",
        
        # Office Apps
        "powerpoint": "powerpnt",
        "ppt": "powerpnt",
        "excel": "excel",
        "excle": "excel",
        "word": "winword",
        
        # Other Apps
        "anydesk": "anydesk",
        "whatsapp": r"C:\Users\{}\AppData\Local\WhatsApp\WhatsApp.exe".format(os.getlogin()),
        "pc": "taskmgr",  # PC Manager/Task Manager
        "taskmgr": "taskmgr",
        "setting": "start ms-settings:",
        "settings": "start ms-settings:",
        "control": "control",
    }
    
    if app_name in app_commands:
        try:
            subprocess.Popen(app_commands[app_name])
            print(f"Opening {app_name}...")
            return True
        except Exception as e:
            print(f"Error opening {app_name}: {e}")
            return False
    else:
        print(f"App '{app_name}' not recognized")
        return False

def open_youtube(search_query):
    """Open YouTube search in Chrome"""
    # Encode search query for URL
    encoded_search = quote(search_query)
    url = f"https://www.youtube.com/results?search_query={encoded_search}"
    
    # Try to open in Chrome
    try:
        # First check if Chrome is already registered
        web.get('chrome').open(url)
        print(f"Searching YouTube for: {search_query}")
    except:
        try:
            # Register Chrome
            chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
            web.register('chrome', None, web.BackgroundBrowser(chrome_path))
            web.get('chrome').open(url)
            print(f"Searching YouTube for: {search_query}")
        except:
            # Fallback to default browser
            web.open(url)
            print(f"Searching YouTube for: {search_query} (using default browser)")

def web_search(search_query):
    """Search on default search engine"""
    encoded_search = quote(search_query)
    url = f"https://www.google.com/search?q={encoded_search}"
    web.open(url)
    print(f"Searching for: {search_query}")

def main():
    """Main loop that restarts automatically"""
    while True:
        print("\n" + "="*50)
        print("COMMAND ASSISTANT")
        print("="*50)
        print("Commands:")
        print("  app_name -a          (Open application)")
        print("  search_term -y       (Search on YouTube)")
        print("  search_term -s       (Web search)")
        print("  website.com -w       (Open website)")
        print("  exit                 (Close program)")
        print("="*50)
        
        try:
            command = input("\nEnter command: ").strip().lower()
            
            if command == "exit":
                print("Goodbye!")
                break
            
            # Check for YouTube search (-y flag)
            elif " -y" in command:
                search_term = command.replace(" -y", "").strip()
                if search_term:
                    open_youtube(search_term)
                else:
                    print("Please enter search term before -y")
            
            # Check for web search (-s flag)
            elif " -s" in command:
                search_term = command.replace(" -s", "").strip()
                if search_term:
                    web_search(search_term)
                else:
                    print("Please enter search term before -s")
            
            # Check for website (-w flag)
            elif " -w" in command:
                url = command.replace(" -w", "").strip()
                if url:
                    if not url.startswith("http"):
                        url = "https://" + url
                    web.open(url)
                    print(f"Opening website: {url}")
                else:
                    print("Please enter website before -w")
            
            # Check for app opening (-a flag)
            elif " -a" in command:
                app_name = command.replace(" -a", "").strip()
                if app_name:
                    open_app(app_name)
                else:
                    print("Please enter app name before -a")
            
            # If no flag, assume it's an app name
            elif command:
                # Check if it's a known app
                if open_app(command):
                    pass
                else:
                    # If not a known app, do a web search
                    print(f"'{command}' not recognized as app. Performing web search...")
                    web_search(command)
            
            else:
                print("Please enter a command")
        
        except KeyboardInterrupt:
            print("\n\nProgram interrupted. Goodbye!")
            break
        except Exception as e:
            print(f"Error: {e}")

# For auto-start on PC boot, create a shortcut to this script in startup folder:
# Windows key + R → shell:startup → Create shortcut to this Python file

if __name__ == "__main__":
    print("Starting Command Assistant...")
    print("Type 'exit' to close the program")
    main()
    # Auto-restart after completion
    print("\nRestarting...")
    os.execv(sys.executable, ['python'] + sys.argv)