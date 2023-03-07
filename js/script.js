const numero = 21;
let nome = prompt('Come ti chiami?');
let cognome = prompt('Qual è il tuo cognome?')
let colore = prompt('Qual è il tuo colore preferito?');


console.log(nome + cognome + colore + numero);
document.getElementById("password").innerHTML = (nome + cognome + colore + numero);