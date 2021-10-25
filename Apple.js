class Apple {
    weight;
    constructor(_weight = 10) {
        this.weight = _weight;
    }

    checkEmpty(){
        // if(this.weight <= 0){
        //     return true;
        // }else {
        //     return false;
        // }
        return this.weight <= 0;
    }
}
