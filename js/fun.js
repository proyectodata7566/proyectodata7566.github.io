// Función para verificar si el iframe intenta redirigir a otra página
window.onload = function() {
    const iframe = document.getElementById('iframe');

    // Escuchar eventos de cambio de ubicación dentro del iframe
    iframe.onload = function() {
        // Acceder al documento dentro del iframe
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

        // Verificar redirección
        const checkRedirection = setInterval(function() {
            if (iframeDoc.location.href !== iframe.src) {
                iframe.src = iframeDoc.location.href; // Reestablecer el iframe a la URL inicial
            }
        }, 1000); // Verifica cada 1 segundo

        // Detener la verificación si el iframe no cambia de URL
        setTimeout(function() {
            clearInterval(checkRedirection);
        }, 5000); // Detener después de 5 segundos
    };
};
