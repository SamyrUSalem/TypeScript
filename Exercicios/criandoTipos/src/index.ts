type PlanetSituation = "Habitado" | "Habitável" | "Inabitável" | "Inexplorado"

type PlanetCoordinates = [number, number, number, number]

type Planet = {
    name: string,
    coordinates: PlanetCoordinates,
    situation: PlanetSituation,
    satellites: string[]
}

const planets: Planet[] = []

function addPlanet(name: string, coordinates: PlanetCoordinates, situation: PlanetSituation) {
    planets.push({
        name,
        coordinates,
        situation,
        satellites: []
    })

    alert(`O planeta ${name} foi adicionado!`)
}

function findPlanet(name: string) {
    const planet = planets.find(p => p.name === name)

    return planet ?? false
}

function situation(situation: PlanetSituation, planet: Planet) {
    planet.situation = situation

    alert(`A situação do ${planet.name} foi atualizada!`)

}


function addSatellite(name: string, planet: Planet) {
    planet.satellites.push(name)

    alert("Satelite adicionado!")
}

function removeSatellite(name: string, planet: Planet) {
    planet.satellites = planet.satellites.filter(st => st !== name) //Estrou coletando todos os satelites que possuem o nome diferente daquele q esta no parametro, dessa maneria consigo realizar a sua exclusão

    alert(`O satelite ${name} foi removido!`)
}

function validateSituation() {
    let situation: PlanetSituation
    let validateSituation = false

    while (!validateSituation) {
        const situationInput = prompt('Informe a situação do planeta?\n1 - Habitado\n2 - Habitável\n3 - Inabitável\n4 - Inexplorado')

        switch (situationInput) {

            case "1":
                situation = "Habitado"
                validateSituation = true
                break;

            case "2":
                situation = "Habitável"
                validateSituation = true
                break;
            case "3":
                situation = "Inabitável"
                validateSituation = true
                break;
            case "4":
                situation = "Inabitável"
                validateSituation = true
                break;
            default:
                alert("Error")
                break;
        }

    }
    return situation
}

function validPlanet(callback: (planet: Planet) => void) {//Basicamente essa função de callback quer dizer, oq será feito com o planeta quando for inserido um valido
    const planetName = prompt("Qual seria o nome do planeta ?")
    const planet = findPlanet(planetName)

    if (planet) {
        callback(planet) //Essa função ira cuidar dele
    } else {
        alert("Não foi possível encontrar o planeta")
    }
}

function firstMenuOpt() {
    const name = prompt('Informe o nome do planeta:')
    const coordinateA = Number(prompt('Informe a primeira coordenada:'))
    const coordinateB = Number(prompt('Informe a segunda coordenada:'))
    const coordinateC = Number(prompt('Informe a terceira coordenada:'))
    const coordinateD = Number(prompt('Informe a quarta coordenada:'))

    const situation = validateSituation()

    const confirmation = confirm(`Confirma o registro do planeta ${name}?
        Coordenadas: (${coordinateA}, ${coordinateB}, ${coordinateC}, ${coordinateD})
        Situação: ${situation}`)

    if (confirmation) {
        addPlanet(name, [coordinateA, coordinateB, coordinateC, coordinateD], situation)
    }

}

function secondMenuOpt() {
    validPlanet(planet => {
        const Actuallsituation = validateSituation()
        situation(Actuallsituation, planet)
    })
}

function thirdMenuOpt() {
    validPlanet(planet => {
        const satelite = prompt("Qual seria o nome do satelite ?")
        addSatellite(satelite, planet)
    })
}

function fourthMenuOpt() {
    validPlanet(planet => {
        const satelite = prompt("Qual seria o nome do satelite para ser removido ?")
        removeSatellite(satelite, planet)
    })
}

function fifthMenuOpt() {
    let list = 'Planetas:\n'

    planets.forEach(planet => {
        const [a, b, c, d] = planet.coordinates //Estou utilzando uma tupla para poder monstrar os elementos q estão inseridos nas variaveis

        list += `
        Nome: ${planet.name}
        Coordenadas: (${a}, ${b}, ${c}, ${d})
        Situação: ${planet.situation}
        Satélites: ${planet.satellites.length}
      `

        planet.satellites.forEach(satellite => {
            list += `    - ${satellite}\n`
        })
    })

    alert(list)
}

let opt = 0

while (opt !== 6) {
    const menu = `Menu
    1 - Registrar um novo planeta
    2 - Atualizar situação do planeta
    3 - Adicionar um satélite ao planeta
    4 - Remover um satélite do planeta
    5 - Lista todos os planetas
    6 - Sair
  `

    opt = Number.parseInt(prompt(menu))

    switch (opt) {
        case 1:
            firstMenuOpt()
            break
        case 2:
            secondMenuOpt()
            break
        case 3:
            thirdMenuOpt()
            break
        case 4:
            fourthMenuOpt()
            break
        case 5:
            fifthMenuOpt()
            break
        case 6:
            alert('Encerrando o sistema...')
            break
        default:
            alert('Opção inválida! Retornando ao painel principal...')
            break;
    }
}