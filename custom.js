$(document).ready(function () {
  $(".select2-options").select2({
    placeholder: "Choose First",
    allowClear: true,
  });

  var slideItem = $(".Product__SlideItem");
  var thumbnailSlideItem = $(".Product__SlideshowNavImage");
  var optionVariant = $(".selection-variant");

  optionVariant.change(function () {
    if (optionVariant.find(":selected").data("sold-out") == "soldout") {
      $(".ProductForm__AddToCart").html("Sold Out");
      $(".ProductForm__AddToCart").attr("disabled", "disabled");
    } else {
      $(".ProductForm__AddToCart").html("Add To Cart");
      $(".ProductForm__AddToCart").removeAttr("disabled");
    }
  });

  thumbnailSlideItem.each(function () {
    var dataSlideThumbnail = $(this).data("variant-img");
    optionVariant.change(function () {
      var dataVariantSlide = optionVariant
        .find(":selected")
        .data("variant-img");
      if (dataSlideThumbnail == dataVariantSlide) {
        console.log(
          $(
            '.Product__SlideshowNavImage[data-variant-img="' +
              dataSlideThumbnail +
              '"]'
          )
        );
        console.log(dataSlideThumbnail);
        $(
          '.Product__SlideshowNavImage[data-variant-img="' +
            dataSlideThumbnail +
            '"]'
        ).addClass("is-selected");
      } else if (dataSlideThumbnail != dataVariantSlide) {
        $(
          '.Product__SlideshowNavImage[data-variant-img="' +
            dataSlideThumbnail +
            '"]'
        ).removeClass("is-selected");
      }
    });
  });

  slideItem.each(function () {
    var dataSlide = $(this).data("variant-img");
    var dataPosition = $(this).data("image-media-position");
    optionVariant.change(function () {
      var dataVariant = optionVariant.find(":selected").data("variant-img");
      if (dataSlide == dataVariant) {
        console.log(
          $('.Product__SlideItem[data-variant-img="' + dataSlide + '"]')
        );
        console.log(dataSlide);
        $('.Product__SlideItem[data-variant-img="' + dataSlide + '"]').addClass(
          "is-selected"
        );
        var resultLeft = 0;
        if (dataPosition == 0) {
          var resultLeft = dataPosition + "%";
        } else {
          var resultLeft = "-" + dataPosition + "00%";
        }
        $(".Product__Slideshow .flickity-slider").css("left", resultLeft);
      } else if (dataSlide != dataVariant) {
        $(
          '.Product__SlideItem[data-variant-img="' + dataSlide + '"]'
        ).removeClass("is-selected");
      }
    });
  });
});
