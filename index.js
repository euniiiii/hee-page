// Route
pages = ['#home', '#plan', '#trip', '#playlist'];

function changePage(id) {
  pages.map((page, index) => {
    if (page === '#' + id) {
      $(page).css({ display: 'block' });
      $(page + ' nav a:nth-child(' + (index + 1) + ')').css({ fontWeight: '700' });
    } else {
      $(page).css({ display: 'none' });
    }
  });
}

// Image Slider
$(function () {
  var $slider = $('.slider'),
    $firstSlide = $slider.find('li').first().stop(true).animate({ opacity: 1 }, 200);

  function PrevSlide() {
    stopSlide();
    startSlide();
    var $lastSlide = $slider.find('li').last().prependTo($slider);
    $secondSlide = $slider.find('li').eq(1).stop(true).animate({ opacity: 0 }, 400);
    $firstSlide = $slider.find('li').first().stop(true).animate({ opacity: 1 }, 400);
  }

  function NextSlide() {
    stopSlide();
    startSlide();
    $firstSlide = $slider.find('li').first().appendTo($slider);
    var $lastSlide = $slider.find('li').last().stop(true).animate({ opacity: 0 }, 400);
    $firstSlide = $slider.find('li').first().stop(true).animate({ opacity: 1 }, 400);
  }

  $('#next').on('click', function () {
    NextSlide();
  });
  $('#prev').on('click', function () {
    PrevSlide();
  });

  startSlide(); //

  var theInterval;

  function startSlide() {
    theInterval = setInterval(NextSlide, 3000);
  }

  function stopSlide() {
    clearInterval(theInterval);
  }

  $('.slider').hover(
    function () {
      stopSlide();
    },
    function () {
      startSlide();
    },
  );
});

$(window).resize(function () {
  var height = $('#trip article .slider li div').height();
  $('#trip article .btn1').css({ top: (height - 50) / 2 });
  $('#trip article .btn2').css({ top: (height - 50) / 2 });
});

//youtube API 불러오는 부분
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

$(function () {
  var player;
  function onYouTubeIframeAPIReady(code) {
    player = new YT.Player('player', {
      videoId: code,
      controls: 0,
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
      controls: 0,
    });
  }
  function onPlayerReady(event) {
    event.target.playVideo();
  }

  var done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      done = true;
    }
  }
  $('#song1').on('click', function () {
    onYouTubeIframeAPIReady('Jh4QFaPmdss');
    $('#player').attr(
      'src',
      'https://www.youtube.com/embed/Jh4QFaPmdss?controls=0&enablejsapi=1&origin=http%3A%2F%2F172.30.1.10%3A5500&widgetid=1',
    );
  });
  $('#song2').on('click', function () {
    onYouTubeIframeAPIReady('Si5pQHRRH5w');
    $('#player').attr(
      'src',
      'https://www.youtube.com/embed/Si5pQHRRH5w?controls=0&enablejsapi=1&origin=http%3A%2F%2F172.30.1.10%3A5500&widgetid=1',
    );
  });
  $('#song3').on('click', function () {
    onYouTubeIframeAPIReady('Y8JFxS1HlDo');
    $('#player').attr(
      'src',
      'https://www.youtube.com/embed/Y8JFxS1HlDo?controls=0&enablejsapi=1&origin=http%3A%2F%2F172.30.1.10%3A5500&widgetid=1',
    );
  });
  $('#song4').on('click', function () {
    onYouTubeIframeAPIReady('3m2F8F7YSZc');
    $('#player').attr(
      'src',
      'https://www.youtube.com/embed/3m2F8F7YSZc?controls=0&enablejsapi=1&origin=http%3A%2F%2F172.30.1.10%3A5500&widgetid=1',
    );
  });
  $('#song5').on('click', function () {
    onYouTubeIframeAPIReady('YPvrhziJAno');
    $('#player').attr(
      'src',
      'https://www.youtube.com/embed/YPvrhziJAno?controls=0&enablejsapi=1&origin=http%3A%2F%2F172.30.1.10%3A5500&widgetid=1',
    );
  });
  $('#song6').on('click', function () {
    onYouTubeIframeAPIReady('UoBsiQW23IY');
    $('#player').attr(
      'src',
      'https://www.youtube.com/embed/UoBsiQW23IY?controls=0&enablejsapi=1&origin=http%3A%2F%2F172.30.1.10%3A5500&widgetid=1',
    );
  });
  $('#song7').on('click', function () {
    onYouTubeIframeAPIReady('eMZmNisWFvM');
    $('#player').attr(
      'src',
      'https://www.youtube.com/embed/eMZmNisWFvM?controls=0&enablejsapi=1&origin=http%3A%2F%2F172.30.1.10%3A5500&widgetid=1',
    );
  });

  $('#song8').on('click', function () {
    onYouTubeIframeAPIReady('eMZmNisWFvM');
    $('#player').attr(
      'src',
      'https://www.youtube.com/embed/S1JB_T6Fths?controls=0&enablejsapi=1&origin=http%3A%2F%2F172.30.1.10%3A5500&widgetid=1',
    );
  });
  
});
