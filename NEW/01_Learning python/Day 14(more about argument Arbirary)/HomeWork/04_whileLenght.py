def Length(*argu):
    check=0
    Len=len(argu)
    i=0
    while i<Len:
        check+=1
        i+=1
    return check



print(Length(3,432,42,23,32,43))