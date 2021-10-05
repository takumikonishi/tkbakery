function openNav(){
    document.getElementsByTagName("nav")[0].style.width="100%";

}

function closeNav(){
    document.getElementsByTagName("nav")[0].style.width="0";
}

$(function(){
    $('.background').slick({
        // dots: true,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'ease',
        autoplay:true
      });
});