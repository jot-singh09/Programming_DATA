s = "hello Karan jot"
s1 = "how are you"

# capitalize()  first letter uppercase
print(s.capitalize())  
# Hello karan jot
# ----------------------

# casefold()  strong lowercase (better than lower)
print(s.casefold())  
# hello karan jot
# ----------------------

# center(width)  center text with spaces
print(s.center(30))  
#        hello Karan jot       
# ----------------------

# count(value) → count occurrences
print(s.count("a"))  
# count of 'a'
# ----------------------

#  encode() 
# print(s.encode())  
#  b'hello Karan jot'
#  ----------------------

#  endswith()  check ending 
print(s.endswith("hello"))  
#  True
#  ----------------------

#  expandtabs()  replace \t with spaces

print("hello \t world".expandtabs(5))  
#  hello   world
#  ----------------------

#  find()  first index of value
print(s.find("t"))  
#  index of t
#  ----------------------

# # format() → insert values
txt = "My name is {}"
print(txt.format("Karan"))  
# # My name is Karan
# # ----------------------

# # format_map() → dict formatting
data = {"name": "Karan"}
print("My name is {name}".format_map(data))  
# # My name is Karan
# # ----------------------

# # index() → same as find but error if not found
print(s.index("K"))  
# # index of K
# # ----------------------

# # isalnum() → only letters or numbers or both
num = "abc123"
print(num.isalnum())  
# # True
# # ----------------------

# # isalpha() → only letters
print("abc".isalpha())  
# # True
# # ----------------------

# # isascii() → only ASCII chars not under stand
# print("hello".isascii())  
# # True
# # ----------------------

# # isdecimal()
print("12".isdecimal())  
# # True
# # ----------------------

# # isdigit()
print("123".isdigit())  
# # True
# # ----------------------

# # isidentifier()
print("varname".isidentifier())  
# # True
# # ----------------------

# # islower() check the numebr is in lower
print("hello".islower())  
# # True
# # ----------------------

# # isnumeric()
print("123".isnumeric())  
# # True
# # ----------------------

# # isprintable()
print("hello".isprintable())  
# # True
# # ----------------------

# # isspace()

print(" ".isspace())  
# # True
# # ----------------------

# # istitle() check all first letter are big
print("Hello World".istitle())  
# # True
# # ----------------------

# # isupper()
print("HELLO".isupper())  
# # True
# # ----------------------

# # join() → join list into string
print("-".join(["a", "b", "c"]))  
# # a-b-c
# # ----------------------

# # ljust() → it also give space in there side
# # rjust() → it also give space in there side


print(s.ljust(25))  
print(s.rjust(25))  
# # hello Karan jot        
# # ----------------------

# # lower()
print(s.lower())  
# # hello karan jot
# # ----------------------

# # lstrip() → remove left spaces
print("   hi".lstrip())  
# # hi
# # ----------------------

# # maketrans() + translate()
table = str.maketrans("a", "x") # convert str to its num val
print("apple".translate(table))   # replace the value to another

# # xpple
# # ----------------------

# # partition()
print(s.partition("jot"))  
# # ('hello Karan', ' jot')
# # ----------------------

# # replace()
print(s.replace("hello", "hi"))  
# # hi Karan jot
# # ----------------------

# # rfind() it start from last  to find
print(s.rfind("o"))  
# # last index of 'o'
# # ----------------------

# # rindex() it start from last 
print(s.rindex("o"))  
# # last index of 'o'
# # ----------------------

# # rjust()

print(s.rjust(25))   # add the space
# #         hello Karan jot
# # ----------------------

# # rpartition()


print(s.rpartition("jot"))  
# # ('hello Karan', ' jot' ,'')
# # ----------------------

# # rsplit()
print(s.rsplit("Karan"))  # conv in to list and remove the val
# # ['hello',  'jot']
# # ----------------------

# # rstrip() remove the space from right side
print(" hi    ".rstrip())  
# # hi
# # ----------------------

# # split() seprate the val in list when find space

print(s.split(" "))  
# # ['hello', 'Karan', 'jot']
# # ----------------------

# # splitlines() do multi lines in one 
s3 = """Hello 
World
"""
print(s3.splitlines())  
# # ['hello', 'world']
# # ----------------------

# # startswith() check the starting value
print(s.startswith("hello"))  
# # True
# # ----------------------

# # strip() remove the space from starting and ending
print("   hi   ".strip())  
# # hi
# # ----------------------

# # swapcase() change upper val to lower,lower to upper
print(s.swapcase())  
# # HELLO kARAN JOT
# # ----------------------

# # title() change all first word to upper
print(s.title())  
# # Hello Karan Jot
# # ----------------------

# # upper()
print(s.upper())  
# # HELLO KARAN JOT
# # ----------------------

# # zfill() how many val left add the zero in staring 
print(s.zfill(30))  
# # 005
# # ----------------------