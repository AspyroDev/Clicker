var stockElement = document.getElementById("stock");
var stockSpan = document.getElementById("stockValue");
var clickerElements = document.getElementsByClassName("clicker");

var stockValue = parseInt(stockSpan.innerHTML);

var clickAdding = 1;

stockElement.addEventListener("click", function() {addToStock()});
stockElement.addEventListener("click", function() {updateClickers()});

for (let index = 0; index < clickerElements.length; index++) {
    clickerElements[index].getElementsByClassName("upgrade")[0].addEventListener("click", function() {levelUpClicker(clickerElements[index])});
}

function addToStock() {
    stockValue = stockValue + clickAdding;
    stockSpan.innerHTML = stockValue.toString();
}

function updateClickers() {
    for (let index = 0; index < clickerElements.length; index++) {
        
        var upgradeButton = clickerElements[index].getElementsByClassName("upgrade")[0];
        var upgradeCost = clickerElements[index].getElementsByClassName("cost")[0].children[0].innerHTML;

        if (upgradeCost <= stockValue) {
            upgradeButton.style.display = "block";
        }
        else {
            upgradeButton.style.display = "none";
        }
    };
}

function levelUpClicker(clicker) {
    var clickerName = clicker.getElementsByClassName("name")[0].children[0].innerHTML;
    var clickerLevel = parseInt(clicker.getElementsByClassName("level")[0].children[1].innerHTML);
    var upgradeCost = clicker.getElementsByClassName("cost")[0].children[0].innerHTML;
    var upgradeButton = clicker.getElementsByClassName("upgrade")[0];

    console.log("upgrade " + clickerName + " from " + clickerLevel);

    clicker.getElementsByClassName("level")[0].children[1].innerHTML = clickerLevel + 1;
    clicker.getElementsByClassName("cost")[0].children[0].innerHTML = Math.ceil(upgradeCost * 1.15 + clickerLevel);

    upgradeButton.style.display = "none";
}