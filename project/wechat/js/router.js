


$(function(){

    $("#title").load("../page/title/chat-title.html")
    $("#dynamic").load("../page/dynamic/chat-records.html")



    //切换
    $(".menu-item").click(function() {

        $("#dynamic").load($(this).data("page"))

    })


})