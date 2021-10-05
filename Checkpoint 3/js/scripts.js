$( document ).ready(function() {

  // Parallax

  // setTimeout serve para carregar primeiro as imagens
  setTimeout(function() {
    $('#playlists-area').parallax({imageSrc: 'img/background.jpg'});
  }, 200);

  // scroll para as seções

  let navBtn = $('.nav-item');

  let bannerSection = $('#mainSlider');
  let aboutSection = $('#about-area');
  let topSection = $('#top-area');
  let playlistsSection = $('#playlists-area');

  let scrollTo = '';

  $(navBtn).click(function() {

    let btnId = $(this).attr('id');

    if(btnId == 'about-menu') {
      scrollTo = aboutSection;
    } else if(btnId == 'top-10') {
      scrollTo = topSection;
    } else if(btnId == 'top-playlists') {
      scrollTo = playlistsSection;
    } else {
      scrollTo = bannerSection;
    }

    $([document.documentElement, document.body]).animate({
        scrollTop: $(scrollTo).offset().top - 70
    }, 1500);
  });

});