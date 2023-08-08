const pessoas = [
    { id: 1 , nome: 'jorge'},
    { id: 2 , nome: 'joão'},
    { id: 3 , nome: 'lopes'}
]

// const novasPessoas = {}

// for (const p of pessoas){
//     const {id} = p
//     novasPessoas[id] = {...pessoa}
// }


/**
 * com o Object Map é possível utilizar get() e set()
 */
const novasPessoas = new Map();
for (const pessoa of pessoas){
     const {id} = pessoa
     novasPessoas.set(id, {...pessoa})
 }
console.log(novasPessoas.get(2))
