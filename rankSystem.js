const ranks = [-8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8]
class User {
    constructor(){
        this.rank = ranks[0]
        this.progress = 0    
    }
    checkProgress(){
        if(this.rank === 8){
            this.progress = 0
        } else if(this.progress > 100){
            this.progress -= 100
            this.rank = ranks[ranks.indexOf(this.rank) + 1]
            this.checkProgress()
        }
    }

    incProgress(rank){
        if(this.rank === 8){
            this.progress = 0
            return
        }
        if(ranks.includes(rank)){
            if(this.rank === 8){
                this.progress = 0
                return
            }
            if(this.rank > rank && Math.abs(Math.abs(this.rank) - Math.abs(rank)) > 2){

            } else if(ranks.indexOf(this.rank) > ranks.indexOf(rank)){
                this.progress += 1
            } else if (ranks.indexOf(this.rank) === ranks.indexOf(rank)){
                this.progress += 3
            }else {
                let rankDiff = Math.abs(ranks.indexOf(this.rank) - ranks.indexOf(rank))
                this.progress += 10 * rankDiff * rankDiff
                this.checkProgress()
            }
            
        } else {error('not a valid rank')}

        
    }
}
