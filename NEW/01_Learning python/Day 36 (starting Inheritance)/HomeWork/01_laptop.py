class Cpu:
    def __init__(self, name, frequency):
        self.name = name
        self.frequency = frequency
    def showCpu(self):
        print(f"The Cpu name is {self.name} and the frequency is {self.frequency}")
class Ram:
    def __init__(self, size):
        self.size = size
    def showRam(self):
        print(f"The Ram size is {self.size}")
class Storage:
    def __init__(self, capacity):
        self.capacity = capacity
    def showStorage(self):
        print(f"The Storage capacity is {self.capacity}")
class Laptop(Cpu,Ram,Storage):
    def __init__(self, name, frequency, size, capacity, model, price):
        Cpu.__init__(self, name, frequency)
        Ram.__init__(self, size)
        Storage.__init__(self, capacity)
        self.model = model
        self.price = price
    def show(self):
        print(f"The Model is {self.model}")
        print(f"The Price is {self.price}")
        print()
        self.showCpu()
        print()
        self.showRam()
        print()
        self.showStorage()
l1 = Laptop(name="Intel i7", frequency="3.5GHz", size="16GB", capacity="512GB", model="Dell XPS 15", price="$1500")
l1.show()
print("======")
l1.showRam()
l1.showStorage()