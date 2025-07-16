class Solution:

    def hasVowel(self, word):
        vowels = {
            'a': True, 'e': True, 'i': True, 'o': True, 'u': True,
            'A': True, 'E': True, 'I': True, 'O': True, 'U': True
        }
        for letter in word:
            if letter in vowels:
                return True

        return False

    def hasConsonant(self, word):
        consonants = {
            'b': True, 'c': True, 'd': True, 'f': True, 'g': True, 'h': True,
            'j': True, 'k': True, 'l': True, 'm': True, 'n': True, 'p': True,
            'q': True, 'r': True, 's': True, 't': True, 'v': True, 'w': True,
            'x': True, 'y': True, 'z': True,
            'B': True, 'C': True, 'D': True, 'F': True, 'G': True, 'H': True,
            'J': True, 'K': True, 'L': True, 'M': True, 'N': True, 'P': True,
            'Q': True, 'R': True, 'S': True, 'T': True, 'V': True, 'W': True,
            'X': True, 'Y': True, 'Z': True
        }

        for letter in word:
            if letter in consonants:
                return True

        return False

    def isValid(self, word: str) -> bool:
        if len(word) < 3:
            return False

        if not word.isalnum():
            return False

        if not self.hasVowel(word):
            return False

        if not self.hasConsonant(word):
            return False

        return True

# runtime 17th percentile
# memory 53rd percentile
