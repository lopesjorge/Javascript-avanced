/*
HERANÇA COM CLASSES
*/

class dispositivoEletronico {
    constructor (nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(nome){
        if(this.ligado){
            console.log(`${this.nome} já ligado`)
            return
        }
        this.ligado = true
    }

    desligar(nome){
        if(!this.ligado){
            console.log(`${this.nome} já desligado`)
            return
        }
        this.ligado = false
    }

}

const tv = new dispositivoEletronico('smartphone')

console.log('Antes:',tv.ligado);
tv.ligar()
tv.ligar()
console.log('Despois:',tv.ligado);


//A palavra EXTENDS diz que determinada class herda atributos de outra class (Conceito de herança)
// SUPER() -> A palavra-chave super é usada para chamar o construtor de sua classe pai para acessar as propriedades e métodos do pai.
// Dá pra extender classe de classe -- Não recomendado
class Smartphone extends dispositivoEletronico {
    constructor(nome, cor, modelo){
        super(nome);//Ao extender uma classe sempre tem que usar o super()
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends dispositivoEletronico {
    constructor(nome, wifi){
        super(nome);
        this.wifi = wifi;
    }
    //Pode sobrescrever métodos
    ligar(){
        console.log(`Esse ${this.nome} já está ligado`);
    }

    bateria(){
        console.log(`${this.nome} está com 50% de bateria`);
    }
}

const celular = new Smartphone('iphone','branco','XR')
celular.ligar()

const tab = new Tablet('ipad',true)

tab.ligar()
tab.bateria()

console.log('Tablet:',tab);
console.log('Smartphone:',celular);