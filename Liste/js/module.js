var ListManager = (function () {

  /* DECLARING VARIABLES */
  var $add;
  var $remove;
  var WRAPPER = ".section";
  /* CACHING VARIABLES */
  function _setup() {
    $add = $(".add");
    $remove = $(".remove");
  };

   /* PRIVATE BUSINESS FUNCTIONS */
  var add = function($this) {
    var val = $this.closest(WRAPPER).find("INPUT").val();
    console.log(_search($this, val));
    if(!_search($this, val)){
      $this.closest(WRAPPER).find("UL").append("<LI>"+val+"</LI>");
    }
  };

  var remove = function($this){

  };

  var _search = function($this, value){
    var check = false;
    var $li = $this.closest(WRAPPER).find("li");
    $li.each(function(){
      if($(this).text() === value){
        check = true;
        return true;
      }
    });
    return check;
  };

  var _privateFunctionBis = function() {
  };
  /* END PRIVATE BUSINESS FUNCTIONS */

   /* DECLARING EVENT HANDLER */
  function _setObserver() {
    $add.on('click',function(){
        var $this = $(this);
        add($this);
    });

    $remove.on('click',function(){
        var $this = $(this);
        remove($this);
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
    start: _init
  };

})();
