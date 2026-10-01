// Questão 5

function Livro(titulo, autor, editor, ano){
    this.titulo = titulo;
    this.autor = autor;
    this.editor = editor;
    this.ano = ano;
}

Livro.prototype.mostrarDados = function(){
    console.log(this.titulo + ", " + this.autor + ", " + this.editor + ", " + this.ano);
}

const livro1 = new Livro("Dom Casmurro", "Machado de Assis", "Garnier", 1899);
const livro2 = new Livro("Capitães da Areia", "Jorge Amado", "Companhia das Letras", 1937);

livro1.mostrarDados();
livro2.mostrarDados();
