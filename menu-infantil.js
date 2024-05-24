document.addEventListener('DOMContentLoaded', function() {
    var quickViewButtons = document.querySelectorAll('.quick-view');
    var modal = document.getElementById('modal4');
    var modalImage = document.getElementById('modal-image4');
    var modalTitle = document.getElementById('modal-title4'); // Añadido para el título
    var modalDescription = document.getElementById('modal-description4');
    var modalPrice = document.getElementById('modal-price4');
    var closeModal = document.querySelector('.close-button');

    quickViewButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var itemContent = this.closest('.item4');
            var imgSrc = itemContent.querySelector('img').src;
            var title = itemContent.querySelector('h1').innerText; // Añadido para obtener el título
            var description = itemContent.querySelector('p').textContent;
            var price = itemContent.querySelector('.precio').textContent;

            modalImage.src = imgSrc;
            modalTitle.innerText = title; // Añadido para configurar el título en el modal
            modalDescription.textContent = description;
            modalPrice.textContent = price;

            modal.classList.add('show');
        });
    });

    closeModal.addEventListener('click', function() {
        modal.classList.remove('show');
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('show');
        }
    });
});