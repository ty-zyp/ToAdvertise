// ==UserScript==
// @name      获取html页面table数据
// @match    /sf/ask/3921724061/*
// @match    *://*.fz0752.com/*
// @grant    GM_registerMenuCommand
// ==/UserScript==

/*-- GM_registerMenuCommand (menuName, callbackFunction, accessKey)
*/
GM_registerMenuCommand ("导出table数据", toExcel, "H");

function base64(content) {
  return window.btoa(unescape(encodeURIComponent(content)));
}
var format = function (s, c) {
    return s.replace(/{(\w+)}/g,
        function (m, p) {
            return c[p];
        });
}
    //导出html表格为 excel 文件
function toExcel() {
  var excelContent = $("#data").html();
  var excelFile = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:x='urn:schemas-microsoft-com:office:excel' xmlns='http://www.w3.org/TR/REC-html40'>";
  excelFile += "<head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head>";
    excelFile += "<body><table width='50%'  border='1'>";
    excelFile += excelContent;
    excelFile += "</table></body>";
    excelFile += "</html>";
        //定义excel 的sheet名称
    var ctx = {worksheet: "table数据"};
    var link = "data:application/vnd.ms-excel;base64," + base64(format(excelFile, ctx));
    var a = document.createElement("a");
        //定义excel 的文件名称
    var fileName ="table数据_"+$("#skrName").val();
    a.download = fileName+".xls";
    a.href = link;
    a.click();
}