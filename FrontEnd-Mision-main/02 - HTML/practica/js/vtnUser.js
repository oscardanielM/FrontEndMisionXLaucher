$(document).ready(function() {
    $("#btnHP").click(() => {
        $("#btnReset").click();
        swal("Excelente", "El pedido se ha realizado, en un momento nos pondremos en contacto contigo!", "success").then((value) => {
            window.location = "index.html"
          });
    })
} );