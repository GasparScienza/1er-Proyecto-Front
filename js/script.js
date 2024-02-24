$(".menu > ul > li").click(function (e) {
  //remover la clase active
  $(this).siblings().removeClass("active");
  //agregar clase active en elñ que se hace click
  $(this).toggleClass("active");
  //abrir sub menu
  $(this).find("ul").slideToggle();
  //Cerrar otro submenu cuando se abre uno
  $(this).siblings().find("ul").slideUp();

  $(this).siblings().find("ul").find("li").removeClass("active");
});

$(".menu-btn").click(function () {
    $(".sidebar").toggleClass("active");
});
