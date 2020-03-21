var openForm = document.querySelector(".modal-form-link");
var questionForm = document.querySelector(".modal-question");
var closeForm = document.querySelector(".modal-question .modal-close");
var pointName = questionForm.querySelector("[name=name]");
var pointPassword = questionForm.querySelector("[name=e-mail]");
var pointTextarea = questionForm.querySelector("[name=question]");
var form = questionForm.querySelector("form");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
}
catch (err) {
  isStorageSupport = false;
}
                      

openForm.addEventListener("click", function(evt) {
  evt.preventDefault();
  questionForm.classList.add("modal-show");
  if (storage) {
    pointName.value = storage;
    pointPassword.focus();
  }
  else {
    pointName.focus();
  }
});

closeForm.addEventListener("click", function(evt) {
  evt.preventDefault();
  questionForm.classList.remove("modal-show");
});

form.addEventListener("submit", function(evt) {
  if (!pointName.value || !pointPassword.value || !pointTextarea.value) {
    evt.preventDefault();
    console.log("ввести данные");
  }
  else {
    localStorage.setItem("login", pointName.value);
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (questionForm.classList.contains("modal-show")) {
      evt.preventDefault();
      questionForm.classList.remove("modal-show");
    }
  }
})
