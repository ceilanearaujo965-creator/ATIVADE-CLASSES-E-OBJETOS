////Questao 8

class Circulo {
    raio: number;

    constructor(raio: number) {
        this.raio = raio;
    }

    area(): number {
        return Math.PI * this.raio ** 2;
    }

    perimetro(): number {
        return 2 * Math.PI * this.raio;
    }
}

class TestaCirculo {
    static executar() {
        const circulo = new Circulo(5);

        console.log("Área:", circulo.area());
        console.log("Perímetro:", circulo.perimetro());
    }
}

TestaCirculo.executar();

//ele só adiciona os tipos mesmo. No JavaScript, você não declara o tipo, só usa raio mesmo e pronto. No TypeScript, você pode dizer que é number, por exemplo, pra ter checagem antes de rodar o código.
