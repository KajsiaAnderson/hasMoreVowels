function hasMoreVowels(word) {
    word = word.toLowerCase()
    // this checks for capitalized vowels as well
    let otherCount = 0;
    let vowelCount = 0;

    for (let i = 0; i < word.length; i++) {
        if (
            word[i] === 'a' || 
            word[i] === 'e' || 
            word[i] === 'i' || 
            word[i] === 'o' || 
            word[i] === 'u'
        ) {
            vowelCount++
        } else {
            otherCount++
        }
    }
    if (vowelCount > otherCount) {
        return true
    }

    return false
}

console.log(hasMoreVowels('moose')) //true
console.log(hasMoreVowels('mice')) //false
console.log(hasMoreVowels('graph')) //false
console.log(hasMoreVowels('yay')) //false
console.log(hasMoreVowels('Aal')) //true
