function last<argumentType>(array: argumentType[]): argumentType | undefined { //Dessa maneira que utilizamos o tipo genérico, é possível colocar qualquer nome no "argumentType", e estou dizendo q a saida dessa function pode ser esse generico ou undefined
    return array[array.length - 1]
}

const food = ["cahe", "pizza", "chesscake", "pasta"]

last(food) //Com o tipo genérico, a function conseguiu identificar qual será o tipo q irá entrar

interface Ship {
    name: string
    pilot: string
}

interface Fighter extends Ship {
    weaponss: number
    shields: number
}

interface Transport extends Ship {
    capacity: number
}

interface Speeder extends Ship {
    speed: number
    acceleration: number
}

//Com isso, estou dizendo q o shipType pode ser qualquer tipo mas é necessário ter a propriedade name e pilot ou poderia apenas passar o ship e o mesmo teria q possuir as propriedades de ship para funcionar
function cloneShip<shipType extends { name: string, pilot: string }>(ship: shipType, newName: string, newPilot: string) {
    const newShip = ship
    newShip.name = newName
    newShip.pilot = newPilot
    return newShip
}

const falcon: Ship = {
    name: 'Millenium Falcon',
    pilot: 'Han'
}

const test: Fighter = {
    name: 'Red Five',
    pilot: 'Luke',
    weapons: 4,
    shields: 1
}

// A cópia funciona, porém a tipagem está incorreta
// pois a ambas é atribuido o tipo Ship
const copy1 = cloneShip(falcon, 'Milano', 'Peter')
const copy2 = cloneShip(xWing, 'Black One', 'Poe') //Caso fossemos utilizar o TypeScipt sem o tipo generico, o mesmo estaria coletando o tipo errado dessa função invés de aparecer o tipo fighter apareceu ship


interface EnemyShip {
    name: string
    pilot: string
    flag?: string
}

const enemyCopy = cloneShip(falcon, 'Enemy', 'Enemy')

const enemyCopy2 = cloneShip<EnemyShip>(falcon, 'Enemy', 'Enemy') //Utilizando o tipo generico nesse caso, estou dizendo que o retorno dessa função será do tipo EnemyShip, então a falcon irá entrar com um tipo e sair com outro 

enemyCopy2.flag = 'Imperial' //Esse caso n esta dando error, pq essa propriedade existe no tipo EnemyShip