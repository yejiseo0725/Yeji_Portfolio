$(function () {
  $(".title-slide").slick({
    arrows: false,
    dots: false,
    vertical: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000,
    infinity: true,
  });

  const innerHeight = $(window).innerHeight();
  const mainH2Offset = $(".main .title-area h2").offset().top;

  const sc0Offset = $(".sc0").offset().top;
  const sc1Offset = $(".sc1").offset().top;
  const sc2Offset = $(".sc2").offset().top;
  const sc3Offset = $(".sc3").offset().top;
  const sc4Offset = $(".sc4").offset().top;

  const donut = $("section.sc2 ul li.list");

  $(window).scroll(function () {
    const scrollTopLocation = $(this).scrollTop();

    if (
      scrollTopLocation + innerHeight * 0.3 >= sc0Offset &&
      scrollTopLocation <= sc1Offset
    ) {
      $("section.sc0 h3").css({
        color: "#fff",
      });
    } else {
      $("section.sc0 h3").css({
        background: "",
      });
    }
  });
});
