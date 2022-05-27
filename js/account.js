function redirect() {
    window.location.href = "file:///Users/michaelsantos/projects/aulas-privadas/09-modulo/landpagehtml/shopping-cart.html";
}

function login() {

}

function register() {

}

anime.timeline({loop: true})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.ml15',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });