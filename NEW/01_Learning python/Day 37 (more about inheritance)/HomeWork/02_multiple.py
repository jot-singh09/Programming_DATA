
class Camera:
    def take_photo(self):
        print("Taking photo")


class MusicPlayer:
    def play_music(self):
        print("Playing music")


class Phone:
    def call(self):
        print("Calling someone")

# Child Class inheriting multiple classes
class SmartPhone(Camera, MusicPlayer, Phone,):
    def __init__(self,name):
        self.name = name
    def display_name(self):
        print(f"Smartphone name: {self.name}")
        self.take_photo()
        self.play_music()
        self.call()

my_phone = SmartPhone("iPhone")

# Access methods from all parent classes
my_phone.display_name()
