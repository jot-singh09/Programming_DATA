# in walrus operator we do two work on one operator
if (n:=len([1,2,3,4,5])) > 3 : # now we say if n is big then 3 and print the length of list
    print(f"Too long ({n} has showing)")