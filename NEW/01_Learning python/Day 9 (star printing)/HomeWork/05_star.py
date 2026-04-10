'''
   *
  * *
 * * *
* * * *
'''
num=4
i=1



while i<=num:
    j=num-1
    while j>=i:
        print(" ",end="")
        j-=1
    k=1
    while k<=i:
        print("*",end=" ")
        k+=1
    i+=1
    print()
    
