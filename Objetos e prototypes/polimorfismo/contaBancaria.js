function Conta (agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
    if (this.saldo < valor){
        console.log(`Saldo insuficiente R$${this.saldo}`);
        return
    }

    this.saldo -= valor;
    this.verSaldo()
}

Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo()
}

Conta.prototype.verSaldo = function () {
    console.log(`Ag/c: ${this.agencia}/${this.conta} ` + `R$${this.saldo}`
    );
}

//Conta corrente herda características da conta
function contaCorrente (agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite;
} 

contaCorrente.prototype = Object.create(Conta.prototype)
contaCorrente.prototype.constructor = contaCorrente;

contaCorrente.prototype.sacar = function (valor) {
    if (valor > (this.saldo + this.limite)){
        console.log(`Saldo insuficiente R$${this.saldo}`);
        return
    }

    this.saldo -= valor;
    this.verSaldo()
}

//Conta poupança herda características da conta
function contaPoupanca (agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo)
} 

contaPoupanca.prototype = Object.create(Conta.prototype)
contaPoupanca.prototype.constructor = contaPoupanca;

const cc = new contaCorrente('1234-0','4321-x',1000, 100)
const cp = new contaPoupanca('4321-0','1234-x',1000)

cc.sacar(1100)
cp.sacar(1110)