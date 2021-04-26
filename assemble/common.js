// 截取地址栏参数
function QueryString (Param) {
  var BreakString = new RegExp("(^|&)" + Param + "=([^&]*)(&|$)")
  var GetUrl = window.location.search.substr(1).match(BreakString)
  if (GetUrl != null) {
    return unescape(GetUrl[2])
  } else {
    return null
  }
}
// 数字千分位转换
function reloadNum(num) {
  var num = num + '';
  var xiaoshu = '';
  var zhengshu = '';
  var a = num.split('.');
  if (a.length > 1) {
    xiaoshu = '.' + a[1];
  }
  var cishu = Math.ceil(a[0].length / 3);
  for (var i = 1; i <= cishu; i++) {
    zhengshu = a[0].substring(a[0].length - (3 * i), a[0].length - (3 * (i - 1))) + zhengshu;
    if (i != cishu) {
      zhengshu = ',' + zhengshu
    }
  }
  return zhengshu + xiaoshu
}

// 时钟
function GetSystemTime(id) {
  var weeks = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  var minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  var second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  var week = weeks[date.getDay()];
  var time = hour + ":" + minute + ":" + second;
  var riqi =  year + "-" + month + "-" + day + " (" + week + ")";

  $("#" + id).html(riqi + ' ' +time);
  // 定时器刷新当前系统时间
  setTimeout(function(){
    GetSystemTime();
  }, 1000);
}