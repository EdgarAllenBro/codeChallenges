
const isPrime = (num) => {
    if(num < 2){
        return false
    }else{
      switch (num){
        case 1:
          return true
          break;
        case 2:
          return true
          break;
        case 3:
          return true
          break;
        case 5:
          return true
          break;
        case 7:
          return true
          break;
      }
        for(let i = 2;i<10;i++){
            if(num % i === 0){
                return false
            }
        }
        return true

    }
};