const squareDigits = (num)=> +(num.toString().split('').map((num)=>num*num).join(''))


console.log(squareDigits(9119))