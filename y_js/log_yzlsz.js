function DrawLine()
{
  var can1 = document.getElementById('canvas1');
  var context1 = can1.getContext("2d");
  context1.beginPath();
  context1.moveTo(50,10);
  context1.lineTo(50,280);
  context1.moveTo(50,280);
  context1.lineTo(1280,280);
  context1.closePath();
  context1.stroke();
}

//判断是不是整数
function CheckIntNum() {
var val = $("#numBox").val();
var reg = /^[0-9]{0,4}$/;
  if (!reg.test(val)) {
      alert('不是整数');
      return;
      }
  alert('是整数');
}

function GetURLParm() {

}

//悬浮div
function ShowHideDiv() {
      $('.y_title').mouseover(function(e) {
         var txt = $(this).text();
        $("#hideDiv").text(txt);
        $("#hideDiv").css({ "position": "absolute", "top": e.pageY, "left": e.pageX}).show();
      });
      $('.y_title').mouseout(function() {
          $("#hideDiv").hide();
      })

}
