function sendSpaceship(name: string, captain: string) { //Com o typeScript é necessário inserir o tipo da variável, pq diferente do Js n vai ser possível alterar o seu tipo depois
    const spaceship = {
        name,
        captain,
        speed: 20,
        inMission: true,
        crew: []
    }

    alert(`A nave com o nome ${spaceship.name} foi enviado em missão e seu capitão ${spaceship.captain} disse "Estou pronto!"`)

    return spaceship
}

function accelarate(targetSpeed: number, spaceship: { name: string, speed: number }) {
    if (spaceship.speed > targetSpeed) {
        alert(`A nave ${spaceship.name} acabou perdendo velocidade e esta com ${targetSpeed}`)
    } else if (spaceship.speed < targetSpeed) {
        alert(`A nave ${spaceship.name} acabou ganhando velocidade e esta com ${targetSpeed}`)
    } else {
        alert("A velocidade esta sendo mantida")
    }
}
const spaceshipName = prompt("Insira o nome da nave")
const spaceshipCaptain = prompt("Qual seria o nome do capitão?")

const ship = sendSpaceship(spaceshipName, spaceshipCaptain)

const speed = Number(prompt("Qual seria a velocidade ?"))

accelarate(speed, ship)