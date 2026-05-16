class processor:
    def process(self):
        print("I am a processor")
class laptop(processor):
    def process(self):
        print("I am a laptop")
class mobile(processor):
    def process(self):
        print("I am a mobile")
p1=processor()
p1.process()
l1=laptop()
l1.process()
m1=mobile()
m1.process()
