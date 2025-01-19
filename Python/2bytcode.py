def showMeByte(name):
    return "hello"+name+"!!!"
print(showMeByte.__code__.co_code)

print(showMeByte.__code__.co_consts)

print(showMeByte.__code__.co_stacksize)

print(showMeByte.__code__.co_varnames)

print(showMeByte.__code__.co_flags)

print(showMeByte.__code__.co_name)

print(showMeByte.__code__.co_names)