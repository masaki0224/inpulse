// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

 // $(function(){
 //  $('.navToggle').click(function(){
 //    $(this).toggleClass('active');

 //    if($(this).hasClass('active')){
 //      $('.global-nav').addClass('active');
 //    } else{
 //      $('.global-nav').removeClass('active');
 //    }
 //  });
 // });

// $(function(){
//   $(".humberger-menu-buttom img").click(function(){
//     $(this).attr('src','assets/menu-close.png');
//   });
// });

$(document).on('click', '.humberger-menu-buttom img', function (){
  $('.global-navigation').addClass('active');
});

$(document).on('click', '.global-navigation-close-buttom', function(){
  $('.global-navigation').removeClass('active');
});
