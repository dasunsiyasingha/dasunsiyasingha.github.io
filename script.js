function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 240;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);


function reveal_contain() {
    var reveals = document.querySelectorAll(".reveal_container");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 240;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active1");
      } else {
        reveals[i].classList.remove("active1");
      }
    }
  }
  
  window.addEventListener("scroll", reveal_contain);



  function door_animation() {
    var left_box = document.querySelector(".left-box");
    var right_box = document.querySelector(".right-box");

    var windowHeight = window.innerHeight;
    var elementTop = right_box.getBoundingClientRect().top;
    var elementVisible = 240;
  
    if (elementTop < windowHeight - elementVisible) {
        right_box.classList.add("open_active");
        left_box.classList.add("open_active");
    } else {
        right_box.classList.remove("open_active");
        left_box.classList.remove("open_active");

    }
  }
  
  window.addEventListener("scroll", door_animation);
