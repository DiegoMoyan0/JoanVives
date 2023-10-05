  // Función para animar el número gradualmente
  function animateNumber(targetElement, targetNumber) {
    const duration = 2000; // Duración de la animación en milisegundos
    const steps = 100; // Cantidad de pasos en la animación
    const increment = targetNumber / steps;
    let currentNumber = 0;

    function updateNumber() {
      currentNumber += increment;
      targetElement.textContent = Math.floor(currentNumber);

      if (currentNumber < targetNumber) {
        requestAnimationFrame(updateNumber);
      } else {
        targetElement.textContent = "+" + targetNumber;
      }
    }

    updateNumber();
  }

  // Función para verificar si un elemento está en la vista del usuario
  function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Función para manejar el evento scroll
  function handleScroll() {
    const number1 = document.getElementById("number-1");
    const number2 = document.getElementById("number-2");

    if (isElementInViewport(number1) && !number1.dataset.animated) {
      animateNumber(number1, 5000);
      number1.dataset.animated = true; // Marcar como animado
    }

    if (isElementInViewport(number2) && !number2.dataset.animated) {
      animateNumber(number2, 100);
      number2.dataset.animated = true; // Marcar como animado
    }
  }



  // Escuchar el evento scroll
  window.addEventListener("scroll", handleScroll);

  const terminos = document.getElementById("terminos");
  const terminos2 = document.getElementById("terminos2");
  const popup = document.getElementById("popup");
  const closePopupButton = document.getElementById("close-popup");

  terminos.addEventListener("click", function (e) {
      e.preventDefault(); // Evita que el enlace siga el URL
      showPopup();
  });

  terminos2.addEventListener("click", function (e) {
      e.preventDefault(); // Evita que el enlace siga el URL
      showPopup();
  });

  closePopupButton.addEventListener("click", function () {
      closePopup();
  });

  function showPopup() {
      popup.style.display = "block";
  }

  function closePopup() {
      popup.style.display = "none";
  }

  function validateForm() {
    var nombre = document.getElementById("InputName").value;
    var email = document.getElementById("exampleInputEmail1").value;

    var checkBox = document.getElementById("termsCheckbox").checked;
    if (nombre === "" || email === "" || !checkBox) {
        // Mostrar el modal de Bootstrap en lugar de la alerta.
        var modal = new bootstrap.Modal(document.getElementById('myModal'));
        modal.show();
        return false; // Detener el envío del formulario.
    }
    return true; // Continuar con el envío del formulario.
}

  function validateForm2() {
    var nombre2 = document.getElementById("InputName2").value;
    var email2 = document.getElementById("exampleInputEmail2").value;

    var checkBox2 = document.getElementById("termsCheckbox2").checked;
    if (nombre2 === "" || email2 === "" || !checkBox2) {
        // Mostrar el modal de Bootstrap en lugar de la alerta.
        var modal = new bootstrap.Modal(document.getElementById('myModal'));
        modal.show();
        return false; // Detener el envío del formulario.
    }
    return true; // Continuar con el envío del formulario.
}