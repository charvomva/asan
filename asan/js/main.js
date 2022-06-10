
/*
// #conWrap의 높이(세로길이) 구하긔

var footerTop = $('footer').offset().top; //  푸터의 위부터 거리
 var conWrapTop =$('#conWrap').offset().top; // conWrap  부터의 거리


var conWrapH = footerTop - conWrapTop;

$('#conWrap').css({height:conWrapH});

$(window).resize(function(){
    var footerTop =$('footer').offset().top;
    var conWrapTop=$('#conWrap').offset().top;
    var conWrapH = footerTop - conWrapTop;
    $('#conWrap').css({height:conWrapH});
})

 */

var elFooter = document.querySelector('footer');
//#conWrap의 높이(세로길이) 구하기 -footer-아래쪽 fix 사용 안함

var winH = $(window).height();  // 현재 열려져 있는 윈도우 높이 
var headerH = $('header').height(); // 헤더 높이 
var footerH = elFooter.offsetHeight;
// box-sizing:border-box를 적용시 padding border를 제외한 값이 나옴 

console.log(footerH);

var conWrapH = winH - ( headerH + footerH ); //#conWrap의 높이는 화면전체에서 헤더와 푸터 높이를 빼준 값

$('#conWrap').css({height:conWrapH})

$(window).resize(function(){
    var winH = $(window).height();
    var conWrapH = winH - ( headerH + footerH );
    $('#conWrap').css({height:conWrapH})
});


 //슬라이드 메뉴
var du = 400;
var open =0;

$('.lnb_btn').click(function(){

    if(open == 0){
    $('#lnb').animate({left:0}, du,'swing');
    $('#wrap').animate({left:274}, du,'swing');
    $('.cover').fadeIn(du);
    $(this).find('img').attr({'src':'img/bg_header_lnb_active.png', 'alt':'메뉴닫기'});
    open = '열림';
    } else {

            $('#lnb').animate({left:-274}, du,'swing');
            $('#wrap').animate({left:0}, du,'swing');
            $('.cover').fadeOut(du);
            $(this).find('img').attr({'src':'img/bg_header_lnb.png', 'alt':'메뉴열기'});
            open = 0;

}
});