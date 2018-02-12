var getPaginatore = (function () {

  /* DECLARING VARIABLES */
  var $wrapper, $showMore,
  $itemTemplate = $('<li><span></span><button>Show more &raquo;</button></li>').addClass('element list-group-item text-success nascondi'),
  counter = 1, mostrati = 50;

  var MOSTRATIINCR = 50,
  RESTURL = "https://jsonplaceholder.typicode.com/photos";

  /* CACHING VARIABLES */
  function _setup() {
    $wrapper = $('.preferiti');
    $showMore = $(".show-more");
  };

  /* PRIVATE BUSINESS FUNCTIONS */
  var _aggiungere = function(item, $appendTO) {
    var $createEl = $itemTemplate.attr("data-title-type", item.title).clone();
    $createEl.attr("data-id-type", item.id);
    $createEl.attr("data-num", counter);
    $createEl.find('SPAN').text(item.title);

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

    data.forEach(function(element){
      _aggiungere(element, $wrapper.find('.list-group'));
    });
    _mostra();
  }

  var _addSingleItem = function(element, $itsWrapper) {

    $itsWrapper.append(
      $('<img src="'+element[0].thumbnailUrl+'" />')
    );
  }

  var _getFoto = function() {

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

  var _getItemData = function(itemId, $localWrapper) {

    var url = RESTURL;

    $.ajax({
      url: url,
      type: "GET",
      dataType: 'json',
      data: {
        id: itemId
      },
      cache: false,
      success: function(data) {
        _addSingleItem(data, $localWrapper)
      }
    });
  }
  /* END PRIVATE BUSINESS FUNCTIONS */


  /* DECLARING EVENT HANDLER */
  function _setObserver() {
    _getFoto();
    $showMore.on("click",_mostra);

    $wrapper.on('click', 'BUTTON', function(){

      var $this = $(this);

      var id = $this.closest('LI').attr('data-id-type');

      _getItemData(id, $this.closest('LI'));
    });
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
