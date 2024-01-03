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


clickerElements[0].getElementsByClassName("upgrade")[0].addEventListener("click", function() {levelUpClickAdding(clickerElements[0])});


function addToStock(amount = clickAdding) {
    stockValue = stockValue + amount;
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
    clicker.getElementsByClassName("cost")[0].children[0].innerHTML = Math.ceil(upgradeCost * 1.3 + clickerLevel);

    upgradeButton.style.display = "none";
    
    addToStock(-upgradeCost);
    updateClickers();
}

function levelUpClickAdding(clicker) {
    var clickerLevel = parseInt(clicker.getElementsByClassName("level")[0].children[1].innerHTML);
    var levelUp = Math.ceil((clickAdding / 2) + clickerLevel);

    console.log("A click will now add " + levelUp);
    clickAdding = levelUp;
}