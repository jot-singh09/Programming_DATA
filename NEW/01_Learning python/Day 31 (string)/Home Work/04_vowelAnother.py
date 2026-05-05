d = {
    "a" : 0,
    "e" : 0,
    "i" : 0,
    "o" : 0,
    "u" : 0,

}
s=input("Enter the Value :")
count=0
vowel="aeiou"
for i in s :
    if i in vowel:
        d[i]+=1
        count+=1
for j in d:
    print(f"'{j}' : {d[j]}")
print(f"The Total Vowels are :{count}")