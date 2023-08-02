$(function(){
    $('.bxslider').bxSlider({
        mode: 'horizontal',
    //    auto:true,
    //    autoStart:true,
        speed: 30000,
    //    pause: 0,
    //     autoDelay: 0,
    //     autoDirection: 'next',
     //    autoplaySpeed: 1000,
        responsive: true,
        pager:false,
        loop:true,
        // touchEnabled: true,
      infiniteLoop:true,
      ticker: true,
// moveSlides: 1,     // 슬라이드 이동시 개수

 slideWidth: 300,   // 슬라이드 너비
      
minSlides: 2,      // 최소 노출 개수
      
maxSlides: 13,      // 최대 노출 개수
    });
  });


  $(function(){
    $('.detail_4_title02').bxSlider({
        mode: 'horizontal',
       auto:true,
       autoStart:true,
        // speed: 30000,
    //    pause: 0,
    //     autoDelay: 0,
    //     autoDirection: 'next',
     //    autoplaySpeed: 1000,
        responsive: true,
        pager:true,
        loop:true,
        // touchEnabled: true,
        controls:false,
      infiniteLoop:true,
    //   ticker: true,
moveSlides: 1,     // 슬라이드 이동시 개수

 slideWidth: 600,   // 슬라이드 너비
      
minSlides: 1,      // 최소 노출 개수
      
maxSlides: 2,      // 최대 노출 개수
    });
  });

  
  var film_roll = new FilmRoll({
    configure_load: function(){
        // <---pre-configure operations
        this.configureLoad(); // this refer to film_roll object
        // <---post-configure operations
    },
    container: '#film_roll',
    height: 400,
    pager:false,
  });




  $(".header_wrapper").hover(function(){
    $(this).stop().animate({height:"400px"}, 300); }, 
function(){ 
   $(this).stop().animate({height:"50px"}, 100); });


//         $(document).ready(function(){
// 	$(".sub_nav").hide();
// 	$(".main_nav > ul").click(function(){
// 		$(".sub_nav",this).slideToggle("fast");
// 	});
// });



// 토글메뉴 
$(function(){
//토글 메뉴 플러그인 실행
var toggle=$('.menu-trigger');
var menu=$('#nav_wrapper');
// var nav1=$('#nav');

$(toggle).on('click',function(e){
//이벤트 버블링(버튼을 감싸고 있는 wrapper에도 이벤트가 작동되는 현상)
e.preventDefault(); //preventDefault는 이벤트 버블링을 막기 위한 코드
menu.slideToggle(); //효과 메서드, slideUp(),slideDown() 효과 동시 적용
// nav1.slideToggle();
// $('#sub_menu1','#sub_menu2','#sub_menu3','#sub_menu4','#sub_menu5','#sub_menu6','#sub_menu7').css('display','none');
// $('#sub_menu1,#sub_menu2,#sub_menu3,#sub_menu4,#sub_menu5,#sub_menu6, #sub_menu7').slideUp();
// if($(window).width() >= 1200)
// {
//     menu.css('display','none')
   
// }
});




//토글 메뉴 플러그인 실행
var toggle1=$('.sub_li1');
var toggle2=$('.sub_li2');
var toggle3=$('.sub_li3');
var toggle4=$('.sub_li4');
var toggle5=$('.sub_li5');
var toggle6=$('.sub_li6');
var toggle7=$('.sub_li7');

var menu1=$('#sub_menu1');
var menu2=$('#sub_menu2');
var menu3=$('#sub_menu3');
var menu4=$('#sub_menu4');
var menu5=$('#sub_menu5');
var menu6=$('#sub_menu6');
var menu7=$('#sub_menu7');


$(function Allmaneup(){
if(menu1.css('display') == 'block')
menu1.slideToggle();
if(menu2.css('display') == 'block')
       menu2.slideToggle();
   if(menu3.css('display') == 'block')
       menu3.slideToggle();
   if(menu4.css('display') == 'block')
       menu4.slideToggle();
   if(menu5.css('display') == 'block')
       menu5.slideToggle();
   if(menu6.css('display') == 'block')
       menu6.slideToggle();
   if(menu7.css('display') == 'block')
       menu7.slideToggle();
});


$(toggle1).on('click',function(e){
   //이벤트 버블링(버튼을 감싸고 있는 wrapper에도 이벤트가 작동되는 현상)
  
   $('.sub_li1 a').css('color','white');
   $('.sub_li1 ').css('background-color','#2F4E8B');
   /*
   console.log("~1~"+menu1.css('display'));
   console.log("~2~"+menu2.css('display'));
   console.log("~3~"+menu3.css('display'));
   console.log("~4~"+menu4.css('display'));
   console.log("~5~"+menu5.css('display'));
   console.log("~6~"+menu6.css('display'));
   console.log("~7~"+menu7.css('display'));
   */
   $('.sub_li2 a').css('color','black');
   $('.sub_li2 ').css('background-color','#f1f1f1');
   $('.sub_li3 a').css('color','black');
   $('.sub_li3 ').css('background-color','#f1f1f1');
   $('.sub_li4 a').css('color','black');
   $('.sub_li4 ').css('background-color','#f1f1f1');
   $('.sub_li5 a').css('color','black');
   $('.sub_li5 ').css('background-color','#f1f1f1');
   $('.sub_li6 a').css('color','black');
   $('.sub_li6 ').css('background-color','#f1f1f1');
   $('.sub_li7 a').css('color','black');
   $('.sub_li7 ').css('background-color','#f1f1f1');


   
   if(menu2.css('display') == 'block')
       menu2.slideToggle();
   if(menu3.css('display') == 'block')
       menu3.slideToggle();
   if(menu4.css('display') == 'block')
       menu4.slideToggle();
   if(menu5.css('display') == 'block')
       menu5.slideToggle();
   if(menu6.css('display') == 'block')
       menu6.slideToggle();
   if(menu7.css('display') == 'block')
       menu7.slideToggle();
   

   
   e.preventDefault(); //preventDefault는 이벤트 버블링을 막기 위한 코드
   menu1.slideToggle(); //효과 메서드, slideUp(),slideDown() 효과 동시 적용
});
$(toggle2).on('click',function(e){
   //이벤트 버블링(버튼을 감싸고 있는 wrapper에도 이벤트가 작동되는 현상)
   e.preventDefault(); //preventDefault는 이벤트 버블링을 막기 위한 코드
   menu2.slideToggle(); //효과 메서드, slideUp(),slideDown() 효과 동시 적용
   $('.sub_li2 a').css('color','white');
   $('.sub_li2 ').css('background-color','#2F4E8B');

   if(menu1.css('display') == 'block')
   menu1.slideToggle();
if(menu3.css('display') == 'block')
   menu3.slideToggle();
if(menu4.css('display') == 'block')
   menu4.slideToggle();
if(menu5.css('display') == 'block')
   menu5.slideToggle();
if(menu6.css('display') == 'block')
   menu6.slideToggle();
if(menu7.css('display') == 'block')
   menu7.slideToggle();

   $('.sub_li1 a').css('color','black');
   $('.sub_li1 ').css('background-color','#f1f1f1');
   $('.sub_li3 a').css('color','black');
   $('.sub_li3 ').css('background-color','#f1f1f1');
   $('.sub_li4 a').css('color','black');
   $('.sub_li4 ').css('background-color','#f1f1f1');
   $('.sub_li5 a').css('color','black');
   $('.sub_li5 ').css('background-color','#f1f1f1');
   $('.sub_li6 a').css('color','black');
   $('.sub_li6 ').css('background-color','#f1f1f1');
   $('.sub_li7 a').css('color','black');
   $('.sub_li7 ').css('background-color','#f1f1f1');
   
});
$(toggle3).on('click',function(e){
   //이벤트 버블링(버튼을 감싸고 있는 wrapper에도 이벤트가 작동되는 현상)
   e.preventDefault(); //preventDefault는 이벤트 버블링을 막기 위한 코드
   menu3.slideToggle(); //효과 메서드, slideUp(),slideDown() 효과 동시 적용

   if(menu1.css('display') == 'block')
   menu1.slideToggle();
if(menu2.css('display') == 'block')
   menu2.slideToggle();
if(menu4.css('display') == 'block')
   menu4.slideToggle();
if(menu5.css('display') == 'block')
   menu5.slideToggle();
if(menu6.css('display') == 'block')
   menu6.slideToggle();
if(menu7.css('display') == 'block')
   menu7.slideToggle();

   $('.sub_li3 a').css('color','white');
   $('.sub_li3 ').css('background-color','#2F4E8B');

   $('.sub_li1 a').css('color','black');
   $('.sub_li1 ').css('background-color','#f1f1f1');
   $('.sub_li2 a').css('color','black');
   $('.sub_li2 ').css('background-color','#f1f1f1');
   $('.sub_li4 a').css('color','black');
   $('.sub_li4 ').css('background-color','#f1f1f1');
   $('.sub_li5 a').css('color','black');
   $('.sub_li5 ').css('background-color','#f1f1f1');
   $('.sub_li6 a').css('color','black');
   $('.sub_li6 ').css('background-color','#f1f1f1');
   $('.sub_li7 a').css('color','black');
   $('.sub_li7 ').css('background-color','#f1f1f1');

});
$(toggle4).on('click',function(e){
   //이벤트 버블링(버튼을 감싸고 있는 wrapper에도 이벤트가 작동되는 현상)
   e.preventDefault(); //preventDefault는 이벤트 버블링을 막기 위한 코드
   menu4.slideToggle(); //효과 메서드, slideUp(),slideDown() 효과 동시 적용

   if(menu1.css('display') == 'block')
   menu1.slideToggle();
if(menu2.css('display') == 'block')
   menu2.slideToggle();
if(menu3.css('display') == 'block')
   menu3.slideToggle();
if(menu5.css('display') == 'block')
   menu5.slideToggle();
if(menu6.css('display') == 'block')
   menu6.slideToggle();
if(menu7.css('display') == 'block')
menu7.slideToggle();

           $('.sub_li4 a').css('color','white');
           $('.sub_li4 ').css('background-color','#2F4E8B');

           $('.sub_li1 a').css('color','black');
           $('.sub_li1 ').css('background-color','#f1f1f1');
           $('.sub_li2 a').css('color','black');
           $('.sub_li2 ').css('background-color','#f1f1f1');
           $('.sub_li3 a').css('color','black');
           $('.sub_li3 ').css('background-color','#f1f1f1');
           $('.sub_li5 a').css('color','black');
           $('.sub_li5 ').css('background-color','#f1f1f1');
           $('.sub_li6 a').css('color','black');
           $('.sub_li6 ').css('background-color','#f1f1f1');
           $('.sub_li7 a').css('color','black');
           $('.sub_li7 ').css('background-color','#f1f1f1');

});                



$(toggle5).on('click',function(e){
   //이벤트 버블링(버튼을 감싸고 있는 wrapper에도 이벤트가 작동되는 현상)
   e.preventDefault(); //preventDefault는 이벤트 버블링을 막기 위한 코드
   menu5.slideToggle(); //효과 메서드, slideUp(),slideDown() 효과 동시 적용

   if(menu1.css('display') == 'block')
   menu1.slideToggle();
if(menu2.css('display') == 'block')
   menu2.slideToggle();
if(menu3.css('display') == 'block')
   menu3.slideToggle();
if(menu4.css('display') == 'block')
   menu4.slideToggle();
if(menu6.css('display') == 'block')
   menu6.slideToggle();
if(menu7.css('display') == 'block')
menu7.slideToggle();

           $('.sub_li5 a').css('color','white');
           $('.sub_li5 ').css('background-color','#2F4E8B');

           $('.sub_li1 a').css('color','black');
           $('.sub_li1 ').css('background-color','#f1f1f1');
           $('.sub_li2 a').css('color','black');
           $('.sub_li2 ').css('background-color','#f1f1f1');
           $('.sub_li3 a').css('color','black');
           $('.sub_li3 ').css('background-color','#f1f1f1');
           $('.sub_li4 a').css('color','black');
           $('.sub_li4 ').css('background-color','#f1f1f1');
           $('.sub_li6 a').css('color','black');
           $('.sub_li6 ').css('background-color','#f1f1f1');
           $('.sub_li7 a').css('color','black');
           $('.sub_li7 ').css('background-color','#f1f1f1');
});


$(toggle6).on('click',function(e){
   //이벤트 버블링(버튼을 감싸고 있는 wrapper에도 이벤트가 작동되는 현상)
   e.preventDefault(); //preventDefault는 이벤트 버블링을 막기 위한 코드
   menu6.slideToggle(); //효과 메서드, slideUp(),slideDown() 효과 동시 적용

   if(menu1.css('display') == 'block')
   menu1.slideToggle();
if(menu2.css('display') == 'block')
   menu2.slideToggle();
if(menu3.css('display') == 'block')
   menu3.slideToggle();
if(menu4.css('display') == 'block')
   menu4.slideToggle();
if(menu5.css('display') == 'block')
   menu5.slideToggle();
if(menu7.css('display') == 'block')
   menu7.slideToggle();

   $('.sub_li6 a').css('color','white');
   $('.sub_li6 ').css('background-color','#2F4E8B');

   $('.sub_li1 a').css('color','black');
   $('.sub_li1 ').css('background-color','#f1f1f1');
   $('.sub_li2 a').css('color','black');
   $('.sub_li2 ').css('background-color','#f1f1f1');
   $('.sub_li3 a').css('color','black');
   $('.sub_li3 ').css('background-color','#f1f1f1');
   $('.sub_li4 a').css('color','black');
   $('.sub_li4 ').css('background-color','#f1f1f1');
   $('.sub_li5 a').css('color','black');
   $('.sub_li5 ').css('background-color','#f1f1f1');
   $('.sub_li7 a').css('color','black');
   $('.sub_li7 ').css('background-color','#f1f1f1');
});


$(toggle7).on('click',function(e){
   //이벤트 버블링(버튼을 감싸고 있는 wrapper에도 이벤트가 작동되는 현상)
   e.preventDefault(); //preventDefault는 이벤트 버블링을 막기 위한 코드
   menu7.slideToggle(); //효과 메서드, slideUp(),slideDown() 효과 동시 적용


   if(menu1.css('display') == 'block')
   menu1.slideToggle();
if(menu2.css('display') == 'block')
   menu2.slideToggle();
if(menu3.css('display') == 'block')
   menu3.slideToggle();
if(menu4.css('display') == 'block')
   menu4.slideToggle();
if(menu5.css('display') == 'block')
   menu5.slideToggle();
if(menu6.css('display') == 'block')
   menu6.slideToggle();
   
   
               $('.sub_li7 a').css('color','white');
               $('.sub_li7 ').css('background-color','#2F4E8B');
   
               $('.sub_li1 a').css('color','black');
               $('.sub_li1 ').css('background-color','#f1f1f1');
               $('.sub_li2 a').css('color','black');
               $('.sub_li2 ').css('background-color','#f1f1f1');
               $('.sub_li3 a').css('color','black');
               $('.sub_li3 ').css('background-color','#f1f1f1');
               $('.sub_li4 a').css('color','black');
               $('.sub_li4 ').css('background-color','#f1f1f1');
               $('.sub_li5 a').css('color','black');
               $('.sub_li5 ').css('background-color','#f1f1f1');
               $('.sub_li6 a').css('color','black');
               $('.sub_li6 ').css('background-color','#f1f1f1');
});

});
