'''
10. Other Patterns
a.
   *
  * *
 * * *
* * * *
'''

for i in range (1,5):
    for j in range(3,i-1,-1):
        print(" ",end="")
    for k in range(1,i+1):
        print("*",end=" ")
        
    print()

'''
b. 
* * * *
 * * *
  * *
   *
'''
print()
print("--------------------------------")
print()
for i in range (1,5):
    for j in range(1,i):
        print("",end=" ")
    for k in range(4,i-1,-1):
        print("*",end=" ")
    print()

print()
print("--------------------------------")
print()

'''
****
 ***
  **
   *
'''

for i in range (1,5):
    for j in range(1,i):
        print("",end=" ")
    for k in range(4,i-1,-1):
        print("*",end="")
    print()

print()
print("--------------------------------")
print()

for i in range (1,5):
    for j in range(3,i-1,-1):
        print(" ",end="")
    for k in range(1,i+1):
        print("*",end="")
        
    print()

