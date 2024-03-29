// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.

const multiples = (number)=>{
    let current = number - 1
    let result = 0
    if(number < 0){
      return 0
    }
    while(current > 0){
    if(current % 5 === 0){
      result+=current
    } else if(current % 3 === 0){
      result+=current
    }
    current -=1
    }
    return result
}