// Questão 10

class Senha {
    constructor(valor){
        this.valor = valor;
    }

    iguais(outraSenha){
        return this.valor === outraSenha;
    }

    tamanhoSeguro(){
        return this.valor.length >= 6;
    }

    ehValida(){
        return this.tamanhoSeguro() && !this.valor.includes(" ");
    }
}

const senha = new Senha("abc123");
console.log(senha.iguais("abc123"));
console.log(senha.iguais("abc"));
console.log(senha.tamanhoSeguro());
console.log(senha.ehValida());
