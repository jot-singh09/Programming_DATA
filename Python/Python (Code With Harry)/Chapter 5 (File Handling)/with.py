# another method to the file but no need to close the file

with open("file.txt") as f:
    print(f.read())