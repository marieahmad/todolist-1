

$(document).ready(function(){
    $("button").click(function(){
        let text = $("input").val()
        if($("input").val().length === 0){
            alert("Please input something!")
        }
        else($("#add").append("<li>"+ text + "<img class='img' src='./asset/rubbish.png' width='30px'><hr></li>"))
        $("input"),val("")
    });
});


$(document).on('click', 'li', function(){
    $(this).toggleClass('strike').fadeOut()
})
