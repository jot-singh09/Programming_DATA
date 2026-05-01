# d={
#     "a":[f"{i}" for i in range(1,11)]
# }
# count=0
# i=0
# while i<len(d["a"]):
#     check=d["a"][count]
#     check=int(check)
#     if check%2==0:
#         d["a"][count]="Even"
#     count+=1
#     i+=1
# print(d)

d={
    "a": [1,2,3,4,5,6,7,8,9,10]
}
d["a"]=[ i if i%2!=0 else "Even" for i in d["a"] ]
print(d)