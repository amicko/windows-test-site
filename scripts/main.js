var $ = require('jquery');

var $green = $('#green');
var $blue = $('#blue');
var $white = $('#white');
var $body = $('body');

$green.click(function() {
	$body.css('background-color', 'green');
})

$blue.click(function() {
	$body.css('background-color', 'blue');
})

$white.click(function() {
	$body.css('background-color', 'white');
})