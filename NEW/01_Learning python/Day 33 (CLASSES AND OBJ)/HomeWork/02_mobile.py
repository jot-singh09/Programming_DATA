class Mobile:
    company=""
    price=99999
    def show_price(self):
        print(f"The price of {self.company} is : {self.price}")

mo1=Mobile()
mo1.company="Iphone"
mo1.show_price()
