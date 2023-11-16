/*
PROMISSE -> O objeto Promise representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante. 
resolve() -> Quando a promisse é resolvida (Ocorre tudo bem na execução)
reject() -> Quando a promisse apresenta falha (rejeitada)
São parâmetros padrões de uma promisse

.then() -> Executado quando o a promisse é resolvida
.catch() -> Executado quando a promisse falha
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
                resolve(msg)
            }, tempo)
    })
}

espera('Frase 1', rand(1,4))
.then(resposta =>{
    console.log(resposta);
    return espera('Frase 2', rand(1, 4))
})
.then(resposta =>{
    console.log(resposta);
    return espera(1111, rand(1, 4))
})
.then(resposta=>{
    console.log(resposta);
})
.catch(e =>{
    console.log(e);
})

