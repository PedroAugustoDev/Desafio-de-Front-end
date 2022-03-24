/* 
 * Autor: Pedro Augusto
 */



 //set mobile menu
 window.addEventListener('load', ()=>{
  const menuToggle = document.querySelector('.menu-toggle');
  const navBarLinks = document.querySelector('.nav');

  menuToggle.addEventListener('click', () =>{
    const header = document.querySelectorAll('header')[0];
     menuToggle.classList.toggle('active');
     header.classList.toggle('active')
     navBarLinks.classList.toggle('active');
     navBarLinks.addEventListener('click', () =>{
         setTimeout(() => {
            if(menuToggle.classList.contains('active'))
              menuToggle.classList.remove('active');
            navBarLinks.classList.remove('active');
         }, 300);
     });
  });

});


