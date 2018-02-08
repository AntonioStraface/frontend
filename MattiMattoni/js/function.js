//MattiMattoni

var $creazione = $(".creatore");
var $prototipo = $("<div></div>").addClass("mattone");

var crea = function(){
var $clone = $prototipo.clone();
$(".cariola").append($clone);

}


$creazione.on("click",crea);
