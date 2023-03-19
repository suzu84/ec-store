{
  $(".menu-btn").click(function () {
  $(this).toggleClass('active');
});

  $(".menu-btn").click(function () {
  $(".overlay").toggleClass('active');
});

  $(".overlay").click(function () {
  $(this).removeClass('active');
  });

  $(".overlay").click(function () {
  $(".menu-btn").removeClass('active');
});
}