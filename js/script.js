$(function () {
  "usestrict";

  function bar() {
  var bar = new ProgressBar.Line(container, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#999',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });
  bar.animate(1.0);  // Number from 0.0 to 1.0
}


  const $win = $(window),
    $header = $("#header");

    
    //ローダー
    //読み込みが完了したら実行
// $(window).on('load',function () {
//   endLoading();
// });

// //10秒経過した段階で、上記の処理を上書き、強制終了
// setTimeout('endLoading()', 8000);

// function endLoading(){
//   // 1秒かけてロゴを非表示にし、その後0.8秒かけて背景を非表示にする
//   $('.js-loading img').fadeOut(800, function(){
//     $('.js-loading').fadeOut(600);
//   });
// }



  

  


  //ハンバーガーボタン、メニュー
  $('.burger-btn').on('click', function() {
    $('.burger-btn__bar').toggleClass('bar-active');
    $('.g-nav').toggleClass('m-active');
    $('.g-nav__link').toggleClass('link-active');

});
$win.resize(function() {
    if ($win.width() > 1199) {
        $('.g-nav').removeClass('m-active');
        $('.burger-btn__bar').removeClass('bar-active');
    }
});



//スムーススクロール

  // $('a[href^="#"]').click(function () {
  //   let adjust = -100;
  //   let speed = 500;
  //   let href = $(this).attr("href");
  //   let target = $(href == "#" || href == "" ? "html" : href);
  //   let position = target.offset().top + adjust;
  //   $("html, body").animate({ scrollTop: position }, speed, "swing");
  //   return false;
  // });

  


  

  // $('.mask').addClass('mask-up');



barba.init({
  
  views: [{
    namespace: 'common',
    beforeEnter() {
      // update the menu based on user navigation
      menu.update();
    },
    afterEnter(data) {
      bar();
    },
    
  },{
    namespace: 'home',
    afterEnter(data) {
      const hash = data.next.url.hash;
      document.getElementById(hash).scrollIntoView();
    },
   
  }
],

transitions: [
  {
    name: 'home',
    to: { namespace: ['common'] },
    leave() {
      const tl = gsap.timeline();
      return tl.to(" .section__img-wrap", {
        width: 60 + '%',
       height: 100 + 'vh',
       right: 0,
       x: 0,
       y: 0,
       duration: 0.5, 
       ease: "cublic.inOut"  
     }).to(" .main-bg",{
      background: '#080707',
      duration: 0.8, 
      ease: "cublic.inOut"  
     },'-0.1');
    },
    enter() {
      const tl = gsap.timeline();
      tl.fromTo(".go-back",1,{
        x: -200,
      },{
       x: 3 * '%',
       ease: "cublic.inOut"
      },'-0.3');
    }
  


  }, {
    name: 'about',
    to: { namespace: ['home'] },
    leave() { 
      const tl = gsap.timeline();    
      return tl.to(".common-hero .section__img-wrap", {
       width: 53 + '%',
       height: 70 + '%',
       right: 50 + '%',
       top: 50 + '%',
      x: 80 + '%',
      y: -50 + '%',
       duration: 0.8, 
       ease: "cublic.inOut"  
     }).to(".go-back", {
     x: -200,
      duration: 1, 
      ease: "cublic.inOut"  
    },'-0.01');
   },
 
  }
],
 
 
});//init









});
