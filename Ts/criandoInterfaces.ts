interface Computer { //Uma interface é como se fosse um novo tipo, mas usada em objetos
    placaDeVideo: string
    placaDeAudio: string
}

interface PcGamer extends Computer {//São parecidas com as class, é possível criar outra interface e herdas os atributos de outra
    ledRgb: string
    coolerRgb: string
    speed: (test: string) => void
}

class NewPc implements PcGamer {//Dessa forma é possível implementar os elementos que estão em uma interface nas classes 
    placaDeAudio: string; //Estou declarandos os elementos, o autocompletar facilita demais
    placaDeVideo: string;
    ledRgb: string;
    coolerRgb: string;

    constructor(ledRbg: string, coolerRgb: string, placaDeVideo: string, placaDeAudio: string) {
        this.ledRgb = ledRbg
        this.coolerRgb = coolerRgb
        this.placaDeAudio = placaDeAudio
        this.placaDeVideo = placaDeVideo
    }

    speed(test: string) {
        //Exemplo de Função
    }
}