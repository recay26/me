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
