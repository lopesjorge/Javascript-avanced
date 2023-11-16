/*
Promisse.all() -> Retorna uma única Promise quando todas as promises do array forem resolvidas
Promise.race() -> 
*/

function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min) + min)
}

function espera (msg, tempo){
    return new Promise ((resolve, reject)=>{
    if(typeof msg !== 'string') reject('Error! Character invalid!')
        setTimeout(()=>{
            resolve(msg.toUpperCase())
        }, tempo)
    })
}

const promises =  ['Promise',espera('promisse 1',2000),espera('promisse 2',4000),espera('promisse 3',6000)]

Promise.all(promises)
.then(data =>{
    console.log(data);
})
.catch(error =>{
    console.log(error);
})