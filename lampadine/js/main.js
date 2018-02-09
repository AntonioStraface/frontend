var $tasto = $(".singolo");
var $lampada = $(".lampadina");
var $intgen = $(".interruttore-generale");

var accendi = function($this){


  var dataInterr =   $this.attr('data-interruttore');

  $(".lampadina[data-interruttore = "+ dataInterr + "]").toggleClass('lampadinaAccesa');

}

var stoppaLink = function (e) {
  e.preventDefault();
}

var inter = function () {
  $lampada.toggleClass("lampadinaAccesa");
}

$tasto.on('click', function(e){
    var $this = $(this);
    stoppaLink(e);
    accendi($this);
});
$intgen.on("click",inter);
