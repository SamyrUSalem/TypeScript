class Spaceship {
    _name; //Com o private, esse atributo só pode ser acessado dentro da própria classe
    captain; //Com o protected, esse atributo só pode ser acessado dentro da própria classe e das suas subclasses
    speed;
    get name() {
        //Nesse local é possível aplicar alguma lógica para o sistema e escondê-la
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    constructor(name, captain) {
        this.name = name;
        this.captain = captain;
        this.speed = 0;
    }
    accelerate(rate, time) {
        this.speed = rate * time;
    }
}
class Fighter extends Spaceship {
    weapons; //A herança é da mesma forma
    constructor(name, captain, weapons) {
        super(name, captain);
        this.weapons = weapons;
    }
    shoot() {
        for (let i = 0; i < this.weapons; i++) {
            console.log('Pew!');
        }
    }
    erase() {
        this.name = '';
        this.captain = '';
    }
}
const shipp = new Spaceship('USS Enterprise', 'James T. Kirk');
