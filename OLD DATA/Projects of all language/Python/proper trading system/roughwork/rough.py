with open(' walletcreation.txt','r') as create:
    walletno=create.read()
    print(type(walletno),walletno)

    convert = int(walletno)  # Convert to integer
    print(type(convert),convert)
    convert=convert+1
    convertstr = str(convert)
with open(' walletcreation.txt','w') as update:
    update.write(convertstr)


 