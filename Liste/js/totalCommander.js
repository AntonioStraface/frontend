var TotalCommanderModule = (function () {

  /* DECLARING VARIABLES */

    var $wrapper, $scelta,
        $addCommander, $removeCommander,
        currentSelection;

    var WRAPPERTOTAL = ".sectionTotal";
    var WRAPPER = ".section";


  /* CACHING VARIABLES */
  function _setup() {
    $wrapper = $(".section");
    $wrapperTotal = $(".sectionTotal");
    $scelta = $(".scelta");
    $addCommander = $(".add-commander");
    $removeCommander = $(".remove-commander");
    creaSelect();
  };

  var creaSelect = function()
  {
    $wrapper.each(function(index)
    {
      var data = $(this).attr("data-lista");
      var op = "<option>" + data + "</option>";
      $scelta.append(op);

      if(index === 0) currentSelection = data;
    });
  };


  var updateSelection = function($this)
  {
    currentSelection = $this.val();
  }

  var addCommander = function(val)
  {
    ListManager.add($(".section[data-lista="+currentSelection+"]"), val);
  };

  var removeCommander = function(val)
  {

    ListManager.remove($(".section[data-lista="+currentSelection+"]"), val);
  };

   /* DECLARING EVENT HANDLER */
  function _setObserver() {
    $addCommander.on("click", function(){
      var val = $(this).closest(WRAPPERTOTAL).find("INPUT").val();
      addCommander(val);
    });

    $removeCommander.on("click", function(){
      var val = $(this).closest(WRAPPERTOTAL).find("INPUT").val();

      removeCommander(val);
    });

    $scelta.on("change",function()
    {
      var $this = $(this);

      updateSelection($this);
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
