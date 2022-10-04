const traveller = {
  elements: {
    modalBox: document.getElementById("modalBox"),
    navBar: document.getElementById("textAnimate"),
    textAnimate: document.getElementById("textAnimate"),
  },
  menuToggle: function (e) {
    navBar.classList.toggle("active");
    e.classList.toggle("active");
  },
  dialog: {
    show: function (msg) {
      traveller.elements.modalBox.querySelector('h4').innerHTML = msg;
      traveller.elements.modalBox.classList.add("active");
    },
    hide: function () {
      traveller.elements.modalBox.classList.remove("active");
    },
  }
};
