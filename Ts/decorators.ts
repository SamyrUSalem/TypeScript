function Decorator() { //O Descorator é uma função, o objetivo dele seria aplciar mais funcionalidades dentro de um sistema
    return function (target, key, descriptor) {//É necessário possuir esses 3 parâmetros
        descriptor.value = function (value: number) { // O desciptor seria o método calculate e com a propriedade value, estou coletando o valor dessa function
            console.log(`Calculando valor ao quadrado`) //Dessa maneira, posso modificar a função q estou decorando, com isso esse sisyema será executado invés daquele q esta no método  
            return value ** 2
        }
    }
}

function Log() {
    return function (target, key, desciptor) {
        const method = desciptor.value

        desciptor.value = function (...args: any[]) { //O arg são os argumentos da function q será decorada, e quero q o Log funcione em qualquer caso então estou armazenando qualquer tipo de argument nesse array de forma desestruturada 
            console.log('-------------------------------')
            console.log(`Chamando o método ${key} com os parâmatros: ${JSON.stringify(args)}`) //O key seria o nome do método q estamos decorando, q no caso é calculate

            const result = method.apply(this, args) //O method é aonde esta armazenado o método original q foi decorada, o apply esta executando com os argumentos passados e irá armazenar na variavel result

            console.log(`O método ${key} retornou o valor: ${JSON.stringify(result)}`) //Como o resultado pode ser qualquer coisa, estou utilizadno o stringfy para realmente ter certeza q será possível ler a saída
            console.log('-------------------------------')

            return result
        }
    }
}


class World {
    name: String
    constructor(name: string) {
        this.name = name
    }

    @Log()//Acabei de decorar o método abaixo
    calculate(n: number) {
        console.log("calculo")
        return n * 20
    }
}

const world = new World("Planet")

const valuee = world.calculate(10) //no caso o 10 é o argumento

console.log(`Valor: ${valuee}`)