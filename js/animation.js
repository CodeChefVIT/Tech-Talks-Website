anime.timeline({loop: true})
  .add({
    targets: '.home_title h1 span',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.home_title',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 10000000000
  });


  