$(document).ready(function() {

 onScroll();  // investigate on scroll function on starting
  // Page scroll
  function onScrollFunc(){
    $(document).on("scroll", onScroll);
  }

  function offScrollFunc(){
    $(document).off("scroll");
  }


  function onScroll(event) {
    console.log("inside on scroll");
    var current;
    // get the scroll position from Top
    var scrollPos = $(document).scrollTop();


    //get each section top position
    $("section").each(function() {
      var sectionTop = $(this).offset().top;
      var sectionHeight = $(this).height();

      if (scrollPos >= (sectionTop - sectionHeight/2)) {
        current = $(this).attr("id");
      }
    }); // end of each section function
    console.log(current);

    $("#navbarSupportedContent ul li a").each(function() {
      $(this).removeClass("active");
      //  console.log("active class removed");
      if ($("#navbarSupportedContent ul li a").hasClass(current)) {
        $("#navbarSupportedContent ul li ." + current).addClass("active");
      }

    }); //end of navbarSupportedContent each function

  } // end of onScroll function

  $(".nav-link").click(function(event) {
    event.preventDefault(); // to prevent href added in path - file:///D:/Gabriela/Web%20Development/MySite/index.html#skills-section
    offScrollFunc();

    var navbarHeight = $("nav").outerHeight();
    var targetHref = $(this).attr('href');

    $(".nav-link").removeClass("active");
    $(this).addClass("active");

    $("html, body").animate({
      scrollTop: $(targetHref).offset().top - navbarHeight // Add it to the calculation here
    }, 1000, function() {
      onScrollFunc();
    });

  }); //end of click function on navbar

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
);  // end of hover function
}); // End of document.ready
