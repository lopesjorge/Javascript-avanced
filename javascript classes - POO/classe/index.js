/**
 * CLASSES EM JAVASCRIPT
 * SEMELHANTE AO CONSTRUTORES
 * PALAVRA RESERVADA CLASS
 * UTILIZA O CONSTRUCTOR
 * LINKA OS METODOS DE FORMA AUTOMÁTICA AO PROTOTYPE
 */

class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} está falando`);
    }

    comer(){
        console.log(`${this.nome} está comendo`);
    }

    beber(){
        console.log(`${this.nome} está bebendo`);
    }

    hablar(){
        console.log(`${this.nome} está hablando`);
    }
}

const p = new Pessoa('jorge', 'lopes')


console.log(p);

p.falar()
p.beber()
p.comer()
p.hablar()
