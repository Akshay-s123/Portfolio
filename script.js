
function reveal() {
    var reveals = document.querySelectorAll(".reveal, .d2");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);

  document.getElementById('btn1').onclick= function(){
    location.href= "https://akshay-s123.github.io/Nike/";
  };
  document.getElementById('btn2').onclick= function(){
    location.href= "https://akshay-s123.github.io/Rolex/";
  };
  document.getElementById('btn3').onclick= function(){
    location.href= "https://akshay-s123.github.io/Rolex/";
  };
  document.getElementById('btn4').onclick= function(){
    location.href= "https://akshay-s123.github.io/Netflix/";
  };



 document.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  
  if (window.scrollY > 885){
    document.getElementById('stk').classList.add('display');
  }
  else {
    document.getElementById('stk').classList.remove('display');
  }
 });

 function clicke(){
  document.getElementById('menulist').classList.toggle('menudisplay');
 }