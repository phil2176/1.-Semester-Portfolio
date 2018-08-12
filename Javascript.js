$(window).on("load",startOp);

function startOp (){

    console.log("klar");
    fadeIn();
}


function fadeIn() {

    $("#fadeInAni").removeClass("animationStart");
    $("#fadeInAni").addClass("animationEnd");


}
