document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.getElementById('formSugerencia');
  const mensaje = document.getElementById('mensajeConfirmacion');

  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    // Aquí, por ahora, solo mostramos un mensaje de confirmación en pantalla.
    // Como el sitio es solo front-end, no se envía a ningún servidor.
    mensaje.textContent = '¡Gracias! Tu sugerencia fue registrada con éxito.';

    formulario.reset();
  });
});
