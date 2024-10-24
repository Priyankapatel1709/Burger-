function filterFood(food) {
  var f = document.getElementsByClassName("m-box");
  var list = document.querySelectorAll(".menu-nav li");
  for (let j = 0; j < list.length; j++) {
    if (food !== list[j].classList[0]) {
      list[j].classList.remove("active");
    } else {
      list[j].classList.add("active");
    }
  }
  //   console.log(list.a);
  if (food == "all") {
    food = "";
  }
  for (let i = 0; i < f.length; i++) {
    f[i].classList.remove("show");
    if (f[i].className.indexOf(food) > -1) {
      f[i].classList.add("show");
    }
  }
}
