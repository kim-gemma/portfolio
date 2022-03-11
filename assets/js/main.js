"use strict"

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  const scrollTo = document.querySelector(link);
  navbarMenu.classList.remove('open');
  scrollTo.scrollIntoView();
});

// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

//splite
let splite2 = $(".wtext h3").text().split("").join("</span><span>")
splite2 = "<span>" + splite2 + "</span>"
$(".wtext h3").html(splite2)

let splite3 = $(".atext h3").text().split("").join("</span><span>")
splite3 = "<span>" + splite3 + "</span>"
$(".atext h3").html(splite3)

let splite4 = $(".mtext h3").text().split("").join("</span><span>")
splite4 = "<span>" + splite4 + "</span>"
$(".mtext h3").html(splite4)

let splite5 = $(".contact_t h1").text().split("").join("</span><span>")
splite5 = "<span>" + splite5 + "</span>"
$(".contact_t h1").html(splite5)

$(window).scroll(function () {
  let wScroll = $(window).scrollTop()
  let wOffset = $("#section1").offset().top
  let wHeight = $(window).height()

  $(".wScroll").text(parseInt(wScroll))
  $(".wOffset").text(parseInt(wOffset))

  let offset1 = wScroll - $("#section2").offset().top
  let offset2 = wScroll - $(".sec3").offset().top

  //section2 animation

  if (
    $(window).scrollTop() >
    $(".sec2").offset().top - $(window).height() / 2
  ) {
    let tl2 = new TimelineMax()
    tl2.staggerTo(
      ".main_i1",
      1,
      { opacity: 1, x: 0, ease: Back.easeOut.config(1.7) },
      0.09
    )
    tl2.staggerTo(
      ".main_t1",
      1,
      { opacity: 1, y: 0, ease: Back.easeOut.config(1.7) },
      0.09
    )
    tl2.staggerTo(
      ".main_pt1",
      1,
      { opacity: 1, y: 0, ease: Back.easeOut.config(1.7) },
      0.09
    )
    tl2.staggerTo(
      ".main_i1",
      1,
      { opacity: 1, x: 0, ease: Back.easeOut.config(1.7) },
      0.09
    )
    tl2.staggerTo(
      ".main_t1",
      1,
      { opacity: 1, y: 0, ease: Back.easeOut.config(1.7) },
      0.09
    )
    tl2.staggerTo(
      ".main_pt1",
      1,
      { opacity: 1, y: 0, ease: Back.easeOut.config(1.7) },
      0.09
    )
    tl2.staggerTo(
      ".main_t3 .s1",
      1,
      { opacity: 1, y: 0, ease: Back.easeOut.config(1.7) },
      0.09
    )
    tl2.staggerTo(
      ".main_t3 .s2",
      1,
      { opacity: 1, y: 0, ease: Back.easeOut.config(1.7) },
      0.09
    )
    tl2.staggerTo(
      ".main_t3 .s3",
      1,
      { opacity: 1, y: 0, ease: Back.easeOut.config(1.7) },
      0.09
    )
    tl2.staggerTo(
      ".main_t3 .s4",
      1,
      { opacity: 1, y: 0, ease: Back.easeOut.config(1.7) },
      0.09
    )
  }

  if (
    $(window).scrollTop() >
    $(".main2").offset().top - $(window).height() / 2
  ) {
    let tl2 = new TimelineMax()
    tl2.staggerTo(
      ".main_i2",
      1,
      { opacity: 1, x: 0, ease: Back.easeOut.config(1.7) },
      0.09
    )
    tl2.staggerTo(
      ".main_t2",
      1,
      { opacity: 1, y: 0, ease: Back.easeOut.config(1.7) },
      0.09
    )
    tl2.staggerTo(
      ".main_pt2",
      1,
      { opacity: 1, y: 0, ease: Back.easeOut.config(1.7) },
      0.09
    )
  }

  //section3 animation
  $("#section3 .marquee_content .list-inline").css({
    transform: "translateX(" + -offset2 * 0.3 + "px)",
  })
  $("#section3 .marquee_content .list-inline2").css({
    transform: "translateX(" + offset2 * 0.3 + "px)",
  })
  $("#section3 .marquee_content .list-inline3").css({
    transform: "translateX(" + -offset2 * 0.3 + "px)",
  })
  $("#section3 .marquee_content .list-inline4").css({
    transform: "translateX(" + offset2 * 0.3 + "px)",
  })

  //section6 animation
  if (
    $(window).scrollTop() >
    $(".marquee_content").offset().top - $(window).height() / 2
  ) {
    let tl2 = new TimelineMax()
    tl2.staggerTo(
      ".wtext .t2",
      0.8,
      { opacity: 1, y: 0, ease: Back.easeOut.config(1.7) },
      0.09
    )
    tl2.staggerTo(
      ".wtext h3 span",
      0.8,
      { opacity: 1, y: 0, ease: Back.easeOut.config(1.7) },
      0.09
    )
    tl2.staggerTo(
      ".wtext p",
      0.8,
      { opacity: 1, y: 0, ease: Back.easeOut.config(1.7) },
      0.09
    )
  }

  // Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  // Remove selection from the previous item and select the new one
  const active = document.querySelector('.category__btn.selected');
  if (active != null) {
    active.classList.remove('selected');
  }
  e.target.classList.add('selected');

  projectContainer.classList.add('anim-out');
  setTimeout(() => {
    projects.forEach((project) => {
      console.log(project.dataset.type);
      if (filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim-out');
  }, 300);
});

  //section7 animation
  if (
    $(window).scrollTop() >
    $(".sec7").offset().top - $(window).height() / 2
  ) {
    let tl2 = new TimelineMax()
    tl2.staggerTo(
      ".atext .t3",
      0.8,
      { opacity: 1, y: 0, ease: Back.easeOut.config(1.7) },
      0.09
    )
    tl2.staggerTo(
      ".atext h3 span",
      0.8,
      { opacity: 1, y: 0, ease: Back.easeOut.config(1.7) },
      0.09
    )
    tl2.staggerTo(
      ".atext p",
      0.8,
      { opacity: 1, y: 0, ease: Back.easeOut.config(1.7) },
      0.09
    )
  }
  //section4 animation
  if (
    $(window).scrollTop() >
    $(".sec4").offset().top - $(window).height() / 2
  ) {
    let tl2 = new TimelineMax()
    tl2.staggerTo(
      ".mtext .t4",
      0.8,
      { opacity: 1, y: 0, ease: Back.easeOut.config(1.7) },
      0.09
    )
    tl2.staggerTo(
      ".mtext h3 span",
      0.8,
      { opacity: 1, y: 0, ease: Back.easeOut.config(1.7) },
      0.09
    )
    tl2.staggerTo(
      ".mtext p",
      0.8,
      { opacity: 1, y: 0, ease: Back.easeOut.config(1.7) },
      0.09
    )
  }

  //section5 skillbar
  const $section7 = $("#section5")
  function skillBar() {
    $section6.find(".sec5 .box").each(function () {
      const $current = $(this)
      const $currentPercent = $current.find(".percentNum")
      const $targetData = $currentPercent.attr("data-percent")
      const $water = $current.find(".water")
      let now

      $({ rate: 0 }).animate(
        { rate: $targetData },
        {
          duration: 2000,
          progress: function () {
            now = this.rate
            $currentPercent.text(Math.ceil(now))
            $water.css({ transform: "translate(0px," + now + "px)" })
          },
        }
      )

      $({ rate: 100 }).animate(
        { rate: 100 - $targetData },
        {
          duration: 2000,
          progress: function () {
            now = this.rate
            $water.css({ transform: "translate(0px," + now + "%)" })
          },
        }
      )
    })
  }
  //skillbar each
  $section7.find(".bottle .box.c .water").mouseover(function () {
    $(this).addClass("hover")
  })
  $(document).ready(function () {
    $(".a1").mouseover(function () {
      $(".ani1").show()
    })
    $(".a1").mouseleave(function () {
      $(".ani1").hide()
    })
    $(".a2").mouseover(function () {
      $(".ani2").show()
    })
    $(".a2").mouseleave(function () {
      $(".ani2").hide()
    })
    $(".a3").mouseover(function () {
      $(".ani3").show()
    })
    $(".a3").mouseleave(function () {
      $(".ani3").hide()
    })
    $(".a4").mouseover(function () {
      $(".ani4").show()
    })
    $(".a4").mouseleave(function () {
      $(".ani4").hide()
    })

    //section8 스크립트 - 가로 슬라이드
    if (wScroll > $("#section7").offset().top) {
      $("#section8").addClass("visible")
    } else {
      $("#section8").removeClass("visible")
    }

    var offsetLeft = wScroll - $("#section8").offset().top
    if (wScroll > $("#section8").offset().top + 1000) {
      gsap.to($("#section8").find(".sec8"), { left: -offsetLeft + 1000 + "px" })
    } else {
      $("#section8")
        .find(".sec8")
        .css("left", +0 + "px")
    }

    //section9 animation
    if (
      $(window).scrollTop() >
      $(".sec9").offset().top - $(window).height() / 2
    ) {
      let tl2 = new TimelineMax()
      tl2.staggerTo(
        ".contact_t h1 span",
        0.8,
        { opacity: 1, y: 0, ease: Back.easeOut.config(1.7) },
        0.09
      )
      tl2.staggerTo(
        ".contact_t p",
        0.8,
        { opacity: 1, y: 0, ease: Back.easeOut.config(1.7) },
        0.09
      )
    }
    if (
      $(window).scrollTop() >
      $("#form").offset().top - $(window).height() / 1.2
    ) {
      let tl2 = new TimelineMax()
      tl2.staggerTo(
        "#form",
        0.8,
        { opacity: 1, y: 0, ease: Back.easeOut.config(1.7) },
        0.09
      )
    }
  })

  $(".hover").mouseleave(function () {
    $(this).removeClass("hover")
  })

  //Arrow-up
  const header = document.querySelector("#header")
  const headerHeight = header.getBoundingClientRect().height
  const arrowUp = document.querySelector(".arrow-up")
  document.addEventListener("scroll", () => {
    if (window.scrollY > headerHeight / 2) {
      arrowUp.classList.add("visible")
    } else {
      arrowUp.classList.remove("visible")
    }
  })

  arrowUp.addEventListener("click", () => {
    scrollIntoView("#header")
  })

  function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector)
    scrollTo.scrollIntoView({ behavior: "smooth" })
  }

  $(".btn").mouseover(function () {
    $(".cursor").addClass("active")
  })
  $(".btn").mouseleave(function () {
    $(".cursor").removeClass("active")
  })
})
//cursor controll
const cursor = document.querySelector(".cursor")

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px; left:" + (e.pageX - 10) + "px;"
  )
})
