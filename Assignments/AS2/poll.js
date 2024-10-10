class Poll {

    constructor(catsArray){

        if (!Array.isArray(catsArray)) {
            throw new TypeError('catsArray must be an array');
        }

        this.catsArray = catsArray;
    }

    vote(catName) {
        const cat = this.catsArray.find(cat => cat.name === catName);
        if (cat) {
            cat.votes += 1;
        }
    }

    getVotes(){
        return this.catsArray;
    }
}

module.exports = Poll;