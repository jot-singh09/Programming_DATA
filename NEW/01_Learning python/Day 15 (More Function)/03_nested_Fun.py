def fun():
    x=10
    def fun1():
        nonlocal x
        x=20
    x=30
    print(x)
    fun1()
    print(x)
fun()