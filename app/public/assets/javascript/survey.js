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
        var q8 = $("#q8").val();
        var q9 = $("#q9").val();
        var q10 = $("#q10").val();

        var newFriend = {
            name: name,
            img: imgUrl,
            input: [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]
        }

        $.post("/api/submit", newFriend)
        .then(function(data) {
          console.log(data);
        });
    })
})