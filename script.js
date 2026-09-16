// script.js
// Animaciones con jQuery + validación del formulario de contacto con JavaScript

$(document).ready(function () {

    // 1) Animación de entrada: la barra lateral y el contenido aparecen con un fundido suave
    $('.sidebar, .main-content').hide().fadeIn(700);

    // 2) Dinamismo: resaltar con sombra las tarjetas de experiencia/educación al pasar el mouse
    $('.job, .education').hover(
        function () {
            $(this).addClass('shadow-sm');
        },
        function () {
            $(this).removeClass('shadow-sm');
        }
    );

    // 3) Validación del formulario de contacto (solo existe en contacto.html)
    const $form = $('#contactForm');

    if ($form.length) {
        $form.on('submit', function (event) {
            const form = this;

            // Evita que la página se recargue al enviar
            event.preventDefault();
            event.stopPropagation();

            // checkValidity() usa las reglas HTML5 (required, type="email", minlength)
            if (form.checkValidity() === false) {
                $form.addClass('was-validated');
                $('#formSuccess').addClass('d-none');
                return;
            }

            // Si todo es válido, mostramos el mensaje de éxito y limpiamos el formulario
            $('#formSuccess').removeClass('d-none');
            form.reset();
            $form.removeClass('was-validated');
        });

        // Vuelve a validar en tiempo real mientras el usuario escribe
        $form.find('input, textarea').on('input', function () {
            if ($form.hasClass('was-validated')) {
                this.checkValidity();
            }
        });
    }

});
