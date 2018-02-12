var ListManager = (function ()
{

  /* DECLARING VARIABLES */

  var $add, $remove, $wrapper, $inputsTypeText;

  var WRAPPERTOTAL = ".sectionTotal";
  var WRAPPER = ".section";

  /* CACHING VARIABLES */

  function _setup()
  {
    $add = $(".add");
    $remove = $(".remove");
    $wrapper = $(".section");
    $inputsTypeText = $('input[type=text]');
  };


  /* PRIVATE BUSINESS FUNCTIONS */

  var add = function($this,val)
  {
    if(_search($this, val) === -1)
    {
      $this.find("UL").append("<LI>"+val+"</LI>");
    }
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
    start: _init,
    add: add,
    remove: remove
  };

})();
