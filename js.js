var stockElement = document.getElementById("stock");
var stockSpan = document.getElementById("stockValue");
var clickerElements = document.getElementsByClassName("clicker");

var stockValue = parseInt(stockSpan.innerHTML);

stockElement.addEventListener("click", function() {addToStock(1)});
stockElement.addEventListener("click", function() {updateClickers()});

function addToStock(amount) {
    stockValue = stockValue + amount;
    stockSpan.innerHTML = stockValue.toString();
}

function updateClickers() {
    for (let index = 0; index < clickerElements.length; index++) {
        console.log(clickerElements[index]);
        
        var upgradeButton = clickerElements[index].getElementsByClassName("upgrade")[0];
        var upgradeCost = clickerElements[index].getElementsByClassName("cost")[0].children[0].innerHTML;

        console.log(upgradeButton);
        console.log(upgradeCost);
        if (upgradeCost <= stockValue) {
            upgradeButton.style.display = "block";
        }
        else {
            upgradeButton.style.display = "none";
        }
    };
}