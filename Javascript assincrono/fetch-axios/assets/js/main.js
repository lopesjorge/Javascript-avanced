 //1ª Forma
 fetch('pessoas.json')
   .then(resposta => resposta.json())
   .then(json => carregaElementosNaPagina(json));

/*2ª Forma
async function load() {
  const response = await fetch('pessoas.json')
  const pessoas = await response.json()
  carregaElementosNaPagina(pessoas)
}

load()
*/
//3ª Forma
// Ao usar o axios a resposta do .then já não é mais uma nova promise
// com isso fica mais simples a requisição
// axios('pessoas.json')
//   .then(resposta => carregaElementosNaPagina(resposta.data));

function carregaElementosNaPagina(json) {
  const table = document.createElement('table');


  for(let pessoa of json) {
    const tr = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.innerHTML = pessoa.nome;
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    td2.innerHTML = pessoa.idade;
    tr.appendChild(td2);

    table.appendChild(tr);
  }

  const resultado = document.querySelector('.resultado');
  resultado.appendChild(table);
}
