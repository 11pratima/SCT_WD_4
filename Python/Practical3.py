def factorial(n):
  """
  This function calculates the factorial of a given number recursively.

  Args:
    n: The number for which to calculate the factorial.

  Returns:
    The factorial of n.
  """
  if n == 0:
    return 1
  else:
    return n * factorial(n-1)

# Example usage
number = 5
result = factorial(number)
print(f"The factorial of {number} is: {result}") 
