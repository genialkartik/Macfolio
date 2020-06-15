// LOWER DOCKER HINT

$(".dcimg").hover(function(){
    var dott = $(this).prop('class').toString();
    var dotno = dott.substring(dott.length -2, dott.length);
    dotdemopn(dotno);
  });
  $(".dcimg").mouseleave(function(){
    $(".doc-demo").css("font-size","0em");
  });

  function dotdemopn(dotno){
    $(".dem-lst"+dotno).css("font-size","0.7em");
  }