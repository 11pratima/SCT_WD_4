# ['hello','morning']
# [bool('')]
# for i in range (float('inf')):
    # print(i)
# for i in '':
    # print(i)
# a={}
# a[2]=1
# a[1]=[2,3,4]
# print(a[1][1])
def is_number(s):

    try:
        float(s)  # Attempt to convert the string to a float
        return True
    except ValueError:
        return False
string1 ="1234"
string2 ="abcd12"
string3 ="3.45"         
print(f"Is '{string1}' a number? {is_number(string1)}")  # Output: True
print(f"Is '{string2}' a number? {is_number(string2)}")  # Output: False
print(f"Is '{string3}' a number? {is_number(string3)}")  # Output: True
