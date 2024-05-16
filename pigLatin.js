// Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
// Leave punctuation marks untouched.


const pigIt = (string)=>{
    let symbols = [',','.','?','!']
    let arr = string.split(' ')
    let newArr = arr.map((e)=>{
        let result = e.split('').slice(1)
        result.push(e[0])
        result = result.join('')
        return symbols.includes(result)?result : result + 'ay'
    })
   return newArr.join(' ')
}





console.log(pigIt('Pig latin is cool'))