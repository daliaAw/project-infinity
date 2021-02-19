//animation 
AOS.init();

//top btn
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//end of top btn

//owl carousel
      $(document).ready(function() {
        var owl = $("#owl-demo");
       
        owl.owlCarousel({
            items : 5, //10 items above 1000px browser width
            itemsDesktop : [1000,5], //5 items between 1000px and 901px
            itemsDesktopSmall : [900,3], // betweem 900px and 601px
            itemsTablet: [600,2], //2 items between 600 and 0
            itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
        });
       
        // Custom Navigation Events
        $(".next").click(function(){
          owl.trigger('owl.next');
        })
        $(".prev").click(function(){
          owl.trigger('owl.prev');
        })
        $(".play").click(function(){
          owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
        })
        $(".stop").click(function(){
          owl.trigger('owl.stop');
        })
       
       });