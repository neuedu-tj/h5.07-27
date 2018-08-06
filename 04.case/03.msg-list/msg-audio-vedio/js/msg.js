$(function(){

    setTimeout(function() {
        $(".audio-content").each(function(index , data){

            var t = new Date(0 , 0 , 0 , 0 ,0 , data.duration)
            $(this).next(".duration").html(t.getSeconds()+"''")
        })
    } , 100)

    $(".msg-audio").click(function(){

        $(this).children("audio")[0].play();

    })


})