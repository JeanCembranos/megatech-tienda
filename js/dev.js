function ocultarAviso() {
    document.getElementById("avisoCookies").style.display = "none";
}
function validarFormulario() {
    // Validación del nombre
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var mensaje = document.getElementById('mensaje').value;
    var select = document.getElementById('opciones').value;
    var radios = document.getElementsByName('equipos');
    var checkboxes = document.getElementsByName('horarios[]');

    // Validar que no esté vacío
    if (nombre.trim() === '' || correo.trim() === '' || mensaje.trim() === '') {
        alert('Todos los campos son obligatorios.');
        return false;
    }

    // Validar que no contenga caracteres especiales
    var regex = /[^\w\sáéíóú]/;
    if (regex.test(nombre) || regex.test(mensaje)) {
        alert('El nombre y el mensaje no pueden contener caracteres como: $, @, #, etc.');
        return false;
    }

    // Validar que el nombre no comience con un número
    if (/^\d/.test(nombre)) {
        alert('El nombre no puede comenzar con un número.');
        return false;
    }

    // Validación del correo electrónico (aunque ya hay validación con el tipo "email", agregamos una validación extra)
    var correoRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!correoRegex.test(correo)) {
        alert('Por favor ingrese un correo electrónico válido.');
        return false;
    }

    //Validar que el objeto input select no esté vacío
    if (select.value === '') {
        alert('Por favor selecciona un tema.');
        return false;
    }

    // Validación de los radio buttons
    var radioSeleccionado = false;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            radioSeleccionado = true;
            break;
        }
    }
    if (!radioSeleccionado) {
        alert('Por favor selecciona una línea de equipos.');
        return false;
    }

    // Validación de los checkboxes (horarios)
    var checkboxSeleccionado = false;
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checkboxSeleccionado = true;
            break;
        }
    }
    if (!checkboxSeleccionado) {
        alert('Por favor selecciona al menos un horario de contacto.');
        return false;
    }

    return true;
}