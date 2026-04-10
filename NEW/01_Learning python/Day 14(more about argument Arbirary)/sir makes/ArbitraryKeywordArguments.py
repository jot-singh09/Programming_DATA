def sum(**ka):
    print(ka)
    print(type(ka))
    for i in ka:
        print(i,":",ka[i])

sum(a=2, b=4, c=5, d=6, e=7)