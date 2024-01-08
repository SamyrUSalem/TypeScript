let tupla: [string, number, string, number] //A tupla seria um tipo especifico de Array, será definido o tamanho do array e o seu tipo como o exemplo ao lado, q é possivel inserir apenas 4 elementos e com esses tipo na mesma ordem

tupla = ["teste", 5, "teste", 10] //Se esse padrão for alterado ocasionara um error


enum Roles { //Enum seria uma forma de enumerar os elementos, eles naturalmente estão sendo referenciados como números
    ADMIN = "Admin", //Mas dessa maneira posso fazer com q sejam referenciados atráves de string
    USER = "User"
}

Roles.ADMIN // Dessa forma posso trabalhar com eles

//O enum é uma boa forma para organizar os elementos, pois no backend eles serão identificados atraves de numeros que é uma forma mais facil de trabalhar, mas por aqui é possível realizar o encademanto como anteriormente