/**
 * GETTERS & SETTERS
 * 
 * Symbol atibui valor único [chave privada]
 */

const _velocidade = Symbol('velocidade')

class Carro {
    constructor(nome){
        this.nome = nome
        this[_velocidade] = 0
    }

    set velocidade(valor) {
        console.log('SETTER');
        if(valor >= 100 || valor <= 0)return
        if(typeof valor !== 'number')return
        this[_velocidade] = valor
    }

    get velocidade(){
        console.log('GETTER');
        return this[_velocidade]
    }

    acelerar() {
        if (this[_velocidade] >= 100)return
        this[_velocidade]++
    }

    freiar() {
        if (this[_velocidade] <= 0)return
        this[_velocidade]--
    }
}

const fusca = new Carro('fusca')

fusca.velocidade = 99
console.log(fusca.velocidade);

//////////////////////////////////////////////////////////

class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome 
        this.sobrenome = sobrenome
    }

    set nomeCompleto (valor) {
        valor = valor.split (' ')
        this.nome = valor.shift()
        this.sobrenome = valor.join(' ')
    }

    get nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`
    }
}

const p = new Pessoa('Jorge', 'Lopes')
console.log('Before:',p.nomeCompleto);
p.nomeCompleto = 'Lopes Jorge'
console.log('After:',p.nomeCompleto);
