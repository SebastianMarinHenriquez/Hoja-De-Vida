function mostrarMensaje() {
    const mensajeElemento = document.getElementById("mensaje");
    mensajeElemento.innerHTML = "BIENVENIDO BROOOOOOOOOOOOOOOOO!!!!";
}


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío por defecto del formulario
    document.getElementById('nameError').style.display = 'none';
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('messageError').style.display = 'none';

    let isValid = true;

    const name = document.getElementById('name').value;
    if (name.trim() === "") {
      document.getElementById('nameError').style.display = 'block';
      isValid = false;
    }

    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      document.getElementById('emailError').style.display = 'block';
      isValid = false;
    }

    const message = document.getElementById('message').value;
    if (message.trim() === "") {
      document.getElementById('messageError').style.display = 'block';
      isValid = false;
    }

    if (isValid) {
      alert('¡Formulario enviado con éxito!');
    }
  });
