var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Decorator() {
    return function (target, key, descriptor) {
        descriptor.value = function (value) {
            console.log(`Calculando valor ao quadrado`); //Dessa maneira, posso modificar a função q estou decorando, com isso esse sisyema será executado invés daquele q esta no método  
            return value ** 2;
        };
    };
}
function Log() {
    return function (target, key, desciptor) {
        const method = desciptor.value;
        desciptor.value = function (...args) {
            console.log('-------------------------------');
            console.log(`Chamando o método ${key} com os parâmatros: ${JSON.stringify(args)}`); //O key seria o nome do método q estamos decorando, q no caso é calculate
            const result = method.apply(this, args); //O method é aonde esta armazenado o método original q foi decorada, o apply esta executando com os argumentos passados e irá armazenar na variavel result
            console.log(`O método ${key} retornou o valor: ${JSON.stringify(result)}`); //Como o resultado pode ser qualquer coisa, estou utilizadno o stringfy para realmente ter certeza q será possível ler a saída
            console.log('-------------------------------');
            return result;
        };
    };
}
class World {
    name;
    constructor(name) {
        this.name = name;
    }
    calculate(n) {
        console.log("calculo");
        return n * 20;
    }
}
__decorate([
    Log() //Acabei de decorar o método abaixo
], World.prototype, "calculate", null);
const world = new World("Planet");
const valuee = world.calculate(10); //no caso o 10 é o argumento
console.log(`Valor: ${valuee}`);
