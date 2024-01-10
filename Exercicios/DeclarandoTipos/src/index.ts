const spaceships = []

function addSpaceship(name: string, pilot: string, crewLimit: number) {
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false
    }

    spaceships.push(spaceship)

    alert(`A nave ${spaceship.name} foi adicionada ao sistema!`)
}

function findSpaceship(name: string) {
    let spaceship: {
        name: string,
        pilot: string,
        crewLimit: number,
        crew: string[],
        inMission: boolean
    }

    spaceship = spaceships.find(ship => ship.name === name)

    return spaceship
}

function addCrewMember(member: string, spaceship: { name: string, crewLimit: number, crew: string[] }) {
    if (spaceship.crew.length >= spaceship.crewLimit) {
        alert(`Infelizmente o ${member} não poderá entrar na equipe.`)
    } else {
        spaceship.crew.push(member);

        alert(`O ${member} foi adicionado a equipe!`)
    }
}

function InMission(spaceship: { name: string, crewLimit: number, crew: string[], inMission: boolean }) {
    if (spaceship.inMission) {
        alert("A spaceship ja esta em missão!")
    } else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
        alert("Náo pode ser enviada, tripulação insuficiente.")
    } else {
        spaceship.inMission = true
        alert("Enviada para missão")
    }
}

function firtsMenu() {
    const name = prompt("Qual seria o nome da nave?")
    const pilot = prompt("Qual seria o nome do pilot?")
    const crewLimit = Number(prompt("Qual seria o limite de tripulantes?"))

    const confirmation = confirm(`Posso registrar a nave a seguir:\n Nome: ${name}\nPiloto: ${pilot}\n Limite de tripulante: ${crewLimit}`)

    if (confirmation) {
        addSpaceship(name, pilot, crewLimit)
    }
}

function secondMenuOption() {
    const member = prompt('Qual é o nome do tripulante?')
    const spaceshipName = prompt(`Para qual nave ${member} deverá ser designado?`)

    const spaceship = findSpaceship(spaceshipName)

    if (spaceship) {
        const confirmation = confirm(`Confirma a inclusão de ${member} na tripulação da ${spaceship.name}?`)

        if (confirmation) {
            addCrewMember(member, spaceship)
        }
    }
}

function thirdMenuOption() {
    const spaceshipName = prompt('Qual é o nome da nave a ser enviada?')

    const spaceship = findSpaceship(spaceshipName);

    if (spaceship) {
        const confirmation = confirm(`Confirma e envio da ${spaceship.name} na missão?`)

        if (confirmation) {
            InMission(spaceship)
        }
    }
}

let list = 'Naves Registradas:\n'

function fourthMenuOption() {
    let list = 'Naves Registradas:\n'

    spaceships.forEach((spaceship: {
        name: string,
        pilot: string,
        crewLimit: number,
        crew: string[],
        inMission: boolean
    }) => {
        list += `
        Nave: ${spaceship.name}
        Piloto: ${spaceship.pilot}
        Em missão? ${spaceship.inMission ? 'Sim' : 'Não'}
        Tamanho Máximo da Triuplação: ${spaceship.crewLimit}
        Tripulantes: ${spaceship.crew.length}
      `

        spaceship.crew.forEach(member => {
            list += `    - ${member}\n`
        })

    })

    alert(list)
}


let userOption = 0;

while (userOption !== 5) {
    const menu = `Painel Principal
    1 - Registrar uma nova nave
    2 - Adicionar membro da tripulação
    3 - Enviar nave em missão
    4 - Listar naves registradas
    5 - Encerrar
  `

    userOption = Number.parseInt(prompt(menu))

    switch (userOption) {
        case 1:
            firtsMenu()
            break
        case 2:
            secondMenuOption()
            break
        case 3:
            thirdMenuOption()
            break
        case 4:
            fourthMenuOption()
            break
        case 5:
            alert('Encerrando o sistema...')
            break
        default:
            alert('Opção inválida! Retornando ao painel principal...')
            break;
    }
}