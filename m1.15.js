// Questão 15

class Hospede {
    #nome;
    #tipoDeApartamento;
    #periodoDaHospedagem;
    #valorDaHospedagem;

    constructor(nome, tipoDeApartamento, periodoDaHospedagem){
        this.#nome = nome;
        this.#tipoDeApartamento = tipoDeApartamento;
        this.#periodoDaHospedagem = periodoDaHospedagem;
        this.#valorDaHospedagem = 0;
    }

    calculaHospedagem(){
        if (this.#tipoDeApartamento == "Simples"){
            this.#valorDaHospedagem = 50 * this.#periodoDaHospedagem;
        } else if (this.#tipoDeApartamento == "Luxo"){
            this.#valorDaHospedagem = 80 * this.#periodoDaHospedagem;
        }
    }

    mostraDadosDaHospedagem(){
        console.log(
            "Nome:\t" + this.#nome +
            "\nApartamento:\t" + this.#tipoDeApartamento +
            "\nDiárias:\t" + this.#periodoDaHospedagem +
            "\nValor:\tR$ " + this.#valorDaHospedagem
        );
    }
}

const hospede = new Hospede("Carlos", "Luxo", 3);
hospede.calculaHospedagem();
hospede.mostraDadosDaHospedagem();
