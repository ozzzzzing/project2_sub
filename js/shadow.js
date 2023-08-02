var hot_positionW=0;
var hot_positionH=0;
var hot_positionX=0;
$(window).load(function(){
    hot_positionW = $(".detail_3_strength .ul").innerWidth();
    hot_positionH = $(".detail_3_strength .ul").innerHeight();
    // hot_positionX = $(".detail_3_strength .ul").offset().left+10;
    hot_positionX = document.querySelector(".detail_3_strength .ul").offsetLeft+10;
    $(".bg_box").innerWidth(hot_positionW);
    $(".bg_box").innerHeight(hot_positionH);
    $(".bg_box").css("left",hot_positionX+"px");
    $(".detail_3_strength").innerHeight(hot_positionH+12);
});
$(window).resize(function(){
    hot_positionW = $(".detail_3_strength .ul").innerWidth();
    hot_positionH = $(".detail_3_strength .ul").innerHeight();
    // hot_positionX = $(".detail_3_strength .ul").offset().left+10;
    hot_positionX = document.querySelector(".detail_3_strength .ul").offsetLeft+10;
    $(".bg_box").innerWidth(hot_positionW);
    $(".bg_box").innerHeight(hot_positionH);
    $(".bg_box").css("left",hot_positionX+"px");
    $(".detail_3_strength").innerHeight(hot_positionH+12);
});