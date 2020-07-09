function pageload(){
    var onldc = document.getElementById("onldc");
    var aftrload = document.getElementById("aftrload");
    onldc.style.zIndex = "-1";
}

// Resist Zoom in and Zoom out
document.body.addEventListener("wheel", e=>{
    if(e.ctrlKey)
      event.preventDefault();//prevent zoom
});