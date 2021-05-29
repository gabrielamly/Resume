$(document).ready(function() {

  $(".nav-link").click(function(event) {
    var navbarHeight = $("nav").outerHeight();
    console.log(navbarHeight);
    var targetHref = $(this).attr('href');

    $(".nav-link").removeClass("active");
    $(this).addClass("active");

    $("html, body").animate({
      scrollTop: $(targetHref).offset().top - navbarHeight  // Add it to the calculation here
    }, 1000);
    event.preventDefault(); // to prevent href added in path - file:///D:/Gabriela/Web%20Development/MySite/index.html#skills-section
  });

// scroll on document page
$(document).on("scroll", onScroll);

function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $("#navbarSupportedContent a").each(function() {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    var topPosition = refElement.position().top;
    var height = topPosition + refElement.height();

    if(topPosition <= scrollPos && topPosition + height > scrollPos)
    {
      $("#navbarSupportedContent ul li a").removeClass("active");
      currLink.addClass("active");
    }
    else {
      currLink.removeClass("active");
    }

  });
}
  // hover
  $(".skill-list").hover(

  // mouse in
  function() {
    $(this).css("font-weight", "bold");
    $(this).find(".bi").animate({
        marginLeft: "3px"
      });
  },

  // mouse out
  function() {
  //  $(this).css({"background-color":"floralwhite", "font-weight":"normal"});
    $(this).css("font-weight", "normal");
    $(this).find(".bi").animate({
        marginLeft: "0px"
      });
  }
  );
});
