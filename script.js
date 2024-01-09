let navbar = document.querySelector('.nav');

document.querySelector('#menu_icon').onclick = () =>{
    navbar.classList.add('active');
    
} ;

document.querySelector('#close_icon').onclick = () =>{
    navbar.classList.remove('active');
};

var typed = new Typed('.auto_type', {
    strings: ["web designer", "frontend developer", "ui/ux designer " ],
    typeSpeed: 160,
    backspeed:160,
    loop:true
  });

  AOS.init(
    {
    duration:800,
    delay:500,
  }
   );