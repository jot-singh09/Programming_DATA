# it show the uncommon value of both sets
s={1,3,45,32}
s1={432,4,21,1,3}
s2 = s.symmetric_difference_update(s1)
print(s2)
print(s^s1)