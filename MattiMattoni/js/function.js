//MattiMattoni

//caching
var $creazione = $(".creatore");
var $prototipo = $("<div></div>").addClass("mattone");
var $distruzione = $(".distruttore");
var $cariola = $(".cariola");

//Logic
var crea = function(){
  var $clone = $prototipo.clone();
  $cariola.append($clone);
}

var distruzioneTotale= function(){
  $(".mattone").remove();
};


//handler
$distruzione.on("click", distruzioneTotale);
$creazione.on("click",crea);
