/**
 * 时间格式化 返回格式化的时间
 * @param date {object}  可选参数，要格式化的data对象，没有则为当前时间
 * @param fomat {string} 格式化字符串，例如：'YYYY年MM月DD日 hh时mm分ss秒 星期' 'YYYY/MM/DD week' (中文为星期，英文为week)
 * @return {string} 返回格式化的字符串
 *
 * 例子:
 * formatDate(new Date("january 01,2012"));
 * formatDate(new Date());
 * formatDate('YYYY年MM月DD日 hh时mm分ss秒 星期 YYYY-MM-DD week');
 * formatDate(new Date("january 01,2012"),'YYYY年MM月DD日 hh时mm分ss秒 星期 YYYY/MM/DD week');
 *
 * 格式：
 *    YYYY：4位年,如1993
 　　 *　　YY：2位年,如93
 　　 *　　M：月份,如1
 　　 *　　MM：月份,如01
 　　 *　　D：日期,如1
 　　 *　　DD：日期,如01
 　　 *　　h：小时
 　　 *　　hh：小时
 　　 *　　m：分钟
 　　 *　　mm：分钟
 　　 *　　s：秒钟
 　　 *　　ss：秒钟
 　　 *　　星期：星期，返回如 星期二
 　　 *　　周：返回如 周二
 　　 *　　week：英文星期全称，返回如 Saturday
 　　 *　　www：三位英文星期，返回如 Sat
 */
function formatDate(date, format) {
  if (arguments.length < 2 && !date.getTime) {
    format = date;
    date = new Date();
  }
  typeof format != 'string' && (format = 'YYYY年MM月DD日 hh时mm分ss秒');
  var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', '日', '一', '二', '三', '四', '五', '六'];
  return format.replace(/YYYY|YY|MM|M|DD|D|hh|h|mm|m|ss|s|星期|周|www|week/g, function (a) {
    switch (a) {
      case "YYYY":
        return date.getFullYear();
      case "YY":
        return (date.getFullYear() + "").slice(2);
      case "M":
        var month = date.getMonth() + 1;
        return month;
      case "MM":
        var month = date.getMonth() + 1;
        return month < 10 ? "0" + month : month;
      case "D":
        var day = date.getDate();
        return day;
      case "DD":
        var day = date.getDate();
        return day < 10 ? "0" + day : day;
      case "h":
        var hour = date.getHours();
        return hour < 10 ? "0" + hour : hour;
      case "hh":
        return date.getHours();
      case "m":
        var minute = date.getMinutes();
        return minute < 10 ? "0" + minute : minute;
      case "mm":
        return date.getMinutes();
      case "s":
        var second = date.getMinutes();
        return second < 10 ? "0" + second : second;
      case "ss":
        return date.getSeconds();
      case "星期":
        return "星期" + week[date.getDay() + 7];
      case "周":
        return "周" + week[date.getDay() + 7];
      case "week":
        return week[date.getDay()];
      case "www":
        return week[date.getDay()].slice(0, 3);
    }
  });

}

(function ($, document) {
//顶部搜索栏
  $('.fosun-search-input').bind('focus', function () {
    $('.fosun-input-info').hide();
  });

  $('.fosun-search-input').bind('focusout', function () {
    if ($('.fosun-search-input').val() == '') {
      $('.fosun-input-info').show();
    }
  });

})(jQuery, document);