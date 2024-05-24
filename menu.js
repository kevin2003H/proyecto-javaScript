
/*meu infantil */

document.addEventListener("DOMContentLoaded", function() {
    var quickViewButtons = document.querySelectorAll(".quick-view");
    var modal4 = document.getElementById("modal4");
    var modalImage4 = document.getElementById("modal-image4");
    var modalDescription4 = document.getElementById("modal-description4");
    var modalPrice4 = document.getElementById("modal-price4");
    var closeModal4 = document.querySelector(".close");


    quickViewButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var parentItem = button.closest(".item4");
            var imgSrc = parentItem.querySelector("img").src;
            var description = parentItem.querySelector("h1").innerText;
            var price = parentItem.querySelector(".precio").innerText;

            // Actualizar los elementos del modal con la información obtenida
            modalImage4.src = imgSrc;
            modalDescription4.innerText = description;
            modalPrice4.innerText = price;
            
            // Mostrar el modal
            modal4.style.display = "block";
        });
    });

    // Evento para cerrar el modal cuando se hace clic en el botón de cerrar
    closeModal4.addEventListener("click", function() {
        modal4.style.display = "none";
    });

    // Evento para cerrar el modal cuando se hace clic fuera del mismo
    window.addEventListener("click", function(event) {
        if (event.target == modal4) {
            modal4.style.display = "none";
        }
    });

});



/*Bebidas */
document.addEventListener("DOMContentLoaded", function() {
    var quickViewButtons = document.querySelectorAll(".quick-view");
    var modal5 = document.getElementById("modal5");
    var modalImage5 = document.getElementById("modal-image5");
    var modalTitle5 = document.getElementById("modal-title5");
    var modalDescription5 = document.getElementById("modal-description5");
    var modalPrice5 = document.getElementById("modal-price5");
    var closeModal5 = modal5.querySelector(".close");

    quickViewButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var parentItem = button.closest(".item5");
            var imgSrc = parentItem.querySelector("img").src;
            var title = parentItem.querySelector("h1").innerText;
            var description = parentItem.querySelector("p").innerText;
            var price = parentItem.querySelector(".precio").innerText;

            modalImage5.src = imgSrc;
            modalTitle5.innerText = title;
            modalDescription5.innerText = description;
            modalPrice5.innerText = price;
            modal5.classList.add("show");
        });
    });

    closeModal5.addEventListener("click", function() {
        modal5.classList.remove("show");
    });

    window.addEventListener("click", function(event) {
        if (event.target == modal5) {
            modal5.classList.remove("show");
        }
    });
});

