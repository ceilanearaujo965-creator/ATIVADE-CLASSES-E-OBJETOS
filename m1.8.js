// Questão 8

class Circulo {
    raio = 0;

    area(){
        return Math.PI * this.raio * this.raio;
    }

    perimetro(){
        return 2 * Math.PI * this.raio;
    }
}

class TestaCirculo {
    testar(){
        const c = new Circulo();
        c.raio = 5;
        console.log("Raio:\t" + c.raio);
        console.log("Área:\t" + c.area());
        console.log("Perímetro:\t" + c.perimetro());
    }
}

const teste = new TestaCirculo();
teste.testar();
