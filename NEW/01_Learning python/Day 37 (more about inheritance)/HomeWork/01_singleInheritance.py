class Water:
    def __init__(self, name):
        self.li = name

    def use(self):
        print(f"{self.li} liter water is used .")

class ice(Water):
    def __init__(self, name):
        super().__init__(name)

    def cool(self):
        print(f"{self.li} liter ice is used for making ice .")
        self.use()
w1 = ice("15")
w1.cool()
