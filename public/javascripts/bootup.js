function pageload(){
    var onldc = document.getElementById("onldc");
    var aftrload = document.getElementById("aftrload");
    aftrload.style.zIndex = "1";
    onldc.style.zIndex = "-1";
}

$(document).ready(function(){
    // if on Mobile
    $(function(){
       if(parseInt($("body").css("width")) < 700){
         window.alert("Kindly, visit on PC for responsive viewport.\nOr select 'Request Desktop Site' in your browser");
       }
     });
   
     // Chaining
   $(".upper-docker-conn").animate({top: '0'}, "slow");
   $(".docker-container").animate({bottom: '0'}, "fast",)
   .delay(2000).promise().done(dclwrbrdr);
   //   --> 
   function dclwrbrdr(){
   $(".doc-demo").css({"border-top": "1px solid #424242"})
   .promise().done(initiatedemo);
   }
   //   --> initiate docker hint and upper docker hint
   function initiatedemo(){
     $(".doc-demo").css("font-size", "0.7em"); //docker hint
     $("#res-hnt").fadeIn(500).css("display", "block") // resume hint
     .delay(2000).promise().done(rminitiatedemo);
   }
   //   --> finish demo
   function rminitiatedemo(){
     $("#res-hnt").delay(2000).css("display", "none");
     $(".doc-demo").css("font-size", "0em")
   }
})