let filterItem = document.querySelector('.items-links'); // Correction pour correspondre à la classe HTML
let filterImages = document.querySelectorAll('.project-img'); // Correction du nom de la variable

window.addEventListener('load', () => {
    filterItem.addEventListener('click', (event) => {
        if (event.target.classList.contains('item-link')) {
            // Mise à jour de la classe active
            document.querySelector('.menu-active').classList.remove('menu-active');
            event.target.classList.add('menu-active');

            // Récupération du filtre sélectionné
            let filterName = event.target.getAttribute('data-name');

            // Filtrage des images
            filterImages.forEach((image) => {
                let imageName = image.querySelector('img').getAttribute('data-name').toLowerCase(); // Harmonisation des cases
                if (filterName.toLowerCase() === 'all' || filterName.toLowerCase() === imageName) {
                    image.parentElement.style.display = 'block'; // Afficher les images correspondantes
                } else {
                    image.parentElement.style.display = 'none'; // Masquer les autres
                }
            });
        }
    });
});


function sendMail(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupérer le formulaire
    const form = document.getElementById("contact-form");

    // Vérifiez si le formulaire est valide
    if (!form.checkValidity()) {
        alert("Veuillez remplir tous les champs requis correctement.");
        return false; // Ne pas envoyer le formulaire
    }

    let parms = {
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email").value,
        number : document.getElementById("tel").value,
        message : document.getElementById("message").value
    };

    emailjs.send("service_vjnrkmh", "template_0itb4v9", parms)
        .then(function (res) {
            alert("Success! Your message has been sent. Status: " + res.status);
            form.reset(); // Réinitialise le formulaire après succès
        })
        .catch(function (err) {
            alert("Failed to send email. Please try again later. Error: " + err);
        });
}
document.getElementById("contact-form").addEventListener("submit", sendMail);