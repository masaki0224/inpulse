 $(function(){
  $('.navToggle').click(function(){
    $(this).toggleClass('active');

    if($(this).hasClass('active')){
      $('.global-nav').addClass('active');
    } else{
      $('.global-nav').removeClass('active');
    }
  });
 });
