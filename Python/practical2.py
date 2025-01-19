def is_palindrome(s):
    """
    Checks if a given string is a palindrome, ignoring spaces, punctuation, and capitalization.

    Args:
        s: The input string.

    Returns:
        True if the string is a palindrome, False otherwise.
    """

    # 1. Clean the string by removing spaces, punctuation, and converting to lowercase
    clean_s = ''.join(c.lower() for c in s if c.isalnum())

    # 2. Compare the cleaned string with its reversed version
    return clean_s == clean_s[::-1]
string1 = "A man a plan a canal Panama"
string2 = "racecar"
string3 = "hello"

print(f"{string1} is palindrome: {is_palindrome(string1)}")  # Output: True
print(f"{string2} is palindrome: {is_palindrome(string2)}")  # Output: True
print(f"{string3} is palindrome: {is_palindrome(string3)}")  # Output: False