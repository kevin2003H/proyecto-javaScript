document.addEventListener('DOMContentLoaded', function() {
    var quickViewButtons = document.querySelectorAll('.quick-view');
    var modal = document.getElementById('modal3');
    var modalImage = document.getElementById('modal-image3');
    var modalTitle = document.getElementById('modal-title3'); // Añadido para el título
    var modalDescription = document.getElementById('modal-description3');
    var modalPrice = document.getElementById('modal-price3');
    var closeModal = document.querySelector('.close-button');

    quickViewButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var itemContent = this.closest('.item3');
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
