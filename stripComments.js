

const stripComments = (string, comments) => {
    let arr = string.split('\n')
    console.log('string split', arr)
    arr = arr.map((string)=>{

        comments.forEach((el)=>{
            if(string.includes(el)){
                string = string.slice(0,string.indexOf(el))
            }
        })
        return string.trimEnd()
    })
   return arr.join('\n')
}




console.log(stripComments('apples # and Bananas\noranges, !are great\n grapes', ["#","!"]))