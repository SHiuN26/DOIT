//CWB-FCE97AC9-3ED8-4811-BA23-2C1229A1EA5F
// opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001

$(document).ready(function () {
    $("#dt").DataTable({
        
    });
    $(window).scroll(function(e){
        // console.log($(window).scrollTop());
        if ($(window).scrollTop()<=200)
            $("#pic").hide();
        else
            $("#pic").fadeIn(1000);
    });
    // const corsurl= "https://cors-anywhere.herokuapp.com/"
    const apiurl ="https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-FCE97AC9-3ED8-4811-BA23-2C1229A1EA5F"
    // const apiurl="https://awiclass.monoame.com/api/command.php?type=get&name=tododata"
    $.ajax({
        url:apiurl,
        method:"GET",
        success:function(res){
            console.log(res);
            var data = res.records.location;
            var row,print;
        
            for (let i = 0; i < data.length; i++) {
                zzz=row=data[i];
                print += 
                    `<tr>
                        <td>${i + 1}</td>
                        <td>${row.locationName}</td>

                        <td>${row.weatherElement[0].time[0].parameter.parameterName}
                        溫度${row.weatherElement[2].time[0].parameter.parameterName}~
                            ${row.weatherElement[4].time[0].parameter.parameterName}℃</td>

                        <td>${row.weatherElement[0].time[1].parameter.parameterName}
                        溫度${row.weatherElement[2].time[1].parameter.parameterName}~
                            ${row.weatherElement[4].time[1].parameter.parameterName}℃</td>

                        <td>${row.weatherElement[0].time[2].parameter.parameterName}
                        溫度${row.weatherElement[2].time[2].parameter.parameterName}~
                            ${row.weatherElement[4].time[2].parameter.parameterName}℃</td>
                    </tr>`
                    ;
                    
            }
            $("tbody").html(print);
        },
        error:function(err){
            console.log(err)
        }
    });
    
    
});

