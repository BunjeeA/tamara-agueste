
function run(){
    document.getElementById("typewriter").style.visibility = "visible";
    var snd = new Audio("marias.mp3");
    snd.play()
    document.getElementById('button').style.display = "none";

}


$( "#header-plugin" ).load( "https://vivinantony.github.io/header-plugin/", function() {
	$("a.back-to-link").attr("href", "http://blog.thelittletechie.com/2015/03/love-heart-animation-using-css3.html#tlt")  
});

var love = setInterval(function() {
    var r_num = Math.floor(Math.random() * 60) + 1;
    var r_size = Math.floor(Math.random() * 80) + 10;
    var r_left = Math.floor(Math.random() * 100) + 1;
    var r_time = Math.floor(Math.random() * 10) + 5;

    $('.bg_heart').append("<div class='heart' style='width:" + (r_size + 3) + "px;height:" + (r_size + 3) + "px;left:" + (r_left + r_num) + "%;background:rgb(255, 143, 171);-webkit-animation:love " + (r_time - 1.5) + "s ease;-moz-animation:love " + (r_time - 1.5) + "s ease;-ms-animation:love " + (r_time - 1.5) + "s ease;animation:love " + (r_time - 1.5) + "s ease'></div>");
    $('.bg_heart').append("<div class='heart' style='width:" + r_size + "px;height:" + r_size + "px;left:" + r_left + "%;background:rgba(255, 175, 204);-webkit-animation:love " + r_time + "s ease;-moz-animation:love " + r_time + "s ease;-ms-animation:love " + r_time + "s ease;animation:love " + r_time + "s ease'></div>");
    $('.bg_heart').append("<div class='heart' style='width:" + (r_size + 5) + "px;height:" + (r_size + 5) + "px;left:" + (r_left - r_num) + "%;background:rgb(251, 111, 146);-webkit-animation:love " + (r_time + 2.5) + "s ease;-moz-animation:love " + (r_time + 2.5) + "s ease;-ms-animation:love " + (r_time + 2.5) + "s ease;animation:love " + (r_time + 2.5) + "s ease'></div>");
    $('.bg_heart').append("<div class='heart' style='width:" + (r_size - 2) + "px;height:" + (r_size - 2) + "px;left:" + (r_left + r_num) + "%;background:rgb(255, 200, 221);-webkit-animation:love " + (r_time + 5) + "s ease;-moz-animation:love " + (r_time + 5) + "s ease;-ms-animation:love " + (r_time + 5) + "s ease;animation:love " + (r_time + 5) + "s ease'></div>");

    $('.heart').each(function() {
        var top = $(this).css("top").replace(/[^-\d\.]/g, '');
        var width = $(this).css("width").replace(/[^-\d\.]/g, '');
        if (top <= -100 || width >= 150) {
            $(this).detach();
        }
    });
}, 500);


