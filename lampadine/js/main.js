var $tasto = $(".singolo");
var $lampada = $(".lampadina");
var $intgen = $(".interruttore-generale");

var accendi = function(){
  var $this = $(this);
  var dataInterr =   $this.attr('data-interruttore');

  $(".lampadina[data-interruttore = "+ dataInterr + "]").toggleClass('lampadinaAccesa');

}

var inter = function () {
  $lampada.toggleClass("lampadinaAccesa");
}

$tasto.on('click', accendi);
$intgen.on("click",inter);
