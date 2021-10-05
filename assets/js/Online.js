$('.top-3').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay:true
  });


var btn = document.getElementById("open");
          

var modal = document.getElementById("myModal");

   btn.onclick = function(){
     modal.style.display="block";
   } 
   
var a = document.getElementById("close");
a.onclick = function(){
    modal.style.display="none"
}

var btn1 = document.getElementById("open-1");

var modal1= document.getElementById("myModal-1");
      btn1.onclick = function(){
       modal1.style.display="block";
   } 
     
  var a1 = document.getElementById("close-1");
  a1.onclick = function(){
    modal1.style.display="none"
    } 


