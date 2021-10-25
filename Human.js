/*
- property(attribute)
    - name
    - weight
    - gender
* */
class Human {
    name;
    weight;
    gender;

    constructor(_name, _weight, _gender) { //hàm khởi tạo
        this.name = _name;
        this.weight = _weight;
        this.gender = _gender;
    }

    eat(_apple) {
        if(_apple.checkEmpty()){
            this.weight += 2;
            _apple.weight -= 2;
            console.log(this.weight);
            console.log(_apple.weight);
        }else {
            _apple.weight = 0;
            console.log("Ăn hết rồi");
        }

    }
}
