def fun(**ka):
    print(type(ka))
    for i in ka:
        print(f"'{i}' : {ka[i]}")

fun(a=8,b=9,c=87)