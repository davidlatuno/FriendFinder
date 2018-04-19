$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var imgUrl = $("#img").val();
        var q1 = $("#q1").val();
        var q2 = $("#q2").val();
        var q3 = $("#q3").val();
        var q4 = $("#q4").val();
        var q5 = $("#q5").val();
        var q6 = $("#q6").val();
        var q7 = $("#q7").val();

        var newFriend = {
            name: name,
            img: imgUrl,
            input: [q1, q2, q3, q4, q5, q6, q7]
        }

        
    })
})