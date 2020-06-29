
// To open teminal window
$(function(){
    $('.dcimg').on('click', (e)=>{
        // var dcimg_id = $(this).prop('class').toString()
        // console.log(dcimg_id)
        // $.ajax({
        //     url: '/explorer',
        //     method: 'PUT',
        //     contentType: 'application/json',
        //     success: function(res){
        //         // if(dcimg_id == 'abo-doc'){
        //             console.log('sucess')
        //             // let abt = '<%- include("window/test.ejs") %>'
        //             // $('#explorer-data').html(abt)
        //             var txt3 = document.createElement("div");
        //             txt3.innerHTML = '<%- include("window/test.ejs") %>'; 
        //             $('#explorer-data').append(txt3)
        //         // }
        //     }
        // })
        $.get('/explorer', function(data){
            console.log(typeof(data.d));
            $('#explorer-data').load('/media/tyagi/Imp/Dev/Macfolio/Macfolio2.0/api/test.html')
          });
          
    })
})


// var opnwinid = $("#opend-window");
// $(".dcimg").click(function(){  
//   var dcimgvar = $(this).prop('id').toString();
//   $('')
//   var t = $(".opnwin"+dcimgvar);
//   var tt = t.prop('class').toString();

//   // if Resume clicked
//   if(tt == "wind-con wind-conn opnwin13 ui-draggable ui-draggable-handle ui-resizable"){
//     t.toggle().css({ "width":'50%', "height": '90.8%', "top": '0%', "left": '25%' });
//   }
//   else{
//     //window show hide
//     t.toggle().css({ "width":'60%', "height": '70%', "top": '15%', "left": '20%' });
//   }

//   // Cls, mini
//   $(".closetab, .minimztab").click(function(){
//     $(".docker-container").css({ "height": "7.5%"})
//     .promise().done(function(){
//       $(".doc-demo").css({"border-top": "1px solid #424242"});
//     });

//     var clsminid = $(this).prop('class').toString();
//     var clsminno = clsminid.substring(clsminid.length-2, clsminid.length);
//     var clsminwin = ".opnwin"+clsminno;
//     $(clsminwin).hide().css({ "width":'0%', "height": '0%', "top": '45%', "left": '45%' });
//   });


//   //tabsize
//   $(".tabsize").click(function(){
//     var twdth = parseInt(t.css("width"));
//     var opnwinwdth = parseInt(opnwinid.css("width"));
//     var tem = twdth/opnwinwdth*100;
//     if(tem <= 99){
//       $(t).css({
//         "width": "100%",
//         "height": "100%",
//         "top": "0%",
//         "left": "0%",
//       });
//       $(".dc-lower ul li").css({"border-top": "none"});
//       $(".docker-container").css({ "height": "0%"});
//       }
//       else{
//         $(t).css({
//           "width": "60%",
//           "height": "70%",
//           "top": "15%",
//           "left": "20%"
//         });
//         $(".dc-lower ul li").delay(3000).css({"border-top": "1px solid #424242"});
//         $(".docker-container").css({ "height": "7.5%"});
//       }
//     });
// })