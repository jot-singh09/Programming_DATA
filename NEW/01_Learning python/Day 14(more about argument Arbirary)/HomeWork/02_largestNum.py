def larger(*num):
    
    check=0
    for i in num:
        if i>check:
            check=i
    return check
      



print(larger(1,28,6,8,39,31))