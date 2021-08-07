str = 'Malayalam'

def isPalindrome(word):
    rev = word[::-1]
    return word.upper() == rev.upper()

print(isPalindrome(str))
