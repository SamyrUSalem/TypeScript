let literal: "Estou realizando um teste!" //Esse é um tipo literal, no caso ele é literalmente esse valor então n posso alterar(sempre vai ser essa frase q coloquei)

let option: 1 | 2 //Esse tipo diz q essa variavel pode ter apenas o valor 1 ou o valor 2, m,as poderia ser tipos, ex: string | number

type pc = "processador" | "placa mãe" | "cooler" | "placa de vídeo" //Dessa maneira, foi criado um novo tipo q contem esses conteúdos(com isso posso reaproveitar ele durante o sistema)

let computer: pc //Estou dizendo q essa variável é do tipo pc

function teste(x: pc) {//posso dizer q essa variavel é do tipo pc
    //teste
}

type name = (name: string) => void //Usando a arrow function consigo criar um novo tipo q seria uma function

function n(x: name) { //Dessa forma, estou falando q esse parâmetro é do tipo name, então ele possui como o valor a função q foi criada acima
    const firstname = "Mamute"
    x(firstname)
}