function foodItem(fooditem, element,color){
 
    var i, tabcontent, tablink;

    tabcontent=document.getElementsByClassName('tabcontent');

    for(i=0; i<tabcontent.length; i++){
        tabcontent[i].style.display="none";
    }

    tablink=document.getElementsByClassName('tablink');
    
    for(i=0; i<tablink.length; i++){
        tablink[i].style.background="";
    }

    document.getElementById(fooditem).style.display="block";
    element.style.background=color;

}

document.getElementById('default-1').click();

var btn = document.getElementById("open");

var modal = document.getElementById("myModal");

   btn.onclick = function(){
     modal.style.display="block";
   } 
   
var a = document.getElementById("close");
a.onclick = function(){
    modal.style.display="none"
}

$(function(){
    $('#default-1').click(function(){
        $('.bread').fadeIn();
        $('.cake').fadeIn();
        $('.cookie').fadeIn();
        $('.coffee').fadeIn();
    })

    $('#default-2').click(function(){
        $('.bread').fadeIn();
        $('.cake').fadeOut();
        $('.cookie').fadeOut();
        $('.coffee').fadeOut();
    })

    $('#default-3').click(function(){
        $('.bread').fadeOut();
        $('.cake').fadeIn();
        $('.cookie').fadeOut();
        $('.coffee').fadeOut();
    })

    $('#default-4').click(function(){
        $('.bread').fadeOut();
        $('.cake').fadeOut();
        $('.cookie').fadeIn();
        $('.coffee').fadeOut();
    })

    $('#default-5').click(function(){
        $('.bread').fadeOut();
        $('.cake').fadeOut();
        $('.cookie').fadeOut();
        $('.coffee').fadeIn();
    })
})