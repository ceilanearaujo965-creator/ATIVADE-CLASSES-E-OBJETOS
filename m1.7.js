// Questão 7

class Livro {
    constructor(titulo, pages, isbn){
        this.titulo = titulo;
        this.pages = pages;
        this.isbn = isbn;
    }

    printIsbn(){
        console.log("ISBN: " + this.isbn);
    }
}

const livro = new Livro("Dom Casmurro", 256, "978-85-359-0277-5");
livro.printIsbn();
