

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
  
});

$(document).ready(function () {
  //classi ai div
  //   $("#imGroup_1 > div").each(function (index) {
  //     if ($(this).hasClass("imHGroup") || $(this).hasClass("imEGroup"))
  //       $(this).addClass("row" + (index + 1));
  //     else {
  //       $(this).wrap(
  //         "<div class='row" + (index + 1) + "' style='width: 100%;'></div>"
  //       );
  //     }
  //   });
  $(".row1").wrapAll("<div class='MScontent'></div>");
  //sezioni nascoste
  $(".row3").addClass("sezione1");
  $(".row4").addClass("sezione2");
  $(".row5").addClass("sezione3");
  $(".row6").addClass("sezione4");

  //   $(".MScontent > div").css("float", "left");
  $("div[class*='sezione']").hide();

  $(".MS_ButtonLink").click(function () {
    var id = $(this).attr("href").slice(1);
    $(".row1, sezione1").animate(
      { scrollTop: 100,},
    500
    );
    $("div.MScontent").slideUp("slow");
    $("." + id).slideDown("slow");
      $(".cover").css("display", "none");
    return false;  
  });

  $(".MS_Close").click(function () {
    $("div[class*='sezione']").slideUp("slow");
    $("div.MScontent").slideDown("slow"); 
      $(".cover").css("display", "block");
    $(".row1, .sezione1").css("display", "none");
 
    $(".button").html("Rileggi presentazione");
    
    $(".button2").html("Il cigno dentro di noi");  
    
     
      $('html, body').animate({scrollTop: 0}, 'slow');
      return false;
    });     
  }); 
     

  


$(".button").click(function () {
  $(".cover").css("display", "none");
  $(".row1").css("display", "block");
});
  
$(".button2").click (function () {
  $(".cover").css("display", "block");
  $(".row1").css("display", "none");
  // window.scrollTo({ top: 0, behavior: "smooth" });
})
function myReloadFunction() {
  window.location.reload();
}



$(".nav ul li a").click(function () {
console.log("ciao");
  
});
