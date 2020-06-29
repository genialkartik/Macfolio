

// Resist Zoom in and Zoom out
document.body.addEventListener("wheel", e=>{
    if(e.ctrlKey)
      event.preventDefault();//prevent zoom
});


$(document).ready(function(){
  // Drag and Resize
  $( function() {
    $( ".wind-con").draggable();
    $( ".wind-con").resizable();
  });
    // hide Window Explorer
    // $(".wind-con").hide();
})