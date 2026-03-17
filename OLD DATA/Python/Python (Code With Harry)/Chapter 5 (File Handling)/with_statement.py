with open("file.txt") as f:
    data=f.read()
    if "Twinkle" in data:
        print("Twinkle is Present")
    else:
        print("Not Present!")