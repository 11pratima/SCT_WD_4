#string are immutable
a="!!! !!priya!! !!! !!priya!! !!!!!!!!!"
print(len(a))
print(a)
print(a.upper())
print(a.lower())
print(a.rstrip("!"))
print(a.replace("priya","neha"))
print(a.split(" "))
blogHeading="introduction to js"
print(blogHeading.capitalize())

str1="welcome to the console!!!"
print(len(str1))
print(len(str1.center(50)))
print(a.count("priya"))

str1="welcome to the console!!!"
print(str1.endswith("!!!"))

str1="welcome to the console!!!"
print(str1.endswith("to",4,10))

str1="He's name is dan. He is an honest man."
print(str1.find("is"))
print(str1.index("is"))

str1="welcome to the console"
print(str1.isalnum())
str1="welcome"
print(str1.isalpha())

str1="hello world"
print(str1.islower())

str1="we wish you a marry christmas\n"
print(str1)
print(str1.isprintable())
str1="           "#using spacebar
print(str1.isspace())
str2="            "#using tab
print(str2.isspace())
str1="world health organisation"
print(str1.istitle())