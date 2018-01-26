
var $body = $('body');
var $buttonMenu = $('.menu');
var $find = $('.cerca');
var $arrow = $('.iconaV');

var MENU = 'menuOpened';
var TEXTSEARCH = 'textSearchOpened';
var FILTER = 'filterOpened';

var _manageClass = function(classToggle) {
    $body.toggleClass(classToggle);
};

$buttonMenu.on('click', function() {
  _manageClass(MENU);
});

$find.on('click', function() {
  _manageClass(TEXTSEARCH);
});

$arrow.on('click', function() {
   _manageClass(FILTER);
});
