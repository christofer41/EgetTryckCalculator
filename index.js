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

let thePriceArray;


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

    // //If the customer is a repeating customer
    // if (repeatCustomer) {
    //     thePricePerCloth = amountColor * repeatPrice;
    // }

    //we adjust the price of print depending on how many pieces of cloth we need to print.
    thePriceForAllCloth = thePricePerCloth * amountCloth;

    
    //If the user has selected mellantryck
    // if (mellanTryck) {
    //     let priceForMellanTryck = mellanTryckArray[amountColor -1] * amountCloth;
        
    //     thePriceForAllCloth = priceForMellanTryck + thePriceForAllCloth;
        
    // }
    
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

    console.log(thePriceArray)

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




    if (percentagePrice.length <= 2) {

        percentageValue = ("1." + percentagePrice)
        percentageInNumber = Number(percentageValue);

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

    thePriceForAll = roundThePrice(thePriceForAll);
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
    let theColorDivs = document.getElementsByClassName("printAmount");    //If the customer is a repeat customer

    let repeatCustomer = document.getElementById("repeatCustomer").checked; 

    
    let leftArmColor = theColorDivs[0].value;
    let rightArmColor = theColorDivs[1].value;
    let frontColor = theColorDivs[2].value;
    let backColor = theColorDivs[3].value;

    let leftArmNumber = leftArmColor;
    let rightArmNumber = rightArmColor;
    let frontNumber = frontColor;
    let backNumber = backColor;

    
    console.log(leftArmColor)

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
    
    
    console.log(leftArmColor);
    console.log(rightArmColor);
    console.log(frontColor);
    console.log(backColor);
    
    
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

    console.log(test5 + " test5")



    let allColorsPrice = leftArmColor + rightArmColor + frontColor + backColor + test5; 
    allColorsPrice = allColorsPrice * amountCloth;


        //One time payment

        // //If the customer is a repeating customer
    if (repeatCustomer) {
        leftArmColor = repeatPrice * leftArmNumber;
        rightArmColor = repeatPrice * rightArmNumber;
        frontColor = repeatPrice * frontNumber;
        backColor = repeatPrice * backNumber;

        console.log(frontColor + " repeat")
    }else {
        //One time payment
        leftArmColor = clothPrice * leftArmNumber;
        rightArmColor = clothPrice * rightArmNumber;
        frontColor = clothPrice * frontNumber;
        backColor = clothPrice * backNumber;
        console.log(frontColor + " noRepeat")
    }
    


    allColorsPrice = allColorsPrice + leftArmColor + rightArmColor + frontColor + backColor;

    console.log(allColorsPrice + " with One time pay");

    return allColorsPrice;

    // console.log(thePriceArray)
}


    // //If the customer is a repeating customer
    // if (repeatCustomer) {
    //     thePricePerCloth = amountColor * repeatPrice;
    // }

    
