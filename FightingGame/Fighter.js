class Fighter {
    name;
    damage;
    hp; //hit point
    constructor(_name) {
        this.name = _name;
        this.damage = 10;
        this.hp = 100;
    }

    attack(_fighter){
        let min = this.damage - 5;
        let max = this.damage + 5;
        //Math.random() 0->1;
        let randDmg = Math.floor(Math.random()*(max-min)) + min;
        let txt = this.name + " attack "+ _fighter.name;
        if(this.isCritical()){
            randDmg = randDmg*2;
            txt += " with "+ randDmg + " damage! Critical";
        }else {
            txt += " with "+ randDmg + " damage";
        }
        _fighter.takeHit(randDmg);
        alert(txt);
    }

    isCritical(){
        return Math.random() > 0.5;
    }

    takeHit(_damage){
        this.hp -= _damage;
        if(this.hp <= 0){
            this.hp = 0;
            alert(this.name + " lose!");
        }
    }
}
