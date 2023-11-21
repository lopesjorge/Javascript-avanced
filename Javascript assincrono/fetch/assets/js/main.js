/*
FETCH API
*/

document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    carregaPagina(el);
  }
});
/* VERSÃO FETCH API 
function carregaPagina(el) {
  const href = el.getAttribute('href');

  fetch(`${href}`)
  .then(response => {
    if(response.status !== 200) throw new Error (`Error ${response.status}`);
    return response.text() //Sempre retorne a função
  })
  .then(html => carregaResultado(html))
  .catch(e => console.error(e))
}*/

async function carregaPagina(el) {
  const href = el.getAttribute('href');

  try {
    const response = await fetch(href)
    if (response.status !== 200) throw new Error(`Error ${response.status}`)
    const html = await response.text()
    carregaResultado(html)
  }
  catch(e){
    console.error(e)
  }

  }

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}
