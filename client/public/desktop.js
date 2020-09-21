function pageload() {
  var onldc = document.getElementById("onldc");
  onldc.style.zIndex = "-1";
}

// Resist Zoom in and Zoom out
document.body.addEventListener("wheel", e => {
  if (e.ctrlKey)
    e.preventDefault();//prevent zoom
});

$(document).ready(function () {

  // if on Mobile
  $(function () {
    var bdy = $("body");
    var bdywdth = parseInt(bdy.css("width"));
    if (bdywdth < 700) {
      window.alert("Kindly, visit on PC for responsive viewport.\nOr select 'Request Desktop Site' in your browser");
    }
  })
})