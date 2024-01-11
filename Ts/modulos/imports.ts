import { Pc } from "./export"; //Estas sendo importada para esse arquivo
import * as lodash from "lodash" //Dessa maneria é possível trabalhar com bibliotecas de terceriros, após instalar pelo npm é só importar como o exemplo ao lado e ter a alternativa de alterar o nome, no caso deixei o padrão mesmo
interface PcGamer extends Pc {
    coolerRgb: string
}
