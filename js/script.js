$(function () {
  "usestrict";


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



  //fullpage
    
  function fullPage() {
    $('#fullpage').fullpage({
      anchors: ['top', 'works', 'about', 'contact'],
        navigation: true,
        navigationPosition: 'left',
        scrollingSpeed: 1500,
        scrollOverflow: true,
        onLeave: function(index, nextIndex, direction){
			if(index == 1 && direction =='down'){
            $('.hero__moon').addClass('moon-efe');
            $('.hero .hero__tit').addClass('hero-tit-efe');
            $('.hero .section__copy').addClass('hero-copy-efe');
            $('.hero .section__sub-copy').addClass('hero-sub-copy-efe');
            $('.hero .section__border').addClass('hero-border-efe');
            $('.scrollbar').addClass('scrollbar-efe');
			}
			if(index == 2 && direction =='up'){
                $('.hero__moon').removeClass('moon-efe');
                $('.hero__tit').removeClass('hero-tit-efe');
                $('.hero .section__copy').removeClass('hero-copy-efe');
            $('.hero .section__sub-copy').removeClass('hero-sub-copy-efe');
            $('.hero .section__border').removeClass('hero-border-efe');
            $('.scrollbar').removeClass('scrollbar-efe');

			}
			// else if(index == 2 && direction =='up')
			//セクション２を上にスクロールしたときに実行されます
		}
    });
  };

  fullPage();

  $('.mask').addClass('mask-up');


  


barba.init({
  
  views: [{
    namespace: 'about',
    beforeEnter() {
      $.fn.fullpage.destroy('all');

      // update the menu based on user navigation
      menu.update();
    },
    afterEnter() {

      // refresh the parallax based on new page content
      parallax.refresh();
    },
    enter(){
    
    }
  },{
    namespace: 'home',
    beforeEnter() {
      fullPage();
     
      // document.quertSelector(`#${hash}`).scrollIntoView()
     
     
    },
    afterEnter() {
       // do something before entering the `contact` namespace
     
    }
  }
],
 
  transitions: [{
     
       async leave(data) {
        const tl = gsap.timeline();

         return tl.to(".about .section__img-wrap", {
           width: 60 + '%',
          height: 100 + 'vh',
          right: 0,
          x: 0,
          y: 0,
          duration: 0.8, 
          ease: "sine.inOut"  
        }).to("#fp-nav", {
           x: -1000,
          duration: 1.2, // 
          ease: "sine.inOut"
        },'-0.2');//発動を0.2ms早める
        
        
      },
       
        
        
      
      
 
      
    
     

       
    }]//transitions
});






});
