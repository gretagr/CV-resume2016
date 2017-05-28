$(function() {
  $('progress').each(function() {
    var max = $(this).val();
    var time = 500;
    $(this).val(0).delay(500).animate({ value: max }, { duration: 1000, easeOutCirc: 'easeOutCirc' });
      });
});
var cup = document.getElementById("cup");
var comp = document.getElementById("comp");
var ruler = document.getElementById("ruler");
var note = document.getElementById("note");

TweenMax.to(cup, 2, {width: 80, ease:Elastic.easeOut});
TweenMax.from(comp, 2, {width: 0, right: -100, ease:Back.easeOut});
TweenMax.from(ruler, 2, {x: -1000, y: -100, rotation:360, ease:Bounce.easeOut, delay: 1});
TweenMax.from(note, 2, {x: -500, ease:Back.easeOut});

window.addEventListener("resize", imgSize, false);

 function imgSize(){
   "use strict";
    //window.location.reload();
<<<<<<< HEAD
=======

>>>>>>> 5de9e1be15c471b1dff5b7b7c029b1f24a1308fc
 };
