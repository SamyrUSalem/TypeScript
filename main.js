function animation(name, character) {
    //teste
}
animation("Looney Tunes");
let value; //O any meio q desabilita o ts, pois ele n tem nenhum tipo então é possível fazer algumas ações q normalmente dariam erros
let string;
string = value;
let test; //Seria mais uma forma de dizer que esse valor nunca devia existir, e q esta acontecendo algum tipo de error
let tupla; //A tupla seria um tipo especifico de Array, será definido o tamanho do array e o seu tipo como o exemplo ao lado, q é possivel inserir apenas 4 elementos e com esses tipo na mesma ordem
tupla = ["teste", 5, "teste", 10]; //Se esse padrão for alterado ocasionara um error
var Roles;
(function (Roles) {
    Roles["ADMIN"] = "Admin";
    Roles["USER"] = "User";
})(Roles || (Roles = {}));
Roles.ADMIN; // Dessa forma posso trabalhar com eles
//O enum é uma boa forma para organizar os elementos, pois no backend eles serão identificados atraves de numeros que é uma forma mais facil de trabalhar, mas por aqui é possível realizar o encademanto como anteriormente
function sendSpaceship(name, captain) {
    const spaceship = {
        name,
        captain,
        speed: 20,
        inMission: true,
        crew: []
    };
    alert(`A nave com o nome ${spaceship.name} foi enviado em missão e seu capitão ${spaceship.captain} disse "Estou pronto!"`);
    return spaceship;
}
function accelarate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert(`A nave ${spaceship.name} acabou perdendo velocidade e esta com ${targetSpeed}`);
    }
    else if (spaceship.speed < targetSpeed) {
        alert(`A nave ${spaceship.name} acabou ganhando velocidade e esta com ${targetSpeed}`);
    }
    else {
        alert("A velocidade esta sendo mantida");
    }
}
const spaceshipName = prompt("Insira o nome da nave");
const spaceshipCaptain = prompt("Qual seria o nome do capitão?");
const ship = sendSpaceship(spaceshipName, spaceshipCaptain);
const speed = Number(prompt("Qual seria a velocidade ?"));
accelarate(speed, ship);
