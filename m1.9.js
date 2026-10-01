// Questão 9

class Equipamento {
    ligado = false;

    liga(){
        if (this.ligado == false){
            this.ligado = true;
        } else {
            console.log("Já está ligado");
        }
    }

    desliga(){
        if (this.ligado == true){
            this.ligado = false;
        } else {
            console.log("Já está desligado");
        }
    }

    inverte(){
        this.ligado = !this.ligado;
    }
}

const tv = new Equipamento();
tv.liga();
tv.liga();
console.log(tv.ligado);
tv.inverte();
console.log(tv.ligado);
tv.desliga();
