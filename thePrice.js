//Price for the cloth, the repeat price, and the colorswap
let clothPrice = 335;
let repeatPrice = 165;
let swapPrice = 125;

//Mellantork price!


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
    1.85,
    2.25,
    3.10,
    3.60,
    4.20,
    4.90,
    5.65,
    6.05
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
        28.80,
        21.10,
        16.15,
        12.40,
        8.95,
        7.30,
        6.55,
        5.30,
        4.90
    ],
    
    colorPrice2 = [
        30.60,
        26.25,
        19.15,
        15.30,
        11.25,
        8.75,
        8.05,
        6.70,
        6.35
    ],
    
    colorPrice3 = [
        35.30,
        29.85,
        22.90,
        18.00,
        13.65,
        10.95,
        9.40,
        7.40,
        6.80
    ],
    
    colorPrice4 = [
        41.10,
        34.75,
        25.40,
        20.70,
        17.20,
        12.50,
        10.10,
        8.15,
        7.60
    ],
    
    colorPrice5 = [
        46.70,
        38.50,
        29.05,
        23.40,
        18.45,
        13.55,
        11.45,
        8.90,
        8.25
    ],
    
    colorPrice6 = [
        51.50,
        45.55,
        33.70,
        27.05,
        20.70,
        15.40,
        12.10,
        9.80,
        8.95
    ],
    
    colorPrice7 = [
        56.20,
        50.32,
        39.65,
        31.45,
        24.35,
        18.45,
        14.70,
        12.20,
        11.45
    ],
    
    colorPrice8 = [
        60.95,
        53.90,
        43.30,
        34.85,
        27.80,
        20.70,
        17.20,
        14.80,
        13.40
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