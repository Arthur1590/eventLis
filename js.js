function colors() {
  let fromColors = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  let toColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  const degree = Math.floor(Math.random() * 90)
  return `linear-gradient(${degree}deg, ${fromColors}, ${toColor})`;
}
function over() {
  wrapper.style.background = colors();
}
function del() {
  wrapper.style.background = "";
}
function shadow() {
  const varShadow = [
    "10px 10px 20px #000",
    "-10px -10px 40px #000",
    "-15px -14px 40px #000",
    "20px 16px 40px #000",
    "0px 10px 40px #000",
    "14px -14px 40px #000",
    "20px -15px 40px #000",
  ];
  const genShadow = Math.floor(Math.random() * varShadow.length);
  const res = varShadow[genShadow];
  varShadow.splice(varShadow, 1);
  return res;
}
// ДОМАШКА //

const img = document.querySelector(".img");
const wrapper = document.querySelector(".wrapper");
const up = document.querySelector(".up");
const down = document.querySelector(".down");
wrapper.addEventListener("mouseover", function () {
  up.style.translate = "0 -210px";
  down.style.translate = "0 210px";
  up.style.transition = ".3s";
  down.style.transition = ".3s";
  this.style.transition = "0.3s";
  this.style.cursor = "pointer";
  this.style.border = "1px solid #000";
  img.setAttribute("src", "img.jpg");
  img.style.transition = ".3s";
  img.style.opacity = "1";
  this.addEventListener("mouseout", function () {
    this.style.transition = ".5s";
    this.style.borderRadius = ""; // НЕ HOVER
    this.style.height = "";
    this.style.border = "none";
    img.style.opacity = "0";
    up.style.translate = "";
    down.style.translate = "";
  });
});
// const box = document.querySelector(".box");  один элемент в разметке
// box.addEventListener("click", function () {
//   this.style.background = colors();
//   this.style.border = "none";
//   this.style.boxShadow = "0px 0px 20px", colors();
// });
const box = document.querySelectorAll(".box"); // все элементы в разметке
const body = document.querySelector("body");
const holder = document.querySelector(".holder");

box.forEach(function (items) {
  items.addEventListener("click", function () {
    this.style.background = colors();
    this.style.boxShadow = "10px 10px 20px #000";
    this.style.boxShadow = shadow(); // CLICK
    this.style.transition = ".3s";
    this.textContent = "X";
    this.style.translate = "0px -20px";
    this.addEventListener("mouseout", function () {
      this.style.translate = ""; // НЕ HOVER
    });
    items.addEventListener("mouseover", function () {
      this.textContent = ""; // HOVER
    });
  });
});
for (let i = 0; i < box.length; i++) {
  box[i].style.background = box[i].getAttribute("data-bg");
  box[i].addEventListener("click", function () {
    holder.style.background = box[i].getAttribute("data-bg");
    holder.style.zIndex = '99999'
  });
}
const txt = document.querySelector(".txt");
txt.addEventListener("click", function () {
  this.textContent = "";
  txt.addEventListener("mouseover", function () {
    txt.textContent = "X";
  });
});

// let truee = true;
// if(truee){
//   test.setAttribute('src', 'img.jpg')
//   test.style.height = '200px'
//   test.style.width = '100%'
//   test.style.objectFit = 'cover'
//   test.style.transition = '0.3s'
//   truee = false
// } else {
//   test.style.height = '0px'
//   truee = true
// }
