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
