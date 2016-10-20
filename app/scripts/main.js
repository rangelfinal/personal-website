if ($(window).width() > 600) {
  $('body')
    .visibility({
      offset: -10,
      observeChanges: false,
      once: false,
      continuous: false,
      onTopPassed: function() {
        requestAnimationFrame(function() {
          $('.following.bar')
            .addClass('light fixed')
            .find('.menu')
            .removeClass('inverted');
          $('.following .additional.item')
            .transition('scale in', 750);
        });
      },
      onTopPassedReverse: function() {
        requestAnimationFrame(function() {
          $('.following.bar')
            .removeClass('light fixed');
        });
      }
    });
};

$('document').ready(() => {
  let currentDate = new Date();
  let currentHour = currentDate.getHours();
  trianglifyBackground(currentHour);
  window.setInterval(() => {
    currentHour++;
    if (currentHour > 24) currentHour = 0;
    trianglifyBackground(currentHour);
  }, 3600000);
});

function trianglifyBackground(hour) {
  let colorPalletes = [
    ['#00000c', '#020111'],
    ['#020111', '#191621'],
    ['#020111', '#20202c'],
    ['#020111', '#3a3a52'],
    ['#20202c', '#515175'],
    ['#40405c', '#6f71aa', '#8a76ab'],
    ['#4a4969', '#7072ab', '#cd82a0'],
    ['#757abf', '#8583be', '#eab0d1'],
    ['#82addb', '#ebb2b1'],
    ['#94c5f8', '#a6e6ff', '#b1b5ea'],
    ['#b7eaff', '#94dfff'],
    ['#9be2fe', '#67d1fb'],
    ['#90dffe', '#38a3d1'],
    ['#57c1eb', '#246fa8'],
    ['#2d91c2', '#1e528e'],
    ['#2473ab', '#1e528e', '#5b7983'],
    ['#1e528e', '#265889', '#9da671'],
    ['#1e528e', '#728a7c', '#e9ce5d'],
    ['#154277', '#576e71', '#e1c45e', '#b26339'],
    ['#163C52', '#4F4F47', '#C5752D', '#B7490F', '#2F1107'],
    ['#071B26', '#071B26', '#8A3B12', '#240E03'],
    ['#010A10', '#59230B', '#2F1107'],
    ['#090401', '#4B1D06'],
    ['#00000c', '#150800'],
    ['#00000c', '#020111']
  ];


  let pattern = Trianglify({
    height: $('.masthead.segment').height(),
    width: $('.masthead.segment').width(),
    cell_size: 50,
    x_colors: colorPalletes[hour]
  });

  $('.masthead.segment')
    .css({'background-image': 'url(' + pattern.png() + ')'});
};
