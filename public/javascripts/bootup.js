function pageload(){
    var onldc = document.getElementById("onldc");
    var aftrload = document.getElementById("aftrload");
    aftrload.style.zIndex = "1";
    onldc.style.zIndex = "-1";
}

$(document).ready(function(){
    // if on Mobile
    $(function(){
       var bdy = $("body");
       var bdywdth = parseInt(bdy.css("width"));
       if(bdywdth<700){
         window.alert("Kindly, visit on PC for responsive viewport.\nOr select 'Request Desktop Site' in your browser");
       }
     });
   
     // Chaining
   $(".upper-docker-conn").animate({top: '0'}, "slow");
   $(".docker-container").animate({bottom: '0'}, "fast",)
   .delay(1000).promise().done(dclwrbrdr);
   //   -->
   function dclwrbrdr(){
   $(".dc-lower ul li").css({"border-top": "1px solid #424242"})
   .promise().done(initiatedemo);
   }
   //   -->
   function initiatedemo(){
     $(".doc-demo").css("font-size", "0.7em");
     $("#res-hnt").fadeIn(500).css("display", "block")
     .delay(2000).promise().done(rminitiatedemo);
   }
   //   -->
   function rminitiatedemo(){
     $("#res-hnt").delay(2000).css("display", "none");
     $(".doc-demo").css("font-size", "0em")
     .delay(500).promise().done(opnabtwin);
   }
   // About window OPENED
   function opnabtwin() {
     setTimeout(wmanager('01'),0);
   }
   })