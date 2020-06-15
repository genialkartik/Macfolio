// UPPER LEFT MENU HINT

$(".hnthvr").hover(function(){
    var abodoccls = $(this).prop('class').toString();
    var adcls = abodoccls.substring(abodoccls.length -2, abodoccls.length);
    abodocfn(adcls);
  });
  function abodocfn(adcls){
    $(".udlhnt"+adcls).fadeIn(500).css({"display": "block"});
  }
  $(".hnthvr").mouseout(function(){
    $(".udlht").css({"display": "none"});
  });