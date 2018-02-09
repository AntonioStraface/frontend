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
    if(_search($this, val) === -1){
      $this.closest(WRAPPER).find("UL").append("<LI>"+val+"</LI>");
    }
  };

  var remove = function($this){
    var val = $this.closest(WRAPPER).find("INPUT").val();
    var tmpIndex = _search($this, val);
    if(tmpIndex !== -1){
      $this.closest(WRAPPER).find("LI").get(tmpIndex).remove();
    }
  };

  var _search = function($this, value){
    var $li = $this.closest(WRAPPER).find("li");
    var found = -1;
    $li.each(function(index){
      if($(this).text() === value){
        found = index;
      }
    });
    return found;
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
