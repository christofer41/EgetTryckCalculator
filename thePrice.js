//Price for the cloth, the repeat price, and the colorswap
let clothPrice = 335;
let repeatPrice = 165;
let swapPrice = 125;


    //Mellantork!
    //It is layed up like this:

    /*
    mellanTryckArray = [
        1 color,
        2 colors,
        3 colors,
        4 colors,
        5 colors,
        6 colors,
        7 colors,
        8 colors
    ]

    OBS! IMPORTANT NOTES!!!!
    1. Use a dot and NOT a comma!
    . = YES          , = NO

    2. A Comma is used to seperate the prices!
        99.99,      <---- like this
    */


let mellanTryckArray = [
    1.85,    //1 färger,
    2.25,    //2 färger,
    3.10,    //3 färger,
    3.60,    //4 färger,
    4.20,    //5 färger,
    4.90,    //6 färger,
    5.65,    //7 färger,
    6.05     //8 färger
]



let colorArrays = [

    //It is layed up like this:

    /*
    colorPrice[amount of colors] = [
        1 - 9,
        10 - 24,
        25 - 49,
        50 - 99,
        100 - 249,
        250 - 499,
        500 - 999,
        1000 - 2499,
        2500
    ]

    OBS! IMPORTANT NOTES!!!!
    1. Use a dot and NOT a comma!
    . = YES          , = NO

    2. A Comma is used to seperate the prices!
        99.99,      <---- like this
    */

    colorPrice1 = [
        28.80,    //1 - 9,
        21.10,    //10 - 24,
        16.15,    //25 - 49,
        12.40,    //50 - 99
        8.95,     //100 - 249
        7.30,     //250 - 499
        6.55,     //500 - 999
        5.30,     //1000 - 2499
        4.90      //2500
    ],
    
    colorPrice2 = [
        30.60,    //1 - 9,
        26.25,    //10 - 24,
        19.15,    //25 - 49,
        15.30,    //50 - 99
        11.25,    //100 - 249
        8.75,     //250 - 499
        8.05,     //500 - 999
        6.70,     //1000 - 2499
        6.35      //2500
    ],
    
    colorPrice3 = [
        35.30,    //1 - 9,
        29.85,    //10 - 24,
        22.90,    //25 - 49,
        18.00,    //50 - 99
        13.65,    //100 - 249
        10.95,    //250 - 499
        9.40,     //500 - 999
        7.40,     //1000 - 2499
        6.80      //2500
    ],
    
    colorPrice4 = [
        41.10,    //1 - 9,
        34.75,    //10 - 24,
        25.40,    //25 - 49,
        20.70,    //50 - 99
        17.20,    //100 - 249
        12.50,    //250 - 499
        10.10,    //500 - 999
        8.15,     //1000 - 2499
        7.60      //2500
    ],
    
    colorPrice5 = [
        46.70,    //1 - 9,
        38.50,    //10 - 24,
        29.05,    //25 - 49,
        23.40,    //50 - 99
        18.45,    //100 - 249
        13.55,    //250 - 499
        11.45,    //500 - 999
        8.90,     //1000 - 2499
        8.25      //2500
    ],
    
    colorPrice6 = [
        51.50,    //1 - 9,
        45.55,    //10 - 24,
        33.70,    //25 - 49,
        27.05,    //50 - 99
        20.70,    //100 - 249
        15.40,    //250 - 499
        12.10,    //500 - 999
        9.80,     //1000 - 2499
        8.95      //2500
    ],
    
    colorPrice7 = [
        56.20,    //1 - 9,
        50.32,    //10 - 24,
        39.65,    //25 - 49,
        31.45,    //50 - 99
        24.35,    //100 - 249
        18.45,    //250 - 499
        14.70,    //500 - 999
        12.20,    //1000 - 2499
        11.45     //2500
    ],
    
    colorPrice8 = [
        60.95,    //1 - 9,
        53.90,    //10 - 24,
        43.30,    //25 - 49,
        34.85,    //50 - 99
        27.80,    //100 - 249
        20.70,    //250 - 499
        17.20,    //500 - 999
        14.80,    //1000 - 2499
        13.40     //2500
    ],    


];


let typesOfCloth = [
    one = {
        name: "Gildan t-shirt 5000",
        price: 19.5
    },
    two = {
        name: "Gildan t-shirt 64000",
        price: 19.5
    },
    three = {
        name: "Gildan Sweatshirt 18000",
        price: 56
    },
    four = {
        name: "Gildan Hoodie 18500",
        price: 78
    },
    five = {
        name: "Gildan Ziphoodie 18600",
        price: 113
    },
    six = {
        name: "B&C King/Queen Crew Neck",
        price: 91
    },
    seven = {
        name: "B&C King/Queen Hooded",
        price: 120
    },
    eight = {
        name: "B&C King/Queen Zipped Hood",
        price: 146
    },
    nine = {
        name: "B&C Organic Crew Neck",
        price: 81
    },
    ten = {
        name: "B&C Organic Hooded",
        price: 103
    },
    eleven = {
        name: "B&C Organic Zipped Hood",
        price: 124
    },
    twelve = {
        name: "Tygkasse WM101",
        price: 10
    },
    thirteen = {
        name: "TriDri Performance T-shirt",
        price: 30
    },
    fourteen = {
        name: "Urban Classics Hoodie TB014",
        price: 175
    },
    fifteen = {
        name: "Urban Classics Ziphood TB014C",
        price: 195
    },
]