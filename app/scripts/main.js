if($(window).width() > 600) {
   $('body')
     .visibility({
       offset         : -10,
       observeChanges : false,
       once           : false,
       continuous     : false,
       onTopPassed: function() {
         requestAnimationFrame(function() {
           $('.following.bar')
             .addClass('light fixed')
             .find('.menu')
               .removeClass('inverted')
           ;
           $('.following .additional.item')
             .transition('scale in', 750)
           ;
         });
       },
       onTopPassedReverse: function() {
         requestAnimationFrame(function() {
           $('.following.bar')
             .removeClass('light fixed')
           ;
         });
       }
     })
   ;
 };

$('document').ready(() => {

  console.log()

  let pattern = Trianglify({
    height: $('.masthead.segment').height(),
    width: $('.masthead.segment').width(),
    cell_size: 50,
    x_colors: 'PuBu'
  });

  $('.masthead.segment').css({'background-image': 'url(' + pattern.png() + ')'});

});
