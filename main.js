let listaBomba = [];
let numeriBomba = generatoreNumeriUnici(1, 100, 16, listaBomba);
console.log(listaBomba);
let listaSalvi= [];
let capitalizzazione = prompt("Scegli il livello di difficoltà: Facile, Medio, Difficile")
let difficolta = capitalizzazione.charAt(0).toUpperCase() + capitalizzazione.slice(1);
let y = level(difficolta)

if(y == undefined){
    alert("Scelta non valida")
    y = 4
}

while(listaSalvi.length < y){
    let numeroPrompt = parseInt(prompt("Inserisci un numero tra 1 e 100"));
    if(numeroPrompt > 100 || numeroPrompt <= 0){
        alert("Numero inserito non valido")
        numeroPrompt
    }else if(listaSalvi.indexOf(numeroPrompt) == -1) {
        listaSalvi.push(numeroPrompt);
        console.log(listaSalvi);
    }else{
        alert("Hai gia inserito questo numero")
        numeroPrompt
    }
    if(listaBomba.includes(numeroPrompt) && listaSalvi.length <= 1){
        console.log("Sei morto, hai fatto " + listaSalvi.length + " passo prima di ESPLODERE");
        break
    }else if(listaBomba.includes(numeroPrompt)){
        console.log("Sei morto, hai fatto " + listaSalvi.length + " passi prima di ESPLODERE");
        break
    }else if(listaSalvi.length == y){
        console.log("COMPLIMENTI sei unscito indenne dal CAMPO MINATO");
    }
    else{
        console.log("vivo");
    }
}








function level(livello){
    if(livello == "Facile"){
        return 4
    } else if (livello == "Medio"){
        return 10
    } else if( livello == "Difficile"){
        return 16
    }
}

function generatoreNumeriUnici(min, max, lunghezzaArray, listaDestinazione){
    while(listaDestinazione.length < lunghezzaArray){
        let x = Math.floor(Math.random() * (max - min + 1) + min)
        if(listaDestinazione.indexOf(x) == -1) {
            listaDestinazione.push(x);
        }
    }
}