// Questão 14

class Cliente {
    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculaIMC(){
        return this.peso / (this.altura * this.altura);
    }

    calculaSituacao(){
        const imc = this.calculaIMC();
        if (imc < 18.5){
            return "Magreza";
        } else if (imc < 25){
            return "Normal";
        } else if (imc < 30){
            return "Sobrepeso";
        } else if (imc < 40){
            return "Obesidade";
        } else {
            return "Obesidade grave";
        }
    }

    mostrarDadosDoCliente(){
        console.log(
            "Nome:\t" + this.nome +
            "\nPeso:\t" + this.peso +
            "\nAltura:\t" + this.altura +
            "\nIMC:\t" + this.calculaIMC().toFixed(2) +
            "\nSituação:\t" + this.calculaSituacao()
        );
    }
}

const cliente = new Cliente("Maria", 60, 1.65);
cliente.mostrarDadosDoCliente();
