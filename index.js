var colorSlider = document.getElementById("colorAmount");
var colorOutput = document.getElementById("colorDisplay");
colorOutput.innerHTML = colorSlider.value; // Display the default slider value

var clothSlider = document.getElementById("clothAmount");
var clothOutput = document.getElementById("clothDisplay");
clothOutput.innerHTML = clothSlider.value; // Display the default slider value

var colorSwapSlider = document.getElementById("colorSwapRange");
var colorSwapOutput = document.getElementById("colorSwapDisplay");
colorSwapOutput.innerHTML = colorSwapSlider.value; // Display the default slider value

var percentageSlider = document.getElementById("percentage");
var percentageOutput = document.getElementById("percentageInput");
percentageOutput.innerHTML = percentageSlider.value; // Display the default slider value

let showColorSwap = document.getElementsByClassName("showColorSwap")


window.addEventListener("load", () => {
    let clothSelector = document.getElementById("clothTypeDropdown");
    let clothPrice = document.getElementById("clothTypePrice");

    
    clothSelector.onchange = function() {
        console.log(clothSelector.value)

        if (clothSelector.value == "select") {
            clothPrice.value = "";
            clothPrice.disabled = false;
        }
        else {
            clothPrice.value = clothSelector.value;
            clothPrice.disabled = true;
        }
        
      }

    for (let i = 0; i < typesOfCloth.length; i++) {
        let clothCreation = document.createElement("option");
        let changePriceToNumbers = typesOfCloth[i].price;
        clothCreation.innerHTML = typesOfCloth[i].name;
        clothCreation.value = Number(changePriceToNumbers);
        clothSelector.appendChild(clothCreation);
    }
})

for (let i = 0; i < showColorSwap.length; i++) {
    if (showColorSwap[i].style.display == "none") {
        showColorSwap[i].style.display = "flex"
    }
    else {
        showColorSwap[i].style.display = "none"
    }
}

// Update the current slider value (each time you drag the slider handle)
colorSlider.oninput = function() {
  colorOutput.value = this.value;
};

// Update the current slider value (each time you drag the slider handle)
clothSlider.oninput = function() {
    clothOutput.value = this.value;
};

// Update the current slider value (each time you drag the slider handle)
colorSwapSlider.oninput = function() {
    colorSwapOutput.value = this.value;
};

// Update the current slider value (each time you drag the slider handle)
percentageSlider.oninput = function() {
    percentageOutput.value = this.value;
};


function displayColorSwap() {
    let showColorSwap = document.getElementsByClassName("showColorSwap")


    for (let i = 0; i < showColorSwap.length; i++) {
        if (showColorSwap[i].style.display == "none") {
            showColorSwap[i].style.display = "flex"
        }
        else {
            showColorSwap[i].style.display = "none"
        }
    }
}




function calcuteThePrice() {

    //We enable the price input again so that we can collect info from it
    let clothPriceDis = document.getElementById("clothTypePrice");
    clothPriceDis.disabled = false;

    //The amount of clothes
    let amountCloth = document.getElementById("clothDisplay").value;
    //The amount of colors
    let amountColor = document.getElementById("colorDisplay").value;
    //If the user wants mellantryck
    let mellanTryck = document.getElementById("mellanTryck").checked;
    //If the customer is a repeat customer
    let repeatCustomer = document.getElementById("repeatCustomer").checked; 
    //If the user wants to have different types of colors
    let colorSwap = document.getElementById("colorSwap").checked;
    //How many different colors
    let amountOfColorSwap = document.getElementById("colorSwapDisplay").value;

    //Here is where we will display the price for the total and the individual cloth
    let displayThePrice = document.getElementById("displayThePrice");
    let displayThePricePerArticle = document.getElementById("displayThePricePerArticle");


    //One time payment
    let oneTimePaymentCloth = clothPrice * amountColor;
    //the price for a single cloth
    let thePricePerCloth = checkPriceForCloth();
    //the price for all clothes together
    let thePriceForAllCloth;
    //the price of all colors
    let thePriceForColor;
    //the price all put together
    let theFinalSum;

    //If the customer is a repeating customer
    if (repeatCustomer) {
        thePricePerCloth = amountColor * repeatPrice;
    }

    //we adjust the price of print depending on how many pieces of cloth we need to print.
    thePriceForAllCloth = thePricePerCloth * amountCloth;

    
    //If the user has selected mellantryck
    if (mellanTryck) {
        let priceForMellanTryck = mellanTryckArray[amountColor -1] * amountCloth;
        
        thePriceForAllCloth = priceForMellanTryck + thePriceForAllCloth;
        
    }
    
    //We check what array the color price should use;
    thePriceForColor = collectPriceFromArray(amountColor, amountCloth);
    
    //we adjust the price of color depending on how many pieces of cloth we need to print.
    thePriceForColor = thePriceForColor * amountCloth;

    //If the user has asked for multiple colors
    if (colorSwap) {
        let colorSwapCost = swapPrice * amountOfColorSwap;

        thePriceForColor = thePriceForColor + colorSwapCost;
    }

    
    //We add the color and cloth printing price
    theFinalSum = thePriceForAllCloth + thePriceForColor;

    //We add the one time payment
    theFinalSum = theFinalSum + oneTimePaymentCloth;


    //We display the price for the total and the individual sum
    displayThePrice.innerHTML = theFinalSum;
    displayThePricePerArticle.innerHTML = theFinalSum / amountCloth;

    

    //We check if the input for the price should be disabled or not
    let clothSelector = document.getElementById("clothTypeDropdown");
    
    if (clothSelector.value != "select") {
        clothPriceDis.disabled = true;
    }

}

//We use this function to check what the price of the color should be
function collectPriceFromArray(amountColor, amountCloth) {

    let thePriceArray = colorArrays[amountColor-1];
    let thePriceForColor;

    if (amountCloth <= 9) {
        thePriceForColor = thePriceArray[0];
    }
    if (amountCloth >= 10 && amountCloth <= 24) {
        thePriceForColor = thePriceArray[1];
    }
    if (amountCloth >= 25 && amountCloth <= 49) {
        thePriceForColor = thePriceArray[2];
    }
    if (amountCloth >= 50 && amountCloth <= 99) {
        thePriceForColor = thePriceArray[3];
    }
    if (amountCloth >= 100 && amountCloth <= 249) {
        thePriceForColor = thePriceArray[4];
    }
    if (amountCloth >= 250 && amountCloth <= 499) {
        thePriceForColor = thePriceArray[5];
    }
    if (amountCloth >= 500 && amountCloth <= 999) {
        thePriceForColor = thePriceArray[6];
    }
    if (amountCloth >= 1000 && amountCloth <= 2499) {
        thePriceForColor = thePriceArray[7];
    }
    if (amountCloth == 2500) {
        thePriceForColor = thePriceArray[8];
    }
    return(thePriceForColor);
}

function checkPriceForCloth() {

    let str = document.getElementById("clothTypePrice").value;

    let clothPriceEnter = str.replace(/,/g, ".");

    return clothPriceEnter;
}

function calcuteThePriceForCustomer() {
    let percentagePrice = document.getElementById("percentageInput").value;
    let test1 = document.getElementById("displayThePrice").innerHTML;
    let test2 = document.getElementById("displayThePricePerArticle").innerHTML;

    let thePriceForAll = Number(test1);
    let thePriceForOne = Number(test2);

    let displayThePriceAll = document.getElementById("displayThePriceCustomer");
    let displayThePriceOne = document.getElementById("displayThePricePerArticleCustomer");
    let displayThePriceAllMoms = document.getElementById("displayThePriceWithMoms");
    let displayThePriceOneMoms = document.getElementById("displayThePricePerArticleWithMoms");

    let percentageValue;
    let percentageInNumber;


    console.log(test1.length)

    if (percentagePrice.length <= 2) {

        console.log("test")
        percentageValue = ("1." + percentagePrice)
        percentageInNumber = Number(percentageValue);

        console.log(percentageInNumber)
        console.log(2 * percentageInNumber)

        thePriceForAll = thePriceForAll * percentageInNumber;
        thePriceForOne = thePriceForOne * percentageInNumber;
    }
    else {
        test5 = percentagePrice.substring(1);
        test6 = percentagePrice[0];
        test7 = Number(test6);
        percentageValue = test7 + 1 + "." + test5
        percentageInNumber = Number(percentageValue);

        thePriceForAll = thePriceForAll * percentageInNumber;
        thePriceForOne = thePriceForOne * percentageInNumber;
        
    }


    displayThePriceAll.innerHTML = thePriceForAll;
    displayThePriceOne.innerHTML = thePriceForOne;

    displayThePriceAllMoms.innerHTML = thePriceForAll * 1.25;
    displayThePriceOneMoms.innerHTML = thePriceForOne * 1.25;

}