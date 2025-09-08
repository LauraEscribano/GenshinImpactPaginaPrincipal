// Obtener referencia al menú desplegable de opciones de accesibilidad
var accessibilityDropdown = document.getElementById('accessibilityOptions');

// Función para aplicar las opciones de accesibilidad
function aplicarAccesibilidad() {
    var selectedOption = accessibilityDropdown.value;

    switch (selectedOption) {
        case 'highContrast':
            // Aplicar estilo de alto contraste
            document.body.style.backgroundColor = '#000';
            document.body.style.color = '#fff';
            break;
        case 'largerText':
            // Aumentar tamaño del texto
            document.body.style.fontSize = '18px';
            break;
        case 'invertColors':
            // Invertir colores
            // Implementar lógica para invertir los colores de la página
            break;
        case 'default':
            // Restaurar estilos predeterminados
            document.body.style.backgroundColor = '';
            document.body.style.color = '';
            document.body.style.fontSize = '';
            // Implementar lógica para restaurar otros estilos predeterminados
            break;
        // Agregar más casos según las opciones de accesibilidad
    }
}

// Escuchar cambios en el menú desplegable de opciones de accesibilidad
accessibilityDropdown.addEventListener('change', aplicarAccesibilidad);
