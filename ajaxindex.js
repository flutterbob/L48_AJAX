/**
 * Created by yizheng on 2018/8/26.
 */
$(document).ready(function () {
    $("#btn1").on("click",function () {
        $.get("Server.php",{name:$("#namevalue").val()},function (data) {
            $("#result1").text(data);
        })
    });

    $("#btn2").on("click",function () {
        $.post("Server.php", {name: $("#namevalue").val()}, function (data) {
            $("#result2").text(data);
        })
    });
});