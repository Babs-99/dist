document.addEventListener('DOMContentLoaded', function () {
  
    menuLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
  
        // Staggered animation for hobby items
        const hobbiesListItems = document.querySelectorAll('.hobbiesList li');
  
        anime({
          targets: hobbiesListItems,
          opacity: [0, 1],
          translateY: [30, 0],
          easing: 'easeInOutQuad',
          duration: 800,
          delay: anime.stagger(100, { start: 300 }), // Stagger by 100ms, starting from 300ms
        });
  
        document.body.classList.toggle('page-clicked');
      });
    });
  });