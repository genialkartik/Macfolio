var rnbid = $("#rnavbar");
var bdyid = $(".opend-window");

$(document).ready(function(){
  $(".bckimg").click(function(){
    var tempbdimg = $(this).prop('class').toString();
    var bcimgno = tempbdimg.substring(tempbdimg.length-2,tempbdimg.length);
    var bckimgattr = $(".bdimag"+bcimgno).attr('src');
    $("#mac-bc-img").attr('src',bckimgattr);
  });
  $("#opend-window, #mac-bg-image").click(function(){
    rnbid.animate({ width: "0%"});
  });

$("#ryt-menu-nav").click(function(){
  var rnbidper = parseInt(rnbid.css("width"));
  var bdywth = parseInt(bdyid.css("width"));
  var t = Math.ceil(rnbidper/bdywth*100);
  if(t<=0)
  {
    rnbid.animate({ width: "17%"});
  }
  else {
    rnbid.animate({ width: "0%"});
  }
});
});
