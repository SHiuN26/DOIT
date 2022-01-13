//CWB-FCE97AC9-3ED8-4811-BA23-2C1229A1EA5F
// opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001
const apiurl ="https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-FCE97AC9-3ED8-4811-BA23-2C1229A1EA5F"

// var data=[{"地區":"嘉義","天氣狀況":"涼爽"},
// {"地區":"台中","天氣狀況":"炎熱"}
// ] ;
$(document).ready(function () {


    $.ajax({
        "url": apiurl, //要抓哪個地方的資料
        "method": "GET", //使用什麼方式抓
        "success": function(res){
            console.log(res),
            res.records.location.forEach(element => {
                var name =element.locationName//地區名稱
                var one =element.weatherElement[0].time[0].parameter.parameterName//第一時段天氣情況
                var oneMint =element.weatherElement[2].time[0].parameter.parameterName//第一時段低溫
                var oneMaxt =element.weatherElement[4].time[0].parameter.parameterName//第一時段高溫

                var two =element.weatherElement[0].time[1].parameter.parameterName //第二時段天氣情況
                var twoMint =element.weatherElement[2].time[1].parameter.parameterName//第二時段低溫
                var twoMaxt =element.weatherElement[4].time[1].parameter.parameterName//第二時段高溫

                var three =element.weatherElement[0].time[2].parameter.parameterName//第三時段天氣情況
                var threeMint =element.weatherElement[2].time[2].parameter.parameterName//第三時段低溫
                var threeMaxt =element.weatherElement[4].time[2].parameter.parameterName//第三時段高溫
                console.log(name,one,oneMint,oneMaxt,two,twoMint,twoMaxt,three,threeMint,threeMaxt); 
            });
            
            // $("#dt").DataTable({
            //     "data":res,
            //     "columns":[{data:"res.records.location.lacotionName",title:"地區"},{data:"res.records.location.weatherElement.time.parameter.parameterName",title:"天氣狀況"}]
            // });
        }, //成功取得回傳時的事件
        "error": function(res){
            console.log("資料取得失敗 回去檢討檢討")
        } //失敗事件
    });
    $(window).scroll(function(e){
        // console.log($(window).scrollTop());
        if ($(window).scrollTop()<=200)
            $("#pic").hide();
        else
            $("#pic").fadeIn(1000);
    });
    
});