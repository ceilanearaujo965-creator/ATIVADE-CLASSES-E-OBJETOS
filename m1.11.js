// Questão 11

class Jogador {
    constructor(forca, nivel, pontosAtuais){
        this.forca = forca;
        this.nivel = nivel;
        this.pontosAtuais = pontosAtuais;
    }

    pontosAtaque(){
        return this.forca * this.nivel;
    }

    atacar(outro){
        outro.pontosAtuais = outro.pontosAtuais - this.pontosAtaque();
    }
}

const j1 = new Jogador(10, 3, 100);
const j2 = new Jogador(8, 2, 100);

j1.atacar(j2);
console.log("Pontos do j2: " + j2.pontosAtuais);
j2.atacar(j1);
console.log("Pontos do j1: " + j1.pontosAtuais);
