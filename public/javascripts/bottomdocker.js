// LOWER DOCKER HINT

$(".dcimg").hover(function(){
  $(this).prev().css("font-size", "0.7em");
});
$(".dcimg").mouseleave(function(){
  $(this).prev().css("font-size", "0em");
});