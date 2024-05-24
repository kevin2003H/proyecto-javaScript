document.addEventListener("DOMContentLoaded", function() {
    var quickViewButtons = document.querySelectorAll(".quick-view");

    var modal = document.getElementById("modal1");
    var modalImage = document.getElementById("modal-image1");
    var modalTitle = document.getElementById("modal-title1");
    var modalDescription = document.getElementById("modal-description1");
    var modalPrice = document.getElementById("modal-price1");
    var closeModal = document.querySelector(".close");

    quickViewButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var parentItem = button.closest(".item1");
            var imgSrc = parentItem.querySelector("img").src;
            var title = parentItem.querySelector("h1").innerText;
            var description = parentItem.querySelector("p").innerText;
            var price = parentItem.querySelector(".precio").innerText;

            modalImage.src = imgSrc;
            modalTitle.innerText = title;
            modalDescription.innerText = description;
            modalPrice.innerText = price;

            modal.classList.add("show");
        });
    });

    closeModal.addEventListener("click", function() {
        modal.classList.remove("show");
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.classList.remove("show");
        }
    });
});
