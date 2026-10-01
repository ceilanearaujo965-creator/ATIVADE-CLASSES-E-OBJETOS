// Questão 13

class Postagem {
    constructor(id, texto){
        this.id = id;
        this.texto = texto;
        this.qtdCurtidas = 0;
    }

    curtir(){
        this.qtdCurtidas++;
    }
}

class Microblog {
    constructor(){
        this.postagens = [];
    }

    incluir(postagem){
        for (let i = 0; i < this.postagens.length; i++){
            if (this.postagens[i].id == postagem.id){
                console.log("Já existe uma postagem com esse id");
                return;
            }
        }
        this.postagens.push(postagem);
    }

    mostrar(){
        for (let i = 0; i < this.postagens.length; i++){
            console.log(this.postagens[i].id + " - " + this.postagens[i].texto + " - " + this.postagens[i].qtdCurtidas + " curtidas");
        }
    }
}

const blog = new Microblog();
const p1 = new Postagem(1, "Primeira postagem");
const p2 = new Postagem(2, "Segunda postagem");

blog.incluir(p1);
blog.incluir(p2);
blog.incluir(new Postagem(1, "Repetida"));

p1.curtir();
p1.curtir();
p2.curtir();

blog.mostrar();
