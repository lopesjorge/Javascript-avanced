/*
JAVASCRIPT ASSÍNCRONO
Async ()-> Significa que o valor de retorno da function é uma promise
Await ()-> Espera a finalização da promise

OBS: Para tratar erros basta usar o try cacth, visto que não se pode usar o then e cacth dessa forma
O Async só é possível usar com o function -- Não funciona com arrow function
*/

function rand(min=0, max=3){
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

async function executa() {

    try {
        const fase1 =  await espera('fase 1',rand())
        console.log(fase1);
        
        const fase2 =  await espera('fase 2',rand())
        console.log(fase2);
      
        const fase3 =  await espera('fase 3',rand())
        console.log(fase3);
      
        const pokemon = await fetch('https://pokeapi.co/api/v2/ability/7/')
        const data = await pokemon.json()
        console.log('Pokemon',data);
    }

    catch(e){
     console.log(e)
    }
 

  console.log('Acabando de executar funções assincronas');
}

executa()
