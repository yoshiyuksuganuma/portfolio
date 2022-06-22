$(function () {
  "usestrict";

    // $('a[href^="#"]').click(function () {
    //   let adjust = -100;
    //   let speed = 500;
    //   let href = $(this).attr("href");
    //   let target = $(href == "#" || href == "" ? "html" : href);
    //   let position = target.offset().top + adjust;
    //   $("html, body").animate({ scrollTop: position }, speed, "swing");
    //   return false;
    // });

  const $win = $(window),
  $header = $("#header");

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
    bar3.setText(Math.round(bar3.value() * 100) + 'f %');
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






function switchNav() {
 
   //ナビゲーションのカレント処理
   let set = 1000;//ウインドウ上部からどれぐらいの位置で変化させるか
   let boxTop = new Array;
   let current = -1;

   console.log(set);
   //各要素の位置
   //position-nowは場所を取得したい対象の要素に付ける
   $('.position-now').each(function (i) {
     boxTop[i] = $(this).offset().top;
   });
   //最初の要素にclass="positiion-now"をつける
   changeBox(0);
   //スクロールした時の処理
   $('.section__container').scroll(function () {
     scrollPosition = $('.section__container').scrollTop();
     for (let i = boxTop.length - 1; i >= 0; i--) {
       if ($('.section__container').scrollTop() > boxTop[i] - set) {
         changeBox(i);
         break;
       }
     };
   });
   
   //ナビの処理
   function changeBox(secNum) {
     if (secNum != current) {
       current = secNum;
       secNum2 = secNum + 1;//以下にクラス付与したい要素名と付与したいクラス名
       $('.ss-nav i').removeClass('link-current');
       $('.hero__tit').removeClass('hero__tit-efe');
       $('.hero .section__copy-inner').removeClass('hero__copy-efe');
       $('.works .section__copy-inner').removeClass('hero__copy-efe');
       $('.about .section__copy-inner').removeClass('hero__copy-efe');
       $('.contact .section__copy-inner').removeClass('hero__copy-efe');
       $('.hero__tit').removeClass('hero__tit-efe');
       $('.hero__moon').removeClass('hero__moon-efe');
       $('.works .section__img-cover').removeClass('img-cover-efe');
       $('.works .section__img-cover:eq(2)').removeClass('img-cover-efe');
       $('.about .section__img-cover').removeClass('img-cover-efe');
       $('.contact .section__img-cover').removeClass('img-cover-efe');

 
       //位置によって個別に処理をしたい場合
       if (current == 0) {
         $('#hero-js').addClass('link-current');
         $('.hero .section__copy-inner').addClass('hero__copy-efe');
         $('.hero__tit').addClass('hero__tit-efe');
         $('.hero__moon').addClass('hero__moon-efe');
       
         // 現在地がsection1の場合の処理
       } else if (current == 1) {
         $('#works-js').addClass('link-current');
         $('.works .section__copy-inner').addClass('hero__copy-efe');
         $('.works .section__img-cover').addClass('img-cover-efe');
         $('.works .section__img-cover:eq(2)').addClass('img-cover-efe');

         // 現在地がsection2の場合の処理
       } else if (current == 2) {
         // 現在地がsection3の場合の処理
         $('.about .section__copy-inner').addClass('hero__copy-efe');
       $('.about .section__img-cover').addClass('img-cover-efe');

         $('#about-js').addClass('link-current');
       }
       else if (current == 3) {
         // 現在地がsection4の場合の処理
         $('#contact-js').addClass('link-current');
       $('.contact .section__img-cover').addClass('img-cover-efe');
         $('.contact .section__copy-inner').addClass('hero__copy-efe');

       }
      
 
     }
   };
 
  };





 function scrollDo() {
  
  $('.works-page').on('scroll',function(){
    let scrollTop = $(".works-page").scrollTop(); // スクロール上部の位置
  let areaTop = $("#scroll-end").offset().top; // 対象エリアの上部の位置
  let areaBottom = areaTop + $("#scroll-end").innerHeight(); // 対象エリアの下部の位置
    if (scrollTop > areaTop + areaBottom + 800) {
   $('.scrollbar--works').addClass('is-hide');
   $('.footer-works').addClass('is-show');

  }  else {
   
    $('.scrollbar--works').removeClass('is-hide');
    $('.footer-works').removeClass('is-show');
  }
   
  });
 }

 



  


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

$('.g-nav__link').on('click',function(){
  $('.g-nav').removeClass('m-active');
  $('.burger-btn__bar').removeClass('bar-active');
  $('.g-nav__link').removeClass('link-active');


});




  

  $('.mask').addClass('mask-up');

   
    



barba.init({
  
  views: [{
    namespace: 'common',
    beforeEnter() {
      
  
      // update the menu based on user navigation
    },
    afterLeave(data) {
      switchNav();

      const hash = data.next.url.hash;
      document.getElementById(hash).scrollIntoView();
    },
    afterEnter(data) {
      const pathName = location.pathname;
      if(pathName === '/about.html') {
      bar();
      }
      if(pathName === '/works.html')  {
        scrollDo();
        
      }
      switchNav();

      const hash = data.next.url.hash;
      document.getElementById(hash).scrollIntoView();
    },
    
  },{
    namespace: 'home',
    afterEnter(data) {
      switchNav();

      const hash = data.next.url.hash;
      document.getElementById(hash).scrollIntoView();

    },
    beforeEnter(data) {
      switchNav();

      const hash = data.next.url.hash;
      document.getElementById(hash).scrollIntoView();

    },
    enter(data) {
      switchNav();

      const hash = data.next.url.hash;
      document.getElementById(hash).scrollIntoView();
    }
   
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
       duration: 0.6, 
       ease: "cublic.inOut"  
     },'same').to(" .main-bg",{
      background: '#080707',
      duration: 0.9, 
      ease: "cublic.inOut"  
     },'same').to(".ss-nav",{
      x: -300,
      duration: 0.9,
      ease: "cublic.inOUt"
     },'same')
    },

    enter() {
      gsap.fromTo(".go-back",{
        left: -500 + 'px'
      },{
       left: 3 + '%',
       duration: 0.3,
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
       duration: 0.6, 
       ease: "sine.inOut"  
     },'same').to(".section__copy-inner-works",{
       x: -500,
      duration: 0.8, 
      ease: "cublic.inOut"  
     },'same').to(".go-back", {
       left: -500 + 'px',
      duration: 0.6, 
      ease: "cublic.inOut"  
    },'same').to(".common-hero", {
      background: 'linear-gradient(to bottom, #072142, #061c37, #07182b, #061220, #020b16)',
       duration: 1, 
       ease: "cublic.inOut"  
     },'same');
   },

   enter() {

    const tl = gsap.timeline();    
    tl.to(".section__copy-inner-works",{
       x: -500,
      duration: 0.8, 
      ease: "cublic.inOut"  
     },'same').to(".go-back", {
       left: -500 + 'px',
      duration: 0.6, 
      ease: "cublic.inOut"  
    },'same');
    tl.fromTo(".ss-nav",{
      x: -200,
    },{
     x: 0,
     duration: 0.5,
     ease: "cublic.inOut"
    },'-0.2')
   }
 
  }
],
 
 
});//init








});
