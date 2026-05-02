s={1,2,3,4,5}
s1={5,6,7,8,9}
uni = s.union(s1) # 1,2,3,4,5,6,7,8,9
print(uni)
inter = s.intersection(s1) # 5
print(inter)
diff = s.difference(s1) # 1,2,3,4
print(diff)
sumdeff = s.symmetric_difference(s1) # 1,2,3,4,6,7,8,9
print(sumdeff)
