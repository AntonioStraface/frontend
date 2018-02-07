//somma
var sum = function  (array){
  var totsum = 0;
  for(var i = 0; i < array.length; i ++){
    totsum += array[i];
  }
  return totsum;
}

//differenza
var dif = function  (array){
  var totdif = array[0];
  for(var i = 1; i < array.length; i ++){
    totdif -= array[i];
  }
  return totdif;
}

var sceltaoperazione = function (scelta,array){
  var  risultato = 0 ;
  if(scelta == true){
   risultato = sum(array);
  }
  else {
     risultato = dif(array);
  }
  return risultato ;
}





var removeParola = function(frase, parola){
  return frase.replace(new RegExp(parola, "igm"),"");
}

//Versione migliore
var eliminaParola = function(frase, parola) {
  var temp = frase.split(" ");

  for (var i = 0; i < temp.length; i++) {
    if (temp[i]===parola) {
      temp = temp.slice(0,i).concat(temp.slice(i+1));
      i--;
    }
  }

    return temp.join(" ");
}
