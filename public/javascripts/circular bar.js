

  var cvs1 = $('.canvass1');
  var cvs2 = $('.canvass2');
  var cvs3 = $('.canvass3');
  var cvs4 = $('.canvass4');
  var cvs5 = $('.canvass5');
  var cvs6 = $('.canvass6');
  var cvs7 = $('.canvass7');
  var cvs8 = $('.canvass8');
  var cvs9 = $('.canvass9');
  var cvsar = [cvs1, cvs2, cvs3, cvs4,cvs5, cvs6, cvs7, cvs8, cvs9];

  var k=0;
  function drwcircle(clr, ctx){

  ctx.drawArc({
  strokeStyle: clr,
  strokeWidth: 19,
  x: 160, y: 160,
  radius: 140,
  start: 0, end: (k+0)
  });
  k+=1;

  if( k>=300){
    clearTimeout(time0);
    clearTimeout(time1);
    clearTimeout(time2);
    clearTimeout(time3);
    clearTimeout(time4);
    clearTimeout(time5);
    clearTimeout(time6);
    clearTimeout(time7);
    clearTimeout(time8);
  }
}
var i;
for( i=0; i<=9; i++){
  switch (i) {
    case 0:
    var time0 = setInterval(drwcircle, 100, "blue", cvsar[0]);
      break;
    case 1:
    var time1 = setInterval(drwcircle, 100, "red", cvsar[1]);
      break;
    case 2:
    var time2 = setInterval(drwcircle, 100, "green", cvsar[2]);
      break;
    case 3:
    var time3 = setInterval(drwcircle, 100, "yellow", cvsar[3]);
      break;
    case 4:
    var time4 = setInterval(drwcircle, 100, "#B40486", cvsar[4]);
      break;
    case 5:
    var time5 = setInterval(drwcircle, 100, "#FF8000", cvsar[5]);
      break;
    case 6:
    var time6 = setInterval(drwcircle, 100, "#00FFFF", cvsar[6]);
      break;
    case 7:
    var time7 = setInterval(drwcircle, 100, "#58FA58", cvsar[7]);
      break;
    case 8:
    var time8 = setInterval(drwcircle, 100, "blue", cvsar[8]);
      break;
  }
}
