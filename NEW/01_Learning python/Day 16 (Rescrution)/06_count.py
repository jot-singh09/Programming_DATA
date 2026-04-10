def count(n):
    if n==0:
        
        return 0
    # mod=n%10
    
    # cou=cou+1
    
    return 1 + count(n//10)

print(count(123))