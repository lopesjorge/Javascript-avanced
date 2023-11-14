class ControlRemoto {
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    //Método de instância
    aumentar(){
        this.volume += 2
    }
    //Método de instância
    diminuir (){
        this.volume -= 2
    }
    //Método estático
    static trocapilha(){
        console.log('Vou trocar a pilha');
    }
}

const tv = new ControlRemoto('LG')
tv.aumentar()
tv.aumentar()
tv.aumentar()
console.log('Volume TV:', tv);

//tv.trocapilha() Métodos estáticos não estão disponíveis ao instanciar um objeto --Erro no log
//Nesse caso não está sendo iniciada a instância da classe, por isso não tem acesso ao dados
ControlRemoto.trocapilha()