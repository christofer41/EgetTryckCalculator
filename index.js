var clothSlider = document.getElementById("clothAmount");
var clothOutput = document.getElementById("clothDisplay");
clothOutput.innerHTML = clothSlider.value; // Display the default slider value

var colorSwapSlider = document.getElementById("colorSwapRange");
var colorSwapOutput = document.getElementById("colorSwapDisplay");
colorSwapOutput.innerHTML = colorSwapSlider.value; // Display the default slider value

var percentageSlider = document.getElementById("percentage");
var percentageOutput = document.getElementById("percentageInput");
percentageOutput.innerHTML = percentageSlider.value; // Display the default slider value

var clothPercentageSlider = document.getElementById("clothPercentage");
var clothPercentageOutput = document.getElementById("clothPercentageInput");
clothPercentageOutput.innerHTML = clothPercentageSlider.value; // Display the default slider value

let showColorSwap = document.getElementsByClassName("showColorSwap")

let thePriceArray;

let thePriceForTheColors;
let thePriceForTheCloth;


alert("Hello :D")


window.addEventListener("load", () => {
    let clothSelector = document.getElementById("clothTypeDropdown");
    let clothPrice = document.getElementById("clothTypePrice");

    document.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13 || event.key == "enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("calcuteThePriceButton").click();
  }
});
    
    clothSelector.onchange = function() {

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
clothSlider.oninput = function() {
    clothOutput.value = this.value;
    calcuteThePrice()
};

// Update the current slider value (each time you drag the slider handle)
colorSwapSlider.oninput = function() {
    colorSwapOutput.value = this.value;
    calcuteThePrice()
};

// Update the current slider value (each time you drag the slider handle)
percentageSlider.oninput = function() {
    percentageOutput.value = this.value;
    calcuteThePrice()
};

// Update the current slider value (each time you drag the slider handle)
clothPercentageSlider.oninput = function() {
    clothPercentageOutput.value = this.value;
    calcuteThePrice()
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


    let percentageForCloth = document.getElementById("clothPercentageInput").value
    let percentageForClothDisplay = document.getElementById("clothTypePriceChanged");

    //We enable the price input again so that we can collect info from it
    let clothPriceDis = document.getElementById("clothTypePrice");
    clothPriceDis.disabled = false;

    //The amount of clothes
    let amountCloth = document.getElementById("clothDisplay").value;

    //If the user wants mellantryck
    let mellanTryck = document.getElementById("mellanTryck").checked;

    //If the user wants to have different types of colors
    let colorSwap = document.getElementById("colorSwap").checked;
    //How many different colors
    let amountOfColorSwap = document.getElementById("colorSwapDisplay").value;

    //Here is where we will display the price for the total and the individual cloth
    let displayThePrice = document.getElementById("displayThePrice");
    let displayThePricePerArticle = document.getElementById("displayThePricePerArticle");


    //the price for a single cloth
    let thePricePerCloth = checkPriceForCloth();
    //the price for all clothes together
    let thePriceForAllCloth;
    //the price of all colors
    let thePriceForColor;
    //the price all put together
    let theFinalSum;




    percentageForCloth = calculateThePercentage(percentageForCloth);

    let thePricePerClothUpdated = percentageForCloth * thePricePerCloth;
    percentageForClothDisplay.value = roundThePrice(thePricePerClothUpdated)


    //we adjust the price of print depending on how many pieces of cloth we need to print.

    thePriceForAllCloth = thePricePerCloth * amountCloth;
    thePriceForTheCloth = thePriceForAllCloth;

    
    //We check what array the color price should use;
    thePriceForColor = collectPriceFromColors(amountCloth);

    //If the user has asked for multiple colors
    if (colorSwap) {
        let colorSwapCost = swapPrice * amountOfColorSwap;

        thePriceForColor = thePriceForColor + colorSwapCost;
    }

    
    //We add the color and cloth printing price
    theFinalSum = thePriceForAllCloth + thePriceForColor;

    let theSumPerArticle = theFinalSum / amountCloth;

    theFinalSum = roundThePrice(theFinalSum);
    theSumPerArticle = roundThePrice(theSumPerArticle);
    //We display the price for the total and the individual sum
    displayThePrice.innerHTML = theFinalSum;
    displayThePricePerArticle.innerHTML = theSumPerArticle;
    

    //We check if the input for the price should be disabled or not
    let clothSelector = document.getElementById("clothTypeDropdown");
    
    if (clothSelector.value != "select") {
        clothPriceDis.disabled = true;
    }

    calcuteThePriceForCustomer();

}

//We use this function to check what the price of the color should be
function collectPriceFromArray(amountColor, amountCloth) {

    thePriceArray = colorArrays[amountColor-1];
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

/**
 * We collect the price of the cloth and change any semicolon to a dot
 */
function checkPriceForCloth() {

    let str = document.getElementById("clothTypePrice").value;
    let clothPriceEnter = str.replace(/,/g, ".");
    return clothPriceEnter;
}

/**
 * Here we calculate the price for the customer, depending on how many percentage the user chose
 */
function calcuteThePriceForCustomer() {
    let repeatCustomer = document.getElementById("repeatCustomer").checked; //If the customer is a repeat customer

    //If the user wants to have different types of colors
    let colorSwap = document.getElementById("colorSwap").checked;
    //How many different colors
    let amountOfColorSwap = document.getElementById("colorSwapDisplay").value;
        
    let percentagePrice = document.getElementById("percentageInput").value;
    let amountOfCloth = document.getElementById("clothDisplay").value

    percentagePrice = calculateThePercentage(percentagePrice);

    let percentageForCloth = document.getElementById("clothPercentageInput").value
    percentageForCloth = calculateThePercentage(percentageForCloth);


    let leftArmColor;
    let rightArmColor;
    let frontColor;
    let backColor;

    // //If the customer is a repeating customer
    if (repeatCustomer) {
        leftArmColor = repeatPrice * leftArmNumber;
        rightArmColor = repeatPrice * rightArmNumber;
        frontColor = repeatPrice * frontNumber;
        backColor = repeatPrice * backNumber;
    
    }else {
            //One time payment
        leftArmColor = clothPrice * leftArmNumber;
        rightArmColor = clothPrice * rightArmNumber;
        frontColor = clothPrice * frontNumber;
        backColor = clothPrice * backNumber;
    }
    
    

        let test1 = thePriceForTheCloth + leftArmColor + rightArmColor + frontColor + backColor
        test1 = (test1 * percentageForCloth)
        let test2 = (thePriceForTheColors * amountOfCloth);
        test2 = (test2 * percentagePrice);
        let test3 = test1 + test2;
    
    
        // test3 = test3 + leftArmColor + rightArmColor + frontColor + backColor;

        console.log(test1)
        console.log(test2)
        console.log(test3)

    // console.log(test1 + " + " + test2 + " + " + leftArmColor+rightArmColor+frontColor+backColor)
    // console.log(test3)


    let displayThePriceAll = document.getElementById("displayThePriceCustomer");
    let displayThePriceOne = document.getElementById("displayThePricePerArticleCustomer");
    let displayThePriceAllMoms = document.getElementById("displayThePriceWithMoms");
    let displayThePriceOneMoms = document.getElementById("displayThePricePerArticleWithMoms");


    //If the user has asked for multiple colors
    if (colorSwap) {
        let colorSwapCost = swapPrice * amountOfColorSwap;
  
        test3 = test3 + colorSwapCost;
    }
     

    thePriceForAll = roundThePrice(test3);
    thePriceForOne = test3 / amountOfCloth;
    thePriceForOne = roundThePrice(thePriceForOne);

    let thePriceForAllMoms =  thePriceForAll * 1.25;
    let thePriceForOneMoms =  thePriceForOne * 1.25;

    thePriceForAllMoms = roundThePrice(thePriceForAllMoms);
    thePriceForOneMoms = roundThePrice(thePriceForOneMoms);

    displayThePriceAll.innerHTML = thePriceForAll;
    displayThePriceOne.innerHTML = thePriceForOne;

    displayThePriceAllMoms.innerHTML = thePriceForAllMoms;
    displayThePriceOneMoms.innerHTML = thePriceForOneMoms;

}

/**
 * Here we round the price to either a full number or a .50
 * @param {the price} price 
 */
function roundThePrice(price) {

    price = Number(price);
    price = price.toFixed(1);

    let decimals = price % 1
    decimals = decimals.toFixed(1)

    price = Math.floor(price);

    let top = 0;
    let bottom = 0;

    let decimalsWholeNumber = decimals.toString();
    decimalsWholeNumber = decimalsWholeNumber.substring(1)
    decimalsWholeNumber = decimalsWholeNumber.substring(1)


    for (let i = decimalsWholeNumber ; i != 10; i++) {
        top++;
    }

    if (top < 3) {
        price = price + 1;
    }
    if (top > 7) {
        price;
    }
    else {
        price = price + 0.50;
        price = price.toFixed(2)
    }

    return price;
}

function collectPriceFromColors(amountCloth) {
    let theColorDivs = document.getElementsByClassName("printAmount");    


    let repeatCustomer = document.getElementById("repeatCustomer").checked; //If the customer is a repeat customer

    
    let leftArmColor = theColorDivs[0].value;
    let rightArmColor = theColorDivs[1].value;
    let frontColor = theColorDivs[2].value;
    let backColor = theColorDivs[3].value;

    leftArmNumber = leftArmColor;
    rightArmNumber = rightArmColor;
    frontNumber = frontColor;
    backNumber = backColor;


    if(leftArmColor == 0) {
        leftArmColor = 0;
    } else {
        leftArmColor = collectPriceFromArray(leftArmColor, amountCloth);
    }

    if(rightArmColor == 0) {
        rightArmColor = 0;
    } else {
        rightArmColor = collectPriceFromArray(rightArmColor, amountCloth);
    }

    if(frontColor == 0) {
        frontColor = 0;
    } else {
        frontColor = collectPriceFromArray(frontColor, amountCloth);
    }

    if(backColor == 0) {
        backColor = 0;
    } else {
        backColor = collectPriceFromArray(backColor, amountCloth);
    }

    
    leftArmColor = Number(leftArmColor);
    rightArmColor = Number(rightArmColor);
    frontColor = Number(frontColor);
    backColor = Number(backColor);
    
    let test5 = 0;
    // If the user has selected mellantryck
    if (mellanTryck.checked) {
        let test1 = 0;
        let test2 = 0;
        let test3 = 0;
        let test4 = 0;

        if (leftArmNumber != 0) {
            test1 = mellanTryckArray[leftArmNumber -1];
        };

        if (rightArmNumber != 0) {
            test2 = mellanTryckArray[rightArmNumber -1];
        }
        
        if (frontNumber != 0) {
            test3 = mellanTryckArray[frontNumber -1];
        }

        if (backColor != 0) {
            test4 = mellanTryckArray[backNumber -1];
        }

        test5 = test1 + test2 + test3 + test4;
        test5 = Number(test5);
    }



    let allColorsPrice = leftArmColor + rightArmColor + frontColor + backColor + test5; 
    thePriceForTheColors = allColorsPrice;
    allColorsPrice = allColorsPrice * amountCloth;




        //One time payment

        // //If the customer is a repeating customer
    if (repeatCustomer) {
        leftArmColor = repeatPrice * leftArmNumber;
        rightArmColor = repeatPrice * rightArmNumber;
        frontColor = repeatPrice * frontNumber;
        backColor = repeatPrice * backNumber;

    }else {
        //One time payment
        leftArmColor = clothPrice * leftArmNumber;
        rightArmColor = clothPrice * rightArmNumber;
        frontColor = clothPrice * frontNumber;
        backColor = clothPrice * backNumber;
    }
    

    allColorsPrice = allColorsPrice + leftArmColor + rightArmColor + frontColor + backColor;

    return allColorsPrice;
}


function calculateThePercentage(percentage) {
    let percentageValue;
    let percentageInNumber;
    if (percentage.length <= 2) {

        percentageValue = ("1." + percentage)
        percentageInNumber = Number(percentageValue);
    }
    else {
        test5 = percentage.substring(1);
        test6 = percentage[0];
        test7 = Number(test6);
        percentageValue = test7 + 1 + "." + test5
        percentageInNumber = Number(percentageValue);       
    }
    return percentageInNumber;
}