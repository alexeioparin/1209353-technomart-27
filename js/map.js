var openMap = document.querySelector(".modal-link");
var mapB = document.querySelector(".modal-map");
var closeMap = document.querySelector(".modal-map .modal-close");

openMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapB.classList.add("modal-show");
});

closeMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapB.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (mapB.classList.contains("modal-show")) {
      evt.preventDefault();
      mapB.classList.remove("modal-show");
    }
  }
});
