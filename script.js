document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".contact-form button");
    button.addEventListener("click", function(event) {
        event.preventDefault();
        alert("Pesan Anda telah dikirim!");
    });
});
