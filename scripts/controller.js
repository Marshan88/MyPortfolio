// var firstsec = document.getElementById('main');
// var secondsec = document.getElementById('sub-section-alternative');
// var lastScrollTop = 0;
// window.onscroll = function () {
//   var st = window.pageYOffset || document.documentElement.scrollTop;
//   if (st > lastScrollTop) {
//     secondsec.scrollIntoView({ behavior: "smooth" });
//   } else {
//     firstsec.scrollIntoView({ behavior: "smooth" });
//   }
//   lastScrollTop = st <= 0 ? 0 : st;
// }

function toggleButton() {
  const navList = document.getElementById("navList");
  navList.classList.toggle("show");
}