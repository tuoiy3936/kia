let lan = document.querySelector(".lanBtn");
let bool = true;

lan.onclick = function (e) {
  e.preventDefault();
  if (bool) {
    this.querySelector("div").style.display = "block";
    this.querySelector("a")
      .querySelector(".lanimg")
      .querySelector("img")
      .classList.add("on");
  } else {
    this.querySelector("div").style.display = "none";
    this.querySelector("a")
      .querySelector(".lanimg")
      .querySelector("img")
      .classList.remove("on");
  }
  bool = !bool;
};

// let txt = document.querySelectorAll("#main .txt");
// let con = document.querySelectorAll("#main .txt div");
// let lang = document.querySelectorAll(".right ul:first-child");
// txt[0].querySelector("div").classList.add("on");
// con[0].querySelector(".con").classList.add("on");
// function myfnu() {
//   txt.forEach(function (v, k) {
//     v.querySelector("div").classList.remove("on");
//   });
//   con.forEach(function (v, k) {
//     v.querySelector(".con").classList.remove("on");
//   });
//   lang.forEach(function (v, k) {
//     v.querySelector("div").classList.remove("on");
//   });
// }
// lang.forEach(function (v, k) {
//   v.onclick = function () {
//     document.querySelector("div").classList.add("on");
//   };
// });
let swtxt = document.querySelectorAll(".txt>div");

swtxt[0].querySelector("h5").classList.add("on");
swtxt[0].querySelector("h1").classList.add("on");
swtxt[0].querySelector(".con").classList.add("on");
// swtxt[0].querySelector("h1").classList.add("on");
function myfnc() {
  swtxt.forEach(function (v, k) {
    v.querySelector("h5").classList.remove("on");
    v.querySelector("h1").classList.remove("on");
    v.querySelector(".con").classList.remove("on");
  });
}

var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    slideChange: function () {
      myfnc();
      console.log(this.realIndex);
      swtxt[this.realIndex].querySelector("h5").classList.add("on");
      swtxt[this.realIndex].querySelector("h1").classList.add("on");
      swtxt[this.realIndex].querySelector(".con").classList.add("on");
    },
  },
});
// let con2 = document.querySelectorAll(".con2 > ul li");
// con2[0].querySelecto("h3").classList.add("actvie");
// con2.forEach(function (v, k) {
//   v.onclick = function () {
//     v.querySelector("h3").classList.add("actvie");
//   };
// });
var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
AOS.init({
  duration: 1000,
  delay: 500,
});
