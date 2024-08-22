
  //Javascript of responsive navigation menu
  const menuBtn = document.querySelector(".menu-btn")
  const navigation = document.querySelector(".navigation")

  menuBtn.addEventListener("click", ()=> {
      menuBtn.classList.toggle("active");
      navigation.classList.toggle("active");
  });

  //Javascript for video slider navigation
  const btns = document.querySelectorAll(".nav-btn");
  const slides = document.querySelectorAll(".video-slide");
  const contents = document.querySelectorAll(".content");

  var sliderNav = function(manual){
      btns.forEach((btn) => {
          btn.classList.remove("active");
      });

      slides.forEach((slide) => {
          slide.classList.remove("active");
      });

      contents.forEach((content) => {
          content.classList.remove("active");
      });

      btns[manual].classList.add("active");
      slides[manual].classList.add("active");
      contents[manual].classList.add("active");
  }

  btns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
          sliderNav(i);
      });
  });

  // Java script das colunas

  let currentLink = ''; // A variável aloca o link corrente

  function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
    currentLink = imgs.getAttribute('data-link'); // Coloque o link na variável
  }

  function goToLink() {
    if (currentLink) {
      window.location.href = currentLink;
    }
  }

  // IMG COMPARADAS

  function initComparisons() {
      var x, i;
      /*find all elements with an "overlay" class:*/
      x = document.getElementsByClassName("img-comp-overlay");
      for (i = 0; i < x.length; i++) {
        /*once for each "overlay" element:
        pass the "overlay" element as a parameter when executing the compareImages function:*/
        compareImages(x[i]);
      }
      function compareImages(img) {
        var slider, img, clicked = 0, w, h;
        /*get the width and height of the img element*/
        w = img.offsetWidth;
        h = img.offsetHeight;
        /*set the width of the img element to 50%:*/
        img.style.width = (w / 2) + "px";
        /*create slider:*/
        slider = document.createElement("DIV");
        slider.setAttribute("class", "img-comp-slider");
        /*insert slider*/
        img.parentElement.insertBefore(slider, img);
        /*position the slider in the middle:*/
        slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
        slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
        /*execute a function when the mouse button is pressed:*/
        slider.addEventListener("mousedown", slideReady);
        /*and another function when the mouse button is released:*/
        window.addEventListener("mouseup", slideFinish);
        /*or touched (for touch screens:*/
        slider.addEventListener("touchstart", slideReady);
        /*and released (for touch screens:*/
        window.addEventListener("touchend", slideFinish);
        function slideReady(e) {
          /*prevent any other actions that may occur when moving over the image:*/
          e.preventDefault();
          /*the slider is now clicked and ready to move:*/
          clicked = 1;
          /*execute a function when the slider is moved:*/
          window.addEventListener("mousemove", slideMove);
          window.addEventListener("touchmove", slideMove);
        }
        function slideFinish() {
          /*the slider is no longer clicked:*/
          clicked = 0;
        }
        function slideMove(e) {
          var pos;
          /*if the slider is no longer clicked, exit this function:*/
          if (clicked == 0) return false;
          /*get the cursor's x position:*/
          pos = getCursorPos(e)
          /*prevent the slider from being positioned outside the image:*/
          if (pos < 0) pos = 0;
          if (pos > w) pos = w;
          /*execute a function that will resize the overlay image according to the cursor:*/
          slide(pos);
        }
        function getCursorPos(e) {
          var a, x = 0;
          e = (e.changedTouches) ? e.changedTouches[0] : e;
          /*get the x positions of the image:*/
          a = img.getBoundingClientRect();
          /*calculate the cursor's x coordinate, relative to the image:*/
          x = e.pageX - a.left;
          /*consider any page scrolling:*/
          x = x - window.pageXOffset;
          return x;
        }
        function slide(x) {
          /*resize the image:*/
          img.style.width = x + "px";
          /*position the slider:*/
          slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
        }
      }
    }

    /*Execute a function that will execute an image compare function for each element with the img-comp-overlay class:*/
  initComparisons();

  // JAVA DO FORMULÁRIO
  document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        // Exemplo de validação simples
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;

        if (nome === "" || email === "") {
            alert("Por favor, preencha todos os campos.");
            event.preventDefault();
        }
    });
  });

  /* Formulário com validação */

  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    username.addEventListener('focus', function () {
        if (!username.value) {
            usernameError.textContent = 'O nome é obrigatório.';
        }
    });

    username.addEventListener('input', function () {
        if (!username.value) {
            usernameError.textContent = 'O nome é obrigatório.';
        } else if (username.value.length < 3) {
            usernameError.textContent = 'O nome de usuário deve ter pelo menos 3 caracteres.';
        } else {
            usernameError.textContent = '';
        }
    });

    email.addEventListener('input', function () {
        if (!email.validity.valid) {
            emailError.textContent = 'Por favor, insira um endereço de email válido.';
        } else {
            emailError.textContent = '';
        }
    });

    password.addEventListener('input', function () {
        if (password.value.length < 6) {
            passwordError.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        } else {
            passwordError.textContent = '';
        }
    });

    form.addEventListener('submit', function (event) {
        if (!username.value || !email.value || !password.value) {
            event.preventDefault();
            alert('Por favor, preencha todos os campos.');
        }
    });
  });

    /* Formulário com validação */
