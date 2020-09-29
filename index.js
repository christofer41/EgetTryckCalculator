var colorSlider = document.getElementById("colorAmount");
var colorOutput = document.getElementById("colorDisplay");
colorOutput.innerHTML = colorSlider.value; // Display the default slider value

var clothSlider = document.getElementById("clothAmount");
var clothOutput = document.getElementById("clothDisplay");
clothOutput.innerHTML = clothSlider.value; // Display the default slider value

var colorSwapSlider = document.getElementById("colorSwapRange");
var colorSwapOutput = document.getElementById("colorSwapDisplay");
colorSwapOutput.innerHTML = colorSwapSlider.value; // Display the default slider value

let showColorSwap = document.getElementsByClassName("showColorSwap")

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
    let amountCloth = document.getElementById("clothDisplay").value;
    let amountColor = document.getElementById("colorDisplay").value;
    let mellanTryck = document.getElementById("mellanTryck").checked;
    let repeatCustomer = document.getElementById("repeatCustomer").checked; 
    let colorSwap = document.getElementById("colorSwap").checked;
    let amountOfColorSwap = document.getElementById("colorSwapDisplay").value;
    


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


    console.log(thePriceForColor);
    console.log(thePriceForAllCloth);

    
    //We add the color and cloth printing price
    theFinalSum = thePriceForAllCloth + thePriceForColor;

    theFinalSum = theFinalSum + oneTimePaymentCloth;

    alert("priset är " + theFinalSum)

    

}

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
    let clothPriceEnter = document.getElementById("clothTypePrice").value;
    let clothDropDown = document.getElementById("clothTypeDropdown");
    clothDropDown = clothDropDown.options[clothDropDown.selectedIndex].value;


    console.log(clothDropDown)
    if (clothDropDown == "select") {
        return clothPriceEnter;
    }
}