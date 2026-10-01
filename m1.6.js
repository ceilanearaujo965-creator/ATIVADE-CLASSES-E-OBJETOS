// Questão 6 - o que o new faz

function Livro(titulo, autor){
    this.titulo = titulo;
    this.autor = autor;
}

Livro.prototype.mostrarDados = function(){
    console.log(this.titulo + " - " + this.autor);
}

// 1. cria um objeto vazio
const livro1 = {};

// 2. liga o protótipo do objeto ao Livro.prototype
Object.setPrototypeOf(livro1, Livro.prototype);

// 3 e 4. executa a função com o this apontando pro objeto novo
Livro.call(livro1, "Dom Casmurro", "Machado de Assis");

// 5. o objeto é retornado (já está na variável livro1)
livro1.mostrarDados();
console.log(livro1 instanceof Livro);
