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


function TestRe() {
    //var strValue = $('#reText').val();
    //$('#tTable').append("<tr><td>"+strValue+"</td></tr>");
    alert(/w/.test("rw"));
}



/*是否带有小数*/
function    isDecimal(strValue )  {
   var  objRegExp= /^\d+\.\d+$/;
   return  objRegExp.test(strValue);
}

/*校验是否中文名称组成 */
function ischina(str) {
    var reg=/^[\u4E00-\u9FA5]{2,4}$/;   /*定义验证表达式*/
    return reg.test(str);     /*进行验证*/
}

/*校验是否全由8位数字组成 */
function isStudentNo(str) {
    var reg=/^[0-9]{8}$/;   /*定义验证表达式*/
    return reg.test(str);     /*进行验证*/
}

/*校验电话码格式 */
function isTelCode(str) {
    var reg= /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
    return reg.test(str);
}

/*校验邮件地址是否合法 */
function IsEmail(str) {
    var reg=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+$/;
    return reg.test(str);
}
