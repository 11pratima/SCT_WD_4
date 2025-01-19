 def sieve_of_eratosthenes(n):
  """
  Generates a list of prime numbers up to a given number 'n' 
  using the Sieve of Eratosthenes algorithm.

  Args:
    n: The upper limit for generating prime numbers.

  Returns:
    A list of prime numbers up to 'n'.
  """

  if n < 2:
    return []

  primes = [True] * (n + 1)
  primes[0] = primes[1] = False

  for p in range(2, int(n**0.5) + 1):
    if primes[p]:
      for i in range(p * p, n + 1, p):
        primes[i] = False

  return [num for num in range(2, n + 1) if primes[num]]

# Example usage:
 limit = 100
 prime_numbers = sieve_of_eratosthenes(limit)
print(f"Prime numbers up to {limit}: {prime_numbers}") 
