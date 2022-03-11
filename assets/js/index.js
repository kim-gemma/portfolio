'use strict';

 //header click event
        document.querySelectorAll('a[href^="#"]').forEach(elem => {
            elem.addEventListener('click', e => {
                e.preventDefault();
                document.querySelector(elem.getAttribute('href')).scrollIntoView({
                    behavior : 'smooth'
                })
            })
        });
        
        //splite
        let splite2 = $(".wtext h3").text().split("").join("</span><span>");
        splite2 ="<span>" + splite2 + "</span>";
        $(".wtext h3").html(splite2);
        
        let splite3 = $(".atext h3").text().split("").join("</span><span>");
        splite3 ="<span>" + splite3 + "</span>";
        $(".atext h3").html(splite3);
        
        let splite4 = $(".mtext h3").text().split("").join("</span><span>");
        splite4 ="<span>" + splite4 + "</span>";
        $(".mtext h3").html(splite4);

        let splite5 = $(".contact_t h1").text().split("").join("</span><span>");
        splite5 ="<span>" + splite5 + "</span>";
        $(".contact_t h1").html(splite5);

        let splite6 = $(".jtext h3").text().split("").join("</span><span>");
        splite6 ="<span>" + splite6 + "</span>";
        $(".jtext h3").html(splite6);
        
        
        
        $(window).scroll(function(){

            let wScroll = $(window).scrollTop();
            let wOffset = $("#section1").offset().top;
            let wHeight = $(window).height();
            
            $(".wScroll").text(parseInt(wScroll));
            $(".wOffset").text(parseInt(wOffset));
            

            let offset1 = (wScroll - $("#section2").offset().top)
            let offset2 = (wScroll - $(".sec3").offset().top)
            
            //section2 animation

            if( $(window).scrollTop() > $(".sec2").offset().top - $(window).height()/2){
                let tl2 = new TimelineMax(); 
                tl2.staggerTo(".main_i1", 1, {opacity:1,x:0, ease: Back.easeOut.config(1.7)},0.09);
                tl2.staggerTo(".main_t1", 1, {opacity:1,y:0, ease: Back.easeOut.config(1.7)},0.09);
                tl2.staggerTo(".main_pt1", 1, {opacity:1,y:0, ease: Back.easeOut.config(1.7)},0.09);
                tl2.staggerTo(".main_i1", 1, {opacity:1,x:0, ease: Back.easeOut.config(1.7)},0.09);
                tl2.staggerTo(".main_t1", 1, {opacity:1,y:0, ease: Back.easeOut.config(1.7)},0.09);
                tl2.staggerTo(".main_pt1", 1, {opacity:1,y:0, ease: Back.easeOut.config(1.7)},0.09);
                tl2.staggerTo(".main_t3 .s1", 1, {opacity:1,y:0, ease: Back.easeOut.config(1.7)},0.09);
                tl2.staggerTo(".main_t3 .s2", 1, {opacity:1,y:0, ease: Back.easeOut.config(1.7)},0.09);
                tl2.staggerTo(".main_t3 .s3", 1, {opacity:1,y:0, ease: Back.easeOut.config(1.7)},0.09);
                tl2.staggerTo(".main_t3 .s4", 1, {opacity:1,y:0, ease: Back.easeOut.config(1.7)},0.09);

            }
            
            if( $(window).scrollTop() > $(".main2").offset().top - $(window).height()/2){
                let tl2 = new TimelineMax(); 
                tl2.staggerTo(".main_i2", 1, {opacity:1,x:0, ease: Back.easeOut.config(1.7)},0.09);
                tl2.staggerTo(".main_t2", 1, {opacity:1,y:0, ease: Back.easeOut.config(1.7)},0.09);
                tl2.staggerTo(".main_pt2", 1, {opacity:1,y:0, ease: Back.easeOut.config(1.7)},0.09);
            }
            
            //section3 animation
            $("#section3 .marquee_content .list-inline").css({"transform":"translateX("+ -offset2 *0.3+"px)"});
            $("#section3 .marquee_content .list-inline2").css({"transform":"translateX("+ offset2 *0.3+"px)"});
            $("#section3 .marquee_content .list-inline3").css({"transform":"translateX("+ -offset2 *0.3+"px)"});
            $("#section3 .marquee_content .list-inline4").css({"transform":"translateX("+ offset2 *0.3+"px)"});
           
            //section6 animation
            if( $(window).scrollTop() > $(".sec6").offset().top - $(window).height()/2){
                let tl2 = new TimelineMax(); 
                tl2.staggerTo(".wtext .t2", 0.8, {opacity:1,y:0, ease: Back.easeOut.config(1.7)},0.09);
                tl2.staggerTo(".wtext h3 span", 0.8, {opacity:1,y:0, ease: Back.easeOut.config(1.7)},0.09);
                tl2.staggerTo(".wtext p", 0.8, {opacity:1,y:0, ease: Back.easeOut.config(1.7)},0.09);   

          
            
            //section7 animation
            if( $(window).scrollTop() > $(".sec7").offset().top - $(window).height()/2){
                let tl2 = new TimelineMax(); 
                tl2.staggerTo(".atext .t3", 0.8, {opacity:1,y:0, ease: Back.easeOut.config(1.7)},0.09);
                tl2.staggerTo(".atext h3 span", 0.8, {opacity:1,y:0, ease: Back.easeOut.config(1.7)},0.09);
                tl2.staggerTo(".atext p", 0.8, {opacity:1,y:0, ease: Back.easeOut.config(1.7)},0.09);   
            }
            //section4 animation
            if( $(window).scrollTop() > $(".sec4").offset().top - $(window).height()/2){
                let tl2 = new TimelineMax(); 
                tl2.staggerTo(".mtext .t4", 0.8, {opacity:1,y:0, ease: Back.easeOut.config(1.7)},0.09);
                tl2.staggerTo(".mtext h3 span", 0.8, {opacity:1,y:0, ease: Back.easeOut.config(1.7)},0.09);
                tl2.staggerTo(".mtext p", 0.8, {opacity:1,y:0, ease: Back.easeOut.config(1.7)},0.09);   
            }      
            
            //section5 skillbar
            const $section7 = $('#section5');
            function skillBar(){
            $section6.find('.sec5 .box').each(function () {

            const $current = $(this);
            const $currentPercent = $current.find('.percentNum');
            const $targetData = $currentPercent.attr('data-percent');
            const $water = $current.find('.water');
            let now;

            $({ rate: 0 }).animate(
            { rate: $targetData },
            {
                duration: 2000,
                progress: function () {
                now = this.rate;
                $currentPercent.text(Math.ceil(now));
                $water.css({"transform":"translate(0px,"+now+"px)"})
                }
            }
            );

            $({ rate: 100 }).animate(
                { rate: 100 - $targetData },
                {
                duration: 2000,
                progress: function () {
                    now = this.rate;
                    $water.css({"transform":"translate(0px,"+now+"%)"})
                }
            }
            );
        });
        }
            //skillbar each
            $section5.find('.bottle .box.c .water').mouseover(function(){
            $(this).addClass('hover');
            });    
            $(document).ready(function(){
            $(".a1").mouseover(function(){
                $(".ani1").show()
            });
            $(".a1").mouseleave(function(){
                $(".ani1").hide()
            });
            $(".a2").mouseover(function(){
                $(".ani2").show()
            });
            $(".a2").mouseleave(function(){
                $(".ani2").hide()
            });
            $(".a3").mouseover(function(){
                $(".ani3").show()
            });
            $(".a3").mouseleave(function(){
                $(".ani3").hide()
            });
                $(".a4").mouseover(function(){
                $(".ani4").show()
            });
            $(".a4").mouseleave(function(){
                $(".ani4").hide()
            });

            //section9 animation
            if( $(window).scrollTop() > $(".sec9").offset().top - $(window).height()/2){
                let tl2 = new TimelineMax(); 
                tl2.staggerTo(".contact_t h1 span", 0.8, {opacity:1,y:0, ease: Back.easeOut.config(1.7)},0.09);
                tl2.staggerTo(".contact_t p", 0.8, {opacity:1,y:0, ease: Back.easeOut.config(1.7)},0.09);
            }
            if( $(window).scrollTop() > $("#form").offset().top - $(window).height()/1.2){
                let tl2 = new TimelineMax(); 
                tl2.staggerTo("#form", 0.8, {opacity:1,y:0, ease: Back.easeOut.config(1.7)},0.09);
            }   
        });
    
            $(".hover").mouseleave(
                function () {
                $(this).removeClass("hover");
                }
            );

        //Arrow-up
        const header = document.querySelector('#header');
        const headerHeight = header.getBoundingClientRect().height;
        const arrowUp = document.querySelector('.arrow-up');
        document.addEventListener('scroll', () => {
            if (window.scrollY > headerHeight / 2) {
                arrowUp.classList.add('visible');
            } else {
                arrowUp.classList.remove('visible');
            }
        });

        arrowUp.addEventListener('click', () => {
            scrollIntoView('#header');
        });

        function scrollIntoView(selector) {
            const scrollTo = document.querySelector(selector);
            scrollTo.scrollIntoView({ behavior: 'smooth' });
        }

        $(".btn").mouseover(function(){
            $(".cursor").addClass("active");
        });
        $(".btn").mouseleave(function(){
            $(".cursor").removeClass("active");
        });   
   });
        //cursor controll
        const cursor = document.querySelector('.cursor');
        
        document.addEventListener('mousemove', e => {
            
            cursor.setAttribute("style", "top: "+(e.pageY -10)+"px; left:"+(e.pageX - 10)+"px;")
        });     