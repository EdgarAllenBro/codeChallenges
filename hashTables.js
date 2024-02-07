//given an array and target number.


let arr = [1,2,3,4,5,5,6]
let sum = 5


const findSumPairs = (arr,sum) => {
let set = new Set(arr)

let result = []

for(let i = 0; i < arr.length; i++){
    let check = sum - arr[i]
    if(set.has(check)){
        result.push([arr[i],check])
    }
}
console.log(result)
}


findSumPairs(arr,sum)


