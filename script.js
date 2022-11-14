$(document).ready(function(){
  
  $( '#menu' ).click(function(){
     
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('.nav-toggle');  

  });

});

// var menu = document.querySelector('#menu');
// var menuBtn = document.querySelector('.menu-btn');

// menuBtn.addEventListener("click", () =>{
//   menuBtn.classList.add('active');
// });