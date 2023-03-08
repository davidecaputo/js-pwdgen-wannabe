const numero = 21;
let nome = prompt('Come ti chiami?');
let cognome = prompt('Qual è il tuo cognome?')
let colore = prompt('Qual è il tuo colore preferito?');


console.log(nome + cognome + colore + numero);
if(nome && cognome && colore){
    if(isNaN(parseInt(nome)) && isNaN(parseInt(cognome)) && isNaN(parseInt(colore))){
        document.getElementById("password").innerHTML = (nome + cognome + colore + numero);
    }
    else{
        document.getElementById("password").innerHTML = ('Inserisci valori validi');    
    }
} else {
    document.getElementById("password").innerHTML = ('Inserisci valori validi');
}