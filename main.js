let numeriBomba = generatoreNumeriUnici(1, 100, 16);
console.log(numeriBomba.sort((a,b)=>{return a-b}));
let listaSalvi= [];
let capitalizzazione = prompt("Scegli il livello di difficoltà: Facile, Medio, Difficile");
let difficolta = capitalizzazione.charAt(0).toUpperCase() + capitalizzazione.slice(1);
let listaLivelli = ["Facile","Medio","Difficile"];
let y = level(difficolta);

// SCELTA DELLA DIFFICOLTÀ
while(!listaLivelli.includes(difficolta)){                                                                  
    alert("Scelta non valida");
    capitalizzazione = prompt("Scegli il livello di difficoltà: Facile, Medio, Difficile");
}

// INSERIMENTO NUMERI
while(listaSalvi.length < y){                                                                               
    let numeroPrompt = parseInt(prompt("Inserisci un numero tra 1 e 100"));

    if(numeroPrompt > 100 || numeroPrompt <= 0 || isNaN(numeroPrompt)){
        alert("Numero inserito non valido");
        numeroPrompt;
    }else if(listaSalvi.indexOf(numeroPrompt) == -1) {    // CONTROLLO SE NUMERO INSERITO È DOPPIO                                                  
        listaSalvi.push(numeroPrompt);
        console.log(listaSalvi);
    }else{
        alert("Hai gia inserito questo numero");
        numeroPrompt;
    }

     // RISULTATO
    if(numeriBomba.includes(numeroPrompt) && listaSalvi.length <= 1){                                       
        console.log("Sei morto, hai fatto " + listaSalvi.length + " passo prima di ESPLODERE");
        break
    }else if(numeriBomba.includes(numeroPrompt)){
        console.log("Sei morto, hai fatto " + listaSalvi.length + " passi prima di ESPLODERE");
        break
    }else if(listaSalvi.length == y){
        console.log("COMPLIMENTI sei unscito indenne dal CAMPO MINATO");
    }
}



function level(livello){
    switch(livello){
        case "Facile":
            return  4;
        case "Medio":
            return 10;
        case "Difficile":
            return 16;
    }
}

function generatoreNumeriUnici(min, max, lunghezzaArray){
    let arr = []
    while(arr.length < lunghezzaArray){
        let x = Math.floor(Math.random() * (max - min + 1) + min);
        if(arr.indexOf(x) == -1) {
            arr.push(x);
        }
    }
    return arr
}