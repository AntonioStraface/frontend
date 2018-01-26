
var $body = $('body');
var $buttonMenu = $('.menu-button');
var $find = $('.cerca');
var $arrow = $('.freccia');

var MENU = 'menuOpened';
var TEXTSEARCH = 'textSearchOpened';
var FILTER = 'filterOpened';
var OVERLAY = "seeOverlay";

var _manageClass = function(classToggle) {
    $body.toggleClass(classToggle);
};

$buttonMenu.on('click', function() {
  _manageClass(MENU);
  _manageClass(OVERLAY);
});

$find.on('click', function() {
  _manageClass(TEXTSEARCH);
});

$arrow.on('click', function() {
   _manageClass(FILTER);
});
