var getProdotto = (function () {

  /* DECLARING VARIABLES */
  var RESTURL = "https://api.punkapi.com/v2/beers", ELEMENTI=4;
  var pagina = 1;
  var $listaProdotti, $creoProd, $sceltaProdotto, $birraInserita, $bottonepiu;
  /* CACHING VARIABLES */
  function _setup() {
    $listaProdotti = $('.prodotti');
    $sceltaProdotto = $('.sceltaProdotto');
    $birraInserita = $('.birraInserita');
    $bottonepiu = $('.more');
    };

   /* PRIVATE BUSINESS FUNCTIONS */
  var _aggiuntaProdotto = function(element) {
    $creoProd = $('<li> <img src=" "></img> <h3></h3> </li>').addClass('singoloProdotto');
    var $prodotto = $creoProd.clone();
    $prodotto.find('IMG').attr("src", element.image_url);
    $prodotto.find('H3').text(element.name);
    $listaProdotti.append($prodotto);
  };

  var _filteringData= function(data){
    data.forEach(function(element){
      _aggiuntaProdotto(element);
    });
  }

  var _diversiMenu = function(){
    var inputBir = $birraInserita.val();
      if(inputBir === ""){
        _getPaginatore();
      };
  }

  var _getPaginatore = function() {
    var url=RESTURL;
    $.ajax({
      url:url,
      type:"GET",
      dataType:'json',
      cache:false,
      data:{
        page:pagina,
        per_page: ELEMENTI
      },
      success: function(data){
        _filteringData(data)
      }
    });
  }

  var _bloccoInvio = function(e){
    e.preventDefault();
  }
  /* END PRIVATE BUSINESS FUNCTIONS */

   /* DECLARING EVENT HANDLER */
  function _setObserver() {
    $sceltaProdotto.on('submit', function(e){
        _bloccoInvio(e);
        _diversiMenu();
    });
      $bottonepiu.on("click",function(){
        pagina++;
        _getPaginatore();
      })

  };

  function _init() {
    try {
      _setup();
      _setObserver();
    }
    catch(e) {
        console.log('%c ' + e.message, 'color:red');
        console.log('%c ' + e.stack, 'background: #222; color: #bada55');
    }
  }

  return {
    start: _init
  };

})();
