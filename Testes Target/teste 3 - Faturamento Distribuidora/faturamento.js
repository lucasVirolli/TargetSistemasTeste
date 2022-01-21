
fetch('valoresFaturamento.json')
.then(resposta => resposta.json())
.then(json => carregaElementosNaPagina(json));

fetch('valoresFaturamento.json')
  .then(resposta => resposta.json())
  .then(json => menorValorFaturamento(json));

function menorValorFaturamento(json){

  const arrayValores = [];

  for(let faturamento of json){
    let valores = faturamento.valor;
    arrayValores.push(valores);
  }

  let menorValor = arrayValores[0];
  for(let i = 0; i < arrayValores.length; i++){
    if(arrayValores[i] <= menorValor && arrayValores[i] != 0){
      menorValor = arrayValores[i];
    }
  }

  console.log(menorValor);

}

function carregaElementosNaPagina(json) {

  const table = document.createElement('table');

  for (let faturamento of json) {
    const tr = document.createElement('tr');

    let td = document.createElement('td');
    td.innerHTML = faturamento.dia;
    tr.appendChild(td)

    td = document.createElement('td');
    td.innerHTML = faturamento.valor
    tr.appendChild(td)

    table.appendChild(tr)
  }

  const resultado = document.querySelector('.resultado');
  resultado.appendChild(table);

}