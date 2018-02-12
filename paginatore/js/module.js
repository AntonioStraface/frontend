var getPaginatore = (function () {

  /* DECLARING VARIABLES */
  var $wrapper,$showMore,
      $itemTemplate = $('<li></li>').addClass('element list-group-item text-success nascondi'),
      RESTURL = "https://jsonplaceholder.typicode.com/photos";
      var counter = 1;
      var mostrati = 50;
      var MOSTRATIINCR = 500;

  /* CACHING VARIABLES */
  function _setup() {
    $wrapper = $('.preferiti');
    $showMore = $(".show-more");
  };

   /* PRIVATE BUSINESS FUNCTIONS */
  var _aggiungere = function(attributo,tipo,$appendTO) {
    var $createEl = $itemTemplate.attr("data-" + tipo + "-type",attributo).clone();
    $itemTemplate.attr("data-num",counter);
    $createEl.text(attributo);
    $appendTO.append($createEl);
    counter++;
  };

var _mostra = function (){
  for (var i = 1; i <= mostrati; i++) {
    $("li[data-num="+i+"]").removeClass("nascondi");
  }
  mostrati += MOSTRATIINCR;
}
 var _filteringData = function(data) {
    $wrapper.find('.list-group').empty();
    debugger;
    data.forEach(function(element){
      _aggiungere(element.title,"title",$wrapper.find('.list-group'));
    });
    _mostra();
 }

  var _getFoto = function() {
    debugger;
    var url = RESTURL;
    $.ajax({
      url: url,
      type: "GET",
      dataType: 'json',
      cache: false,
      success: function(data) {
           _filteringData(data)
      }
    });
  }


  /* END PRIVATE BUSINESS FUNCTIONS */


   /* DECLARING EVENT HANDLER */
  function _setObserver() {
    _getFoto();
    $showMore.on("click",_mostra);
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
    start: _init,
    _getFoto: _getFoto
  };

})();
