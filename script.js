// script.js - small UI interactivity
$(function(){
  // smooth scrolling for nav links to top of page when same page
  $('.nav-links a').on('click', function(e){
    // if link is internal, allow normal navigation; otherwise just highlight
  });

  // Add small animation on buttons
  $('.btn').on('mousedown', function(){ $(this).css('transform','translateY(1px)'); });
  $(document).on('mouseup mouseleave', function(){ $('.btn').css('transform',''); });
});
