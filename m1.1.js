class Comanda{
    constructor(idMesa, nPessoas){
        this.idMesa = idMesa;
        this.nPessoas = nPessoas;
        this.itensConsumidos = [];
    }
    adicionarItem(descricao, valor){
        const item = {
            descricao: descricao,
            valor: valor
        }
        this.itensConsumidos.push(item)
    }
    fecharConta(){
        let total = 0;
        for( let item of this.itensConsumidos){
            total+= item.valor;
        }
        let valorIndividual = total/this.nPessoas
        console.log("Total da conta: R$ "+ total +"\nValor individual:R$" + valorIndividual);
    }
}

const comanda1 = new Comanda(1, 3);
comanda1.adicionarItem("Coca cola KS", 10);
comanda1.adicionarItem("File com fritas", 45);
comanda1.adicionarItem("Cerveja Heineken", 15);
comanda1.adicionarItem("Caipirinha", 12);
comanda1.adicionarItem("Caipifruta", 18);
comanda1.adicionarItem("Pizza GG", 18);
comanda1.fecharConta();