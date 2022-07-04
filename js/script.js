$(function () {
  "usestrict";
  function parallax() {
 // パララックスのターゲット取得
 const target = document.getElementsByClassName('js-parallax');
  
 // パララックスを行うエリア
 const activeArea = document.getElementById('fullpage');
 // ウィンドウの中心の取得
 const xCenter = window.innerWidth / 2;
 const yCenter = window.innerHeight / 2;
 // パララックスで移動させる距離
 const parallaxVal = 16; //中心からマウスの距離の10分１移動

 // マウスがパララックスエリアに入った時のイベント
 activeArea.addEventListener('mousemove', (e) => {
   // マウスの座標を取得して 中心からの距離取得、 そこからpararaxValで距離を調整
   const x = (xCenter - e.pageX) / parallaxVal;
   const y = (yCenter - e.pageY) / parallaxVal;
   // パララックスさせる要素にstyleの指定
   for (var i = 0; i < target.length; i++) {
     target[i].style.transform = `translate(${x}px, ${y}px)`;
   }
   

    
 });
}

  function st() {
    $('.go-back').on('click',function(){
    $('body,html').animate({ scrollTop: 0 }, 120);
  });
  }

  const $win = $(window);


  if (window.performance) {
    if (performance.navigation.type === 1) {
      window.location.hash = '';
    }
  }

  
 

  function bar() {
    let animationFlag = false;

    $(window).scroll(function () {
      $('.skill__bl').each(function(){
        const targetPosition = $(this).offset().top;
        const windowHeight = $(window).height();
        const scroll = $(window).scrollTop();
        if (scroll > targetPosition - windowHeight ) {
          if(!animationFlag) {
            animationFlag = true;
    
  var bar = new ProgressBar.Line(container, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 2400,
    color: '#FFEA82',
    trailColor: '#fff',
    trailWidth: 4,
    svgStyle: {width: '100%', height: '100%'},
    text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: 'red',
      position: 'absolute',
      right: '0',
      top: '-30px',
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
  bar.animate(0.9);  // Number from 0.0 to 1.0
  var bar2 = new ProgressBar.Line(container2, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 2400,
    color: '#FFEA82',
    trailColor: '#fff',
    trailWidth: 4,
    svgStyle: {width: '100%', height: '100%'},
    text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: 'red',
      position: 'absolute',
      right: '0',
      top: '-30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, bar2) => {
    bar2.setText(Math.round(bar2.value() * 100) + ' %');
    }
  });
  bar2.animate(0.9);  // Number from 0.0 to 1.0
  var bar3 = new ProgressBar.Line(container3, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 2400,
    color: '#FFEA82',
    trailColor: '#fff',
    trailWidth: 4,
    svgStyle: {width: '100%', height: '100%'},
    text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#999',
      position: 'absolute',
      right: '0',
      top: '-30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, bar3) => {
    bar3.setText(Math.round(bar3.value() * 100) + '%');
    }
  });
  bar3.animate(0.75);  // Number from 0.0 to 1.0
  var bar4 = new ProgressBar.Line(container4, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 2400,
    color: '#FFEA82',
    trailColor: '#fff',
    trailWidth: 4,
    svgStyle: {width: '100%', height: '100%'},
    text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: 'orange',
      position: 'absolute',
      right: '0',
      top: '-30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, bar4) => {
    bar4.setText(Math.round(bar4.value() * 100) + ' %');
    }
  });
  bar4.animate(0.8);  // Number from 0.0 to 1.0
  var bar5 = new ProgressBar.Line(container5, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 2400,
    color: '#FFEA82',
    trailColor: '#fff',
    trailWidth: 4,
    svgStyle: {width: '100%', height: '100%'},
    text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#999',
      position: 'absolute',
      right: '0',
      top: '-30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, bar5) => {
    bar5.setText(Math.round(bar5.value() * 100) + ' %');
    }
  });
  bar5.animate(0.65);  // Number from 0.0 to 1.0
  var bar6 = new ProgressBar.Line(container6, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 2400,
    color: '#FFEA82',
    trailColor: '#fff',
    trailWidth: 4,
    svgStyle: {width: '100%', height: '100%'},
    text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: 'orange',
      position: 'absolute',
      right: '0',
      top: '-30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, bar6) => {
    bar6.setText(Math.round(bar6.value() * 100) + ' %');
    }
  });
  bar6.animate(0.8);  // Number from 0.0 to 1.0
  var bar7 = new ProgressBar.Line(container7, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 2400,
    color: '#FFEA82',
    trailColor: '#fff',
    trailWidth: 4,
    svgStyle: {width: '100%', height: '100%'},
    text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#999',
      position: 'absolute',
      right: '0',
      top: '-30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, bar7) => {
    bar7.setText(Math.round(bar7.value() * 100) + ' %');
    }
  });
  bar7.animate(0.7);  // Number from 0.0 to 1.0
  var bar8 = new ProgressBar.Line(container8, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 2400,
    color: '#FFEA82',
    trailColor: '#fff',
    trailWidth: 4,
    svgStyle: {width: '100%', height: '100%'},
    text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#999',
      position: 'absolute',
      right: '0',
      top: '-30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, bar8) => {
    bar8.setText(Math.round(bar8.value() * 100) + ' %');
    }
  });
  bar8.animate(0.55);  // Number from 0.0 to 1.0
  var bar9 = new ProgressBar.Line(container9, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 2400,
    color: '#FFEA82',
    trailColor: '#fff',
    trailWidth: 4,
    svgStyle: {width: '100%', height: '100%'},
    text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#999',
      position: 'absolute',
      right: '0',
      top: '-30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, bar9) => {
    bar9.setText(Math.round(bar9.value() * 100) + ' %');
    }
  });
  bar9.animate(0.45);  // Number from 0.0 to 1.0
  var bar10 = new ProgressBar.Line(container10, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 2400,
    color: '#FFEA82',
    trailColor: '#fff',
    trailWidth: 4,
    svgStyle: {width: '100%', height: '100%'},
    text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#999',
      position: 'absolute',
      right: '0',
      top: '-30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, bar10) => {
    bar10.setText(Math.round(bar10.value() * 100) + ' %');
    }
  });
  bar10.animate(0.45);  // Number from 0.0 to 1.0
}
        }
      });  
});
}





$(window).ready(function(){
  $('#hero-js').addClass('link-current');
  $('.hero .section__copy-inner').addClass('hero__copy-efe');
  $('.hero__tit').addClass('hero__tit-efe');
  $('.hero__moon').addClass('hero__moon-efe');
  return gsap.to("#fp-nav",{
    left: 0.7 + '%',
   duration: 0.5,
   ease: "cublic.inOut",
  });
});

$('#tocontact').click(function(){
  $('.contact .section__copy-inner').addClass('hero__copy-efe');
      $('.contact .section__img-cover').addClass('img-cover-efe');
});


function full() {
$('#fullpage').fullpage({
  anchors: ['top', 'works', 'about', 'contact'],
  navigation: true,
  navigationPosition: 'right',
  scrollingSpeed: 1000,
  animateAnchor: false,

  onLeave: function(index, nextIndex, direction){
     if(index == 1 && direction =='down'){
      $('#hero-js').removeClass('link-current');
      $('.hero .section__copy-inner').removeClass('hero__copy-efe');
      $('.hero__tit').removeClass('hero__tit-efe');
      $('.hero__moon').removeClass('hero__moon-efe');
      setTimeout(function() {

      $('.works .section__copy-inner').addClass('hero__copy-efe');
      $('.works .section__img-cover').addClass('img-cover-efe');
    
    },150);

    setTimeout(function() {
      $('.works .section__number').addClass('number-efe');

    },650);

    } else if(index == 2 && direction =='down') {
     

      setTimeout(function() {
        $('.works .section__copy-inner').removeClass('hero__copy-efe');
        $('.works .section__img-cover').removeClass('img-cover-efe');
       $('.works .section__number').removeClass('number-efe');
        },500);

        setTimeout(function() {
          $('.about .section__copy-inner').addClass('hero__copy-efe');
      $('.about .section__img-cover').addClass('img-cover-efe');
        },150);
      setTimeout(function() {
        $('.about .section__number').addClass('number-efe');

      },650);

    } else if(index == 2 && direction =='up') {
      $('#hero-js').addClass('link-current');
      $('.hero .section__copy-inner').addClass('hero__copy-efe');
      $('.hero__tit').addClass('hero__tit-efe');
      $('.hero__moon').addClass('hero__moon-efe');

      setTimeout(function() {
        $('.works .section__copy-inner').removeClass('hero__copy-efe');
        $('.works .section__img-cover').removeClass('img-cover-efe');
      $('.works .section__number').removeClass('number-efe');

        },500);

     
    } else if(index == 3 && direction =='down') {
      $('.contact .section__copy-inner').addClass('hero__copy-efe');
      $('.contact .section__img-cover').addClass('img-cover-efe');
      setTimeout(function() {
        $('.contact .section__number').addClass('number-efe');

      },650);
      if($win.innerWidth() > 769) {
       $('.footer').addClass('is-show');
       $('.scrollbar').hide();
      }
      
      setTimeout(function() {
      $('.about .section__copy-inner').removeClass('hero__copy-efe');
      $('.about .section__img-cover').removeClass('img-cover-efe');
      $('.about .section__number').removeClass('number-efe');

      },500);

    } else if(index == 3 && direction =='up') {
      setTimeout(function() {
        $('.about .section__copy-inner').removeClass('hero__copy-efe');
        $('.about .section__img-cover').removeClass('img-cover-efe');
      $('.about .section__number').removeClass('number-efe');

        },500);

        setTimeout(function() {
          $('.works .section__copy-inner').addClass('hero__copy-efe');
          $('.works .section__img-cover').addClass('img-cover-efe');

          },150);

          setTimeout(function() {
            $('.works .section__number').addClass('number-efe');
    
          },650);
     
    } else if(index == 4 && direction =='up') {
      setTimeout(function() {
        $('.footer').removeClass('is-show');
      if($win.innerWidth() > 769) {

        $('.scrollbar').show();
      }
        $('.contact .section__copy-inner').removeClass('hero__copy-efe');
        $('.contact .section__img-cover').removeClass('img-cover-efe');
      $('.contact .section__number').removeClass('number-efe');

        },500);
    
      setTimeout(function() {
      $('.about .section__copy-inner').addClass('hero__copy-efe');
      $('.about .section__img-cover').addClass('img-cover-efe');

      },150);
      setTimeout(function() {
        $('.about .section__number').addClass('number-efe');

      },650);
    }

    
    }

});
//ナビゲーションのaタグ無効化
    $('#fp-nav').on('click',function(){
      return false;
    });

}







 function scrollDo() {
  
  $('.page-top').on('scroll',function(){
    let scrollTop = $(".page-top").scrollTop(); // スクロール上部の位置
    let areaTop = $(".scroll-end").offset().top; // 対象エリアの上部の位置
    let areaBottom = areaTop + $(".scroll-end").innerHeight(); // 対象エリアの下部の位置
    if (scrollTop > areaTop + areaBottom + 800) {
   $('.scrollbar').addClass('is-hide');
   $('.footer').addClass('is-show');

  }  else {
   
    $('.scrollbar').removeClass('is-hide');
    $('.footer').removeClass('is-show');
  }
   
  });
 }

 



  


  //ハンバーガーボタン、メニュー
  $('.burger-btn').on('click', function() {
    
    if($('.g-nav').hasClass('m-active')) {
     $('.burger-btn__close-bar').fadeOut('fast');
     $('.g-nav__link').removeClass('link-active');

      setTimeout(function(){
      $('.g-nav').removeClass('m-active');
      $('.burger-btn__bg').removeClass('bg-efe');
      },250);

    } else {

      $('.burger-btn__close-bar').fadeIn('slow');
      $('.g-nav').addClass('m-active');
      $('.burger-btn__bg').addClass('bg-efe');

      setTimeout(function(){
      $('.g-nav__link').addClass('link-active');
      },300);

      }



    
});


$('.g-nav__link').on('click',function(){
  new Promise((resolve) => {
    //秒後に実行する処理
    setTimeout(() => {
  $('.g-nav__link').removeClass('link-active');
      //無事処理が終わったことを伝える
      resolve();
    }, 500);
  }).then(() => {
    setTimeout(() => {

    // 処理が無事終わったことを受けとって実行される処理
    $('.burger-btn__close-bar').fadeOut('fast');
    $('.g-nav').removeClass('m-active');
    $('.burger-btn__bg').removeClass('bg-efe');
  }, 300);
  });
 
   

});




  

  $('.mask').addClass('mask-up');


  
   
    



barba.init({
  
  views: [{
    namespace: 'common',
    beforeEnter() {
     $.fn.fullpage.destroy('all');

      
  
      // update the menu based on user navigation
    },
    leave(data) {
      
    },
     afterEnter(data) {
      
        st();
       　
      const pathName = location.pathname;
      if(pathName === '/about.html') {
       bar();
      }
      if(pathName === '/works.html')  {
        scrollDo();
        
      }
     

      
    },
    
  },{
    namespace: 'home',
    afterEnter(data) {
      
      full();
      parallax();
    
    
    },
    
  
   
  }
],

transitions: [
  {
    name: 'home',
    to: { namespace: ['common'] },
    leave() {
      if($win.innerWidth() >= 769) {
      const tl = gsap.timeline();
      return tl.to(" .section__img-wrap", {
       height: 100 + 'vh',
       width: 63 + 'vw',
      x: 0,
       duration: 0.6, 
       ease: "cublic.inOut"  
     },'same').to(" .main-bg",{
      background: '#080707',
      duration: 0.6, 
      ease: "cublic.inOut"  
     },'same').to(".section__number",{ //aho 
      y: 300,
      duration: 0.6,
      ease: "cublic.inOUt"
     },'same').to("#fp-nav",{
      x: -300,
      duration: 0.6,
      ease: "cublic.inOUt"
     },'same').to(".link-btn",{
      y: 300,
      duration: 0.6,
      ease: "cublic.inOUt"
     },'same').to("#js-parallaxArea", {
      opacity: 0,
       duration: 0.6, 
       ease: "cublic.inOut"  
     },'same');
    }
    if($win.innerWidth() <= 768) {
      const tl = gsap.timeline();
      return tl.to(" .section__img-wrap", {
      width: 100 + 'vw',
      height: 60 + 'vh',
      y: 0,
      margin: 0,
       duration: 0.6, 
       ease: "cublic.inOut"  
     },'same').to(" .main-bg",{
      background: '#080707',
      duration: 0.6, 
      ease: "cublic.inOut"  
     },'same').to(".section__number",{
      y: 300,
      duration: 0.6,
      ease: "cublic.inOUt"
     },'same').to("#fp-nav",{
      y: 200 ,
      duration: 0.6,
      ease: "cublic.inOUt"
     },'same').to(".link-btn",{
      y: 300,
      duration: 0.6,
      ease: "cublic.inOUt"
     },'same').to("#js-parallaxArea", {
      opacity: 0,
       duration: 0.6, 
       ease: "cublic.inOut"  
     },'same');

    }
    },

    // commonページへ入る前の処理
    beforeEnter() {
      gsap.fromTo(".go-back",{
        left: -200 + 'px',
        },  {
          left: 0.3 + '%', 
          duration: 0.2, 
          ease: "cublic.inOut"  
        });
      
    },

  }, {
    name: 'a',
    to: { namespace: ['home'] },
    
    leave() { 
      if($win.innerWidth() >= 769) {

      const tl = gsap.timeline();    
      return tl.to(".common-hero .section__img-wrap", {
       width: 50 + 'vw',
       height: 70 + '%',
      x: -17 + '%',
       duration: 0.4, 
       ease: "sine.inOut"  
     },'same').to(".go-back", {
       left: -200 + 'px',
      duration: 0.4, 
      ease: "cublic.inOut"  
    },'same').to(".section__copy-inner-common", { 
      x: -400,
     duration: 0.4, 
     ease: "cublic.inOut"  
   },'same').to(".common-hero", {
      background: 'linear-gradient(to bottom, #072142, #061c37, #07182b, #061220, #020b16)',
       duration: 0.4, 
       ease: "cublic.inOut"  
     },'same');
    }

    if($win.innerWidth() <= 768) {
      const tl = gsap.timeline();    
      return tl.to(".common-hero .section__img-wrap", {
       width: 80 + 'vw',
       height: 50 + 'vh',
       y: 10 + '%',
       x: -15 + '%',
       duration: 0.4, 
       ease: "sine.inOut"  
     },'same').to(".go-back", {
       left: -500 + 'px',
      duration: 0.4, 
      ease: "cublic.inOut"  
    },'same').to(".section__copy-inner-common", { //スマホも忘れず
      x: -400,
     duration: 0.4, 
     ease: "cublic.inOut"  
   },'same').to(".section-copy-inner", {
      opacity: 0,
      duration: 0.4, 
      ease: "cublic.inOut"  
    },'same').to(".common-hero", {
      background: 'linear-gradient(to bottom, #072142, #061c37, #07182b, #061220, #020b16)',
       duration: 0.4, 
       ease: "cublic.inOut"  
     },'same');
    }

    
    
   },

   afterEnter() {
    if($win.innerWidth() >= 769) {
      const tl = gsap.timeline();    
    tl.to("#fp-nav",{
      left: 0.7 + '%',
    },'same').fromTo(".pararaxArea",{
      opacity: 0,
      },{
      opacity: 1,
      duration: 1.2, 
       ease: "cublic.inOut"  
    },'same');
  }
  
  
    $('#hero-js').addClass('link-current');
    $('.hero .section__copy-inner').addClass('hero__copy-efe');
    $('.hero__tit').addClass('hero__tit-efe');
    $('.hero__moon').addClass('hero__moon-efe');

    $('.about .section__copy-inner').addClass('hero__copy-efe');
    $('.about .section__img-cover').addClass('img-cover-efe');
    $('.about .section__number').addClass('number-efe');
    $('.contact .section__copy-inner').addClass('hero__copy-efe');
    $('.contact .section__img-cover').addClass('img-cover-efe');
   
   }

   

 
  }
],
 
 
});//init








});
