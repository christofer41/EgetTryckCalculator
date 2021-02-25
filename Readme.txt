
OBS! Viktiga Saker!!!!
    1. Använd en punk för att sätta ören!
    . = YES          , = NO
	99.99       <------ Såhär!

    2. Använd ett komma tecken för att separera priserna!
        99.99,      <------ Såhär!


Så längst upp så finns det 3 linjer av kod som ser ut såhär:


let clothPrice = xxx
let repeatPrice = xxx
let swapPrice = xxx

Den första är baspriset för själva tyget.
Den andra är priset för repeat kund.
Och den tredje är priset för ett färgbyte.





Sedan under det så finns Mellantork, och den ser ut såhär:
OBS PRISERNA KAN VARA ANNORLUNDA ÄN NÄR DEN SKREVS!

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



Alla priserna ligger i en så kallad ARRAY, det gör så att programmet kan lätt hitta rätt och använda sig av rätt pris.
Så här är priserna upplagda:

let mellanTryckArray = [
        1 färg,
        2 färger,
        3 färger,
        4 färger,
        5 färger,
        6 färger,
        7 färger,
        8 färger
    ]


så om vi skulle ändra t.ex priset för 4 färger på listan vi har ovanför, så ändrar vi priset "3.60" till det som vi vill ändra till.


Sedan så har vi färg priset och det ser ut såhär:



let colorArrays = [


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

 OSV....

}

Nu det är upplagt så att numret efter colorPrice representerar antalet färger.
Det är upplagt såhär:

    colorPrice[Nummer av färger här] = [
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


så om vi vill ändra priset för 2 färger med 50 - 99 antal så kollar vi i listan.

2 färger betyder att den ligger på colorPrice2.
Och sedan så börjar den på 1-9 och går neråt, så vi räknar av.

    colorPrice2 = [
        30.60, = 1 - 9
        26.25, = 10 - 24
        19.15, = 25 - 49
        15.30, = 50 - 99          << HÄR HAR VI DEN!!
        11.25,
        8.75,
        8.05,
        6.70,
        6.35
    ],


Så fungerar det hela!