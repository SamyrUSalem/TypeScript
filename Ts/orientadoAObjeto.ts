class Spaceship {//Os atributos são declarados antes do constructor
    private _name: string //Com o private, esse atributo só pode ser acessado dentro da própria classe
    protected captain: string //Com o protected, esse atributo só pode ser acessado dentro da própria classe e das suas subclasses
    protected speed: number

    get name() {//Dessa forma, será possível mexer com esse atributo privado
        //Nesse local é possível aplicar alguma lógica para o sistema e escondê-la
        return this._name
    }

    set name(name) {
        this._name = name
    }

    constructor(name: string, captain: string) {
        this.name = name
        this.captain = captain
        this.speed = 0
    }

    public accelerate(rate: number, time: number) { //Com o public, esse método pode ser acessado de qualquer lugar
        this.speed = rate * time
    }
}

class Fighter extends Spaceship {
    weapons: any//A herança é da mesma forma
    constructor(name: string, captain: string, weapons: number) {
        super(name, captain)
        this.weapons = weapons
    }

    shoot() {
        for (let i = 0; i < this.weapons; i++) {
            console.log('Pew!')
        }
    }

    erase() {
        this.name = ''
        this.captain = ''
    }
}

const shipp = new Spaceship('USS Enterprise', 'James T. Kirk')



