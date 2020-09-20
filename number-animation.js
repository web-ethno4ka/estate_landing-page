// var number = document.querySelector('.number');
// numberTop = number.getBoundingClientRect().top;
// (start = +number.innerHTML), (end = +number.dataset.max);

// window.addEventListener('scroll', function onScroll() {
//   if (window.pageYOffset > numberTop - window.innerHeight / 2) {
//     this.removeEventListener('scroll', onScroll);
//     var interval = setInterval(function () {
//       number.innerHTML = ++start;
//       if (start == end) {
//         clearInterval(interval);
//       }
//     }, 5);
//   }
// });

let number = document.querySelectorAll('.number.quantity');
let block = document.querySelector('.company-statistics_indicators');
numberTop = block.getBoundingClientRect().top;

window.addEventListener('scroll', function onScroll() {
  if (window.pageYOffset > numberTop - window.innerHeight / 2) {
    this.removeEventListener('scroll', onScroll);
    number.forEach((node) => {
      let start = parseInt(node.dataset.min);
      let end = parseInt(node.dataset.max);
      var interval = setInterval(function () {
        node.innerHTML = ++start;
        if (start > end) {
          clearInterval(interval);
        }
      }, 50);
    });
  }
});
