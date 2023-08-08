/*
Facture Function + Prototype
*/

/*
VERSÃO 1

function criaPessoa(nome, sobrenome){
    const pessoaPrototype = {
        falar() {
            console.log(`${this.nome} está falando`);
        },

        beber() {
            console.log(`${this.nome} está bebendo`);
        }, 

        comer() {
            console.log(`${this.nome} está comendo`);
        }
    }

    return Object.create(pessoaPrototype,{
        nome:{value : nome},
        sobrenome: {value: sobrenome}
    })
}
*/


//////// VERSÃO 2 - DECOMPONDO O OBJETO////////

const falar = {
    falar() {
        console.log(`${this.nome} está falando`);
    }
}

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`);
    }
}

const comer = {
    comer() {
        console.log(`${this.nome} está comendo`);
    }
}

///Assign copia os objetos, recebe um array vazio e os obj a serem copiados
const pessoaPrototype = Object.assign({}, falar, comer, beber)

function criaPessoa (nome, sobrenome) {
    return Object.create(pessoaPrototype,{
        nome:{value : nome},
        sobrenome: {value: sobrenome}
    })
}

const p1 = criaPessoa ('jorge', 'lopes')
console.log(p1);
p1.falar()
p1.comer()
p1.beber()