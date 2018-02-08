//MattiMattoni

//caching
var $creazione = $(".creatore");
var $prototipo = $("<div><button class='elimina'>Eliminami</button></div>").addClass("mattone");
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

var eliminaMattone = function() {
    var $this = $(this);
    $this.closest(".mattone").remove();
}

//handler
$distruzione.on("click", distruzioneTotale);
$creazione.on("click",crea);
$cariola.on("click", ".elimina", eliminaMattone);
