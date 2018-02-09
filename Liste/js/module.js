var ListManager = (function ()
{

  /* DECLARING VARIABLES */

  var $add, $remove, $wrapper, $scelta,
      $addCommander, $removeCommander,
      currentSelection, $inputsTypeText;

  var WRAPPERTOTAL = ".sectionTotal";
  var WRAPPER = ".section";

  /* CACHING VARIABLES */

  function _setup()
  {
    $add = $(".add");
    $remove = $(".remove");
    $wrapper = $(".section");
    $wrapperTotal = $(".sectionTotal");
    $scelta = $(".scelta");
    $addCommander = $(".add-commander");
    $removeCommander = $(".remove-commander");
    $inputsTypeText = $('input[type=text]');

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

  /* PRIVATE BUSINESS FUNCTIONS */

  var add = function($this,val)
  {
    if(_search($this, val) === -1)
    {
      $this.find("UL").append("<LI>"+val+"</LI>");
    }
  };

  var addCommander = function($this)
  {
    var val = $this.find("INPUT").val();

    add($(".section[data-lista="+currentSelection+"]"), val);
  };

  var updateSelection = function($this)
  {
    currentSelection = $this.val();
  }

  var removeCommander = function($this)
  {
    var val = $this.find("INPUT").val();
    remove($(".section[data-lista="+currentSelection+"]"), val);
  };

  var remove = function($this,val)
  {
    var tmpIndex = _search($this, val);

    if(tmpIndex !== -1)
    {
      $this.find("LI").get(tmpIndex).remove();
    }
  };

  var _search = function($this, value)
  {
    var $li = $this.find("li");
    var found = -1;

    $li.each(function(index)
    {
      if($(this).text() === value)
      {
        found = index;
      }
    });

    return found;
  };

  /* END PRIVATE BUSINESS FUNCTIONS */

  /* DECLARING EVENT HANDLER */

  function _setObserver()
  {
    $add.on('click',function()
    {
      var $this = $(this);

      add($this.closest(WRAPPER), $this.closest(WRAPPER).find("INPUT").val());
    });

    $remove.on('click',function()
    {
      var $this = $(this);

      remove($this.closest(WRAPPER), $this.closest(WRAPPER).find("INPUT").val());
    });

    $addCommander.on("click",function()
    {
      var $this = $(this);

      addCommander($this.closest(WRAPPERTOTAL));
    });

    $removeCommander.on('click',function()
    {
      var $this = $(this);

      removeCommander($this.closest(WRAPPERTOTAL));
    });

    $scelta.on("change",function()
    {
      var $this = $(this);

      updateSelection($this);
    });

    $inputsTypeText.on('keyup', function()
    {
      if($(this).val().length > 2)
      {
        $(this).closest('SECTION').find('button').removeAttr('disabled');
      }
      else
      {
        $(this).closest('SECTION').find('button').attr('disabled', 'true');
      }
    });
  };

  function _init()
  {
    try
    {
      _setup();
      _setObserver();
    }
    catch(e)
    {
      console.log('%c ' + e.message, 'color:red');
      console.log('%c ' + e.stack, 'background: #222; color: #bada55');
    }
  }

  return {
    start: _init
  };

})();
