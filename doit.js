//CWB-FCE97AC9-3ED8-4811-BA23-2C1229A1EA5F
// opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001
const apiurl ="https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-FCE97AC9-3ED8-4811-BA23-2C1229A1EA5F"

var data=[{"地區":"嘉義","天氣狀況":"涼爽"},
{"地區":"台中","天氣狀況":"炎熱"}
] ;
$(document).ready(function () {

    $("#dt").DataTable({
        "data":data,
        "columns":[{data:"地區"},{data:"天氣狀況"}]
    });
    // $.ajax({
    //     "url": 'data.json', //要抓哪個地方的資料
    //     "method": "GET", //使用什麼方式抓
    //     "success": function(res){
            
    //     }, //成功取得回傳時的事件
    //     "error": function(res){
    //         console.log("資料取得失敗 回去檢討檢討")
    //     } //失敗事件
    // });
    $(window).scroll(function(e){
        // console.log($(window).scrollTop());
        if ($(window).scrollTop()<=200)
            $("#pic").hide();
        else
            $("#pic").fadeIn(1000);
    });
    
});