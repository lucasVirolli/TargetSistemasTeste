function inverteString (string) {

  string = document.getElementById('area-de-texto').value;

  let numDeCaracteres = string.length;
  let stringInvertida = '';

  for(let i = 0; i < string.length; i++){
    let decrescendoString = string[numDeCaracteres - 1];
    stringInvertida = stringInvertida += decrescendoString;
    numDeCaracteres--;
  };

  let resultado = document.getElementById('resultado-texto');
  resultado.textContent = stringInvertida;

  return stringInvertida;
}

document.getElementById('area-de-texto').addEventListener('keyup', () => inverteString());
