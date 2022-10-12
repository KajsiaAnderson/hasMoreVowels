function decoder (code) {
    let string = ''
    let numsArr = ['0','1', '2', '4','5','6','7','8','9']
    for(let i = 1; i < code.length; i++) {

        if (numsArr.includes(code[i])) {
            string += code[i-1]
            // console.log(string)
        }
    }
    string += code[code.length - 1]
    return string
}
console.log(decoder('0h2xce5ngbrdy'))
console.log(decoder('3vdfn'))
console.log(decoder('0r'))
console.log(decoder('2bna0p1mp2osl0e'))
console.log(decoder('0y4akjfe0s'))


// '0h2xce5ngbrdy' => 'hey'
// '3vdfn' => 'n'
// '0r' => 'r'
// '2bna0p1mp2osl0e' => 'apple'
// '0y4akjfe0s' => 'yes'


// Jared's way:

function decoder(code){
    // initialize an empty string. I'll add letters to it as I find them
    // I call this my answer string
let answer = ""
    // loop through every character in my code string
    for (let i = 0; i <code.length; i++){
    // if I come to a number, n
        if (!isNaN(+code[i])) {
            // then get the letter that is n spaces after the number 
            let n = +code[i]
            // and then push that letter to my answer string
            answer += code[i + 1 + n]
        }
    }
    // return my answer string
    return answer
}
console.log(decoder('0h2xce5ngbrdy'))
console.log(decoder('3vdfn'))
console.log(decoder('0r'))
console.log(decoder('2bna0p1mp2osl0e'))
console.log(decoder('0y4akjfe0s'))