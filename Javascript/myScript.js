$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".top-nav").addClass("light-header");
    } else {
        $(".top-nav").removeClass("light-header");
    }
});
function myInfo(){
    document.getElementById("text").innerHTML ="By Business Analyst!";
}
function myMotto(){
    document.getElementById("motto").innerHTML ="With IT, We Rule";
}