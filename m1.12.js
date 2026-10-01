// Questão 12

class Pessoa {
    constructor(id, nome){
        this.id = id;
        this.nome = nome;
    }
}

class CadastroPessoas {
    constructor(){
        this.pessoas = [];
        this.indice = 0;
    }

    inserir(pessoa){
        this.pessoas[this.indice] = pessoa;
        this.indice++;
    }

    pesquisar(id){
        for (let i = 0; i < this.indice; i++){
            if (this.pessoas[i].id == id){
                return this.pessoas[i];
            }
        }
        return null;
    }
}

const cadastro = new CadastroPessoas();
cadastro.inserir(new Pessoa(1, "Ana"));
cadastro.inserir(new Pessoa(2, "Bruno"));

console.log(cadastro.pesquisar(2));
console.log(cadastro.pesquisar(5));
