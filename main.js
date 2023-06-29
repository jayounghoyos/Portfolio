var animData = {
  wrapper: document.querySelector("#animationWindow"),
  animType: "svg",
  loop: true,
  prerender: true,
  autoplay: true,
  path: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/LEGO_loader.json",
};

var anim = bodymovin.loadAnimation(animData);
anim.setSpeed(3.4);

// Ocultar el elemento después de un tiempo determinado
setTimeout(function () {
  var animationWindow = document.querySelector("#animationWindow");
  animationWindow.style.display = "none";
}, 3000); // 3000 ms = 3 segundos

window.addEventListener("load", function () {
  setTimeout(function () {
    var loadingOverlay = document.querySelector("#loadingOverlay");
    loadingOverlay.style.display = "none";
  }, 100); // 3000 ms = 3 segundos
});
