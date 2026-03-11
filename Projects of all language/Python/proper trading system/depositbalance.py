walletno=1
with open( f' {walletno}_1package.txt','r') as check_reg:
        checkreg=check_reg.read()
print(checkreg)
if checkreg=="1":
        print("hello")
elif checkreg=="0":
        print("o")