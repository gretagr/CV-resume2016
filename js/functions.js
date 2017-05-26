$(function() {
  $('progress').each(function() {
    var max = $(this).val();
    var time = 500;
    $(this).val(0).delay(1500).animate({ value: max }, { duration: 1000, easeOutCirc: 'easeOutCirc' });
      });
});

var holder = document.getElementsByClassName("popup-image");
var middle = document.getElementsByClassName("text");
var cup = document.getElementById("cup");
var comp = document.getElementById("comp");
var ruler = document.getElementById("ruler");
var note = document.getElementById("note");


TweenMax.from(cup, 2, {width: 0, ease:Elastic.easeOut});
TweenMax.from(comp, 2, {width: 0, right: -100, ease:Back.easeOut});
TweenMax.from(ruler, 2, {x: -850,y: -100, rotation:360, ease:Bounce.easeOut, delay: 1});
TweenMax.from(note, 2, {x: -500, ease:Back.easeOut});

window.addEventListener("resize", imgSize, false);

function getPosition(element) {
   var rect = element.getBoundingClientRect();
   return {x:rect.left,y:rect.top};
}
var position = getPosition(comp);
comp.style.right = (position.x - 1) + "px";

 function imgSize(){

 };
