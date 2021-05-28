function esPalindromo(frase) {
  const fraseModificada = frase
    .toLowerCase()
    .replaceAll(/[.,·\/#¡!$%\^&\*;:{}=\-_`~()”“"'‘’«»…?¿[\]\s]/g, "")
    .normalize("NFD")
    .replaceAll(/[\u0300-\u036f]/g, "");
  const fraseDelReves = fraseModificada.split("").reverse().join("");
  return fraseModificada === fraseDelReves;
}

const frase = "Höla, què tál?";
const frase2 = "Argentina, la lluna anul·la la nit negra";
console.log(`${frase} ${esPalindromo(frase)}`);
console.log(`${frase2} ${esPalindromo(frase2)}`);
