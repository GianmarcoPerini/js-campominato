let listaBomba = [];
let numeriBomba = generatoreNumeriUnici(1, 100, 16, listaBomba);
console.log(listaBomba);
let listaSalvi= [];

for(i=0;i<3;i++){
    let numeroPrompt = parseInt(prompt("Iserisci un numero"));
    listaSalvi.push(numeroPrompt);

    if(listaBomba.includes(numeroPrompt)){
        console.log("morto");
        break
    }else{
        console.log("vivo");
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