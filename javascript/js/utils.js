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
