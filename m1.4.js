// Questão 4

const produto = {
    codigo: 101,
    descricao: "Lâmpada LED",
    valor: 12.5,
    quantidade: 50,
    baixar(qtd){
        this.quantidade = this.quantidade - qtd;
    },
    repor(qtd){
        this["quantidade"] = this["quantidade"] + qtd;
    },
    mostrarDados(){
        console.log(
            "Código:\t" + this.codigo +
            "\nDescrição:\t" + this.descricao +
            "\nValor:\t" + this.valor +
            "\nQuantidade:\t" + this.quantidade
        );
    }
}

produto.mostrarDados();
produto.baixar(10);
produto["repor"](5);
console.log(produto["quantidade"]);
