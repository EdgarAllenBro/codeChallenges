const cakes = (recipe, available) => {
    
    let result

    for (const ingredient in recipe){

        let num = Math.floor(available[ingredient]/recipe[ingredient])

        if(num <= 0 || !available[ingredient]){
            return 0
        } else if(result === undefined){
            result = num
        }else if (result > num){
            result = num
        }
    }

    return result
  }

  console.log(cakes({flour: 200, sugar: 500, eggs: 1, vanilla:3}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}))
