function inverteString (textoInserido) {

  textoInserido = document.getElementById('area-de-texto').value;

  let numDeCaracteres = textoInserido.length;
  let stringInvertida = '';

  for(let i = 0; i < textoInserido.length; i++){
    let decrescendoString = textoInserido[numDeCaracteres - 1];
    stringInvertida = stringInvertida += decrescendoString;
    numDeCaracteres--;
  };

  let resultado = document.getElementById('resultado-texto');
  resultado.textContent = stringInvertida;

  return stringInvertida;
}

document.getElementById('area-de-texto').addEventListener('keyup', () => inverteString());
