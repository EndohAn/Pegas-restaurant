

  AOS.init();


        window.addEventListener('scroll', function () {
           let scroll = document.querySelector('.pageup');
           scroll.classList.toggle('move', window.scrollY>500)
        })

        function scrollUp () {
                 window.scrollTo ({
                 top: 0,
                 behavior: "smooth"
                 })
        }




        gsap.from('.links',{duration:3,opacity:0})
        gsap.from('.link',{duration:2,opacity:0,stagger:1})
        gsap.from('.intro__img--1',{y:70,duration:10,ease:'power2',opacity:0,}) 
        gsap.from('.intro__img--2',{y:-70,opacity:0,ease:'power2',duration:10}) 
        gsap.from('.intro__txt', {x:-100,opacity:0,ease:'power4',duration:10})              
        gsap.from('.intro__title',{y:400, ease:'power4',duration:3,delay:1})

        const back=document.querySelector('#back');
        const next=document.querySelector('#next');
        const photos=['slider/pic1.jpg','slider/pic2.jpg','slider/pic3.jpg','slider/pic4.jpg','slider/pic5.jpg','slider/pic6.jpg','slider/pic7.jpg'];
        let i=0;
        next.addEventListener('click',()=>{
                i++;
                if(i>photos.length-1){
                        i=0;
                }
                document.querySelector('#picture').src=photos[i];
        })
        back.addEventListener('click',()=>{
                i--;
                if(i<0){
                        i=photos.length-1;
                }
                document.querySelector('#picture').src=photos[i];
        })


        const touchImg = document.querySelectorAll("#imgMenu");
        touchImg.forEach(function(item,index){
                item.addEventListener('mouseover',function(){
       
                if (index === 0) {
                        gsap.to(".oneMenu", {scale:1.15, duration:2})
                      }
                      if (index === 1) {
                        gsap.to(".twoMenu", {scale:1.15, duration:2})
                      }
                      if (index === 2) {
                        gsap.to(".threeMenu", {scale:1.15, duration:2})
                      }
                      if (index === 3) {
                        gsap.to(".fourMenu", {scale:1.15, duration:2})
                      }
                      if (index === 4) {
                        gsap.to(".fiveMenu", {scale:1.15, duration:2})
                      }
                      if (index === 5) {
                        gsap.to(".sixMenu", {scale:1.15, duration:2})
                      }                    
                     
                })
                item.addEventListener("mouseout", function() {
                        if (index === 0) {
                          gsap.to(".oneMenu", {scale:1, duration:2})
                        }
                        if (index === 1) {
                          gsap.to(".twoMenu", {scale:1, duration:2})
                        }
                        if (index === 2) {
                          gsap.to(".threeMenu", {scale:1, duration:2})
                        }
                        if (index === 3) {
                          gsap.to(".fourMenu", {scale:1, duration:2})
                        }
                        if (index === 4) {
                          gsap.to(".fiveMenu", {scale:1, duration:2})
                        }
                        if (index === 5) {
                          gsap.to(".sixMenu", {scale:1, duration:2})
                        }
                })
        })

        // тоже самое ,только написано по другому
        // const touchImg = document.querySelectorAll("#imgMenu");
        // touchImg.forEach(function(item,index){
        //         item.addEventListener('mouseover',start)
        //         function start(){
       
        //         if (index === 0) {
        //                 gsap.to(".oneMenu", {scale:1.15, duration:2})
        //               }
        //               if (index === 1) {
        //                 gsap.to(".twoMenu", {scale:1.15, duration:2})
        //               }
        //               if (index === 2) {
        //                 gsap.to(".threeMenu", {scale:1.15, duration:2})
        //               }
        //               if (index === 3) {
        //                 gsap.to(".fourMenu", {scale:1.15, duration:2})
        //               }
        //               if (index === 4) {
        //                 gsap.to(".fiveMenu", {scale:1.15, duration:2})
        //               }
        //               if (index === 5) {
        //                 gsap.to(".sixMenu", {scale:1.15, duration:2})
        //               }                    
                     
        //         }
        //         item.addEventListener("mouseout", startOne)
        //         function startOne(){
        //                 if (index === 0) {
        //                   gsap.to(".oneMenu", {scale:1, duration:2})
        //                 }
        //                 if (index === 1) {
        //                   gsap.to(".twoMenu", {scale:1, duration:2})
        //                 }
        //                 if (index === 2) {
        //                   gsap.to(".threeMenu", {scale:1, duration:2})
        //                 }
        //                 if (index === 3) {
        //                   gsap.to(".fourMenu", {scale:1, duration:2})
        //                 }
        //                 if (index === 4) {
        //                   gsap.to(".fiveMenu", {scale:1, duration:2})
        //                 }
        //                 if (index === 5) {
        //                   gsap.to(".sixMenu", {scale:1, duration:2})
        //                 }
        //         }
        // })

