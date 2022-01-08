//CWB-FCE97AC9-3ED8-4811-BA23-2C1229A1EA5F
// opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001

$(document).ready(function () {

    $(window).scroll(function(e){
        // console.log($(window).scrollTop());
        if ($(window).scrollTop()<=200)
            $("#pic").hide();
        else
            $("#pic").fadeIn(1000);
    });
    // const corsurl= "https://cors-anywhere.herokuapp.com/"
    const apiurl ="https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-FCE97AC9-3ED8-4811-BA23-2C1229A1EA5F"
    $.ajax({
        url:apiurl,
        method:"GET",
        success:function(res){console.log(res)},
        error:function(err){console.log(err)}
    });
});



