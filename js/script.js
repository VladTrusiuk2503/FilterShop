
document.addEventListener("DOMContentLoaded", function () {

    var cards = document.querySelectorAll(".card");


    cards.forEach(function (card) {

        var titleText = card.querySelector(".card__title").textContent;


        var backgroundColor;
        switch (titleText) {
            case "Green":
                backgroundColor = "green";
                break;
            case "Blue":
                backgroundColor = "blue";
                break;
            case "Red":
                backgroundColor = "red";
                break;
            case "Yellow":
                backgroundColor = "yellow";
                break;
            case "Pink":
                backgroundColor = "pink";
                break;
            case "Orange":
                backgroundColor = "orange";
                break;
            case "Brown":
                backgroundColor = "brown";
                break;
            case "Khaki":
                backgroundColor = "khaki";
                break;
            case "Lime":
                backgroundColor = "lime";
                break;
            case "Gray":
                backgroundColor = "gray";
                break;
            case "Black":
                backgroundColor = "black";
                break;
            case "Violet":
                backgroundColor = "violet";
                break;
            default:
                backgroundColor = "white";
        }
        card.style.backgroundColor = backgroundColor;
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var startNumberInput = document.getElementById("startNumber");
    var endNumberInput = document.getElementById("endNumber");
    var colorSearch = document.getElementById("colorSearch");

    var cards = document.querySelectorAll(".card");

    startNumberInput.addEventListener("input", filterCards);
    endNumberInput.addEventListener("input", filterCards);
    colorSearch.addEventListener("input", filterCards);

    function filterCards() {
        var startNumber = parseInt(startNumberInput.value);
        var endNumber = parseInt(endNumberInput.value);
        var searchText = colorSearch.value.toLowerCase();

        cards.forEach(function(card) {
            var cardNumber = parseInt(card.getAttribute("data-number"));
            var cardColor = card.getAttribute("data-color").toLowerCase();

            var numberMatch = isNaN(startNumber) || (cardNumber >= startNumber && cardNumber <= endNumber);
            var searchMatch = cardColor.includes(searchText);

            var shouldHide = !(numberMatch && searchMatch);

            if (shouldHide) {
                card.style.display = "none";
            } else {
                card.style.display = "block";
            }
        });
    }
});

