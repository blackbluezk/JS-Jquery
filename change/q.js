$(document).ready(function () {
    $('#hello').click(function () {
        $("#clickme").css("background", "red");
    });

    $('#clickme').fadeToggle(4000);
});
