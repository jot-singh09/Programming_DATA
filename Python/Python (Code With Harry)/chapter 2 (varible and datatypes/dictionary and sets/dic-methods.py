
marks={
    "Karan" : 100,
    "Raman" :34,
    "Rohit" : [1,3.4,5]
}
print(marks.items()) # this will print dic of list in the form of tuple
print(marks.keys()) # this will print the key from dic
print(marks.values()) # this will print the values from dic
marks.update({
    "Karan" : 99,
    "taman" : 23
})
print(marks)
