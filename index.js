// style btns
const style1Button = document.getElementById("style-btn-1");
const style2Button = document.getElementById("style-btn-2");

// style area
const styleArea = document.getElementById("style-choosing");

// class area
const classArea = document.getElementById("class-choosing");
const classArea1 = document.getElementById("class-choosing-1");
const classArea2 = document.getElementById("class-choosing-2");

// class btns
// 1
const warrior1Btn = document.getElementById("class-btn-1-1");
const ranger1Btn = document.getElementById("class-btn-1-2");
const mage1Btn = document.getElementById("class-btn-1-3");
// 2
const warrior2Btn = document.getElementById("class-btn-2-1");
const ranger2Btn = document.getElementById("class-btn-2-2");
const mage2Btn = document.getElementById("class-btn-2-3");

// class imgs
// 1
const warrior1Img = document.getElementById("warrior-img-1");
const ranger1Img = document.getElementById("ranger-img-1");
const mage1Img = document.getElementById("mage-img-1");
// 2
const warrior2Img = document.getElementById("warrior-img-2");
const ranger2Img = document.getElementById("ranger-img-2");
const mage2Img = document.getElementById("mage-img-2");

// landing page header
const welcomeHeader = document.getElementById("game-logo-start");

// main game area
const mainArea = document.getElementById("main-game-area");

// win game area
const winArea = document.getElementById('won-game');

// background img
const backgroundImg = ''

// main game img
let mainImage = document.getElementById("player-img-1");
let actionImage = document.getElementById("action-main-img");
let opponentImage = document.getElementById("opponent-img-1");
let campImage = document.getElementById("camp-img");
let tradingPostImage = document.getElementById("tp-img");

// main game stats
let playerHpCurr = document.getElementById("p-hp-curr");
let playerMpCurr = document.getElementById("p-mp-curr");
let playerHpTotal = document.getElementById("p-hp-total");
let playerMpTotal = document.getElementById("p-mp-total");

// main game afflictions
const poisonToggle = document.getElementById("psn-status");
const atkToggle = document.getElementById("atk-status");
const defToggle = document.getElementById("def-status");

// start button
const startButton = document.getElementById("start-btn");

// player actions
const hitBtn = document.getElementById("hit-btn");
const eatBtn = document.getElementById("eat-btn");
const runBtn = document.getElementById("run-btn");
const bagBtn = document.getElementById("bag-btn");

// spells
const spell1Btn = document.getElementById("spell-1");
const spell2Btn = document.getElementById("spell-2");

// bag table
const bagHeader = document.getElementById("bag-bag");
const bagTable = document.getElementById("player-bag");

// decision button groups
const travelButtons = document.getElementById("decisions");
const tradingPostButtons = document.getElementById("decisions-tp");
const campButtons = document.getElementById("decisions-camp");

// under btn headers
const travelBtnHeaders = document.getElementById("btn-headers");

// travel buttons
const goCampBtn = document.getElementById("camp-btn");
const goTradingPostBtn = document.getElementById("tp-btn");
const goTravelBtn = document.getElementById("travel-btn");

// camp buttons
const restBtn = document.getElementById("rest-btn");
const getFoodBtn = document.getElementById("food-btn");
const storeGoldBtn = document.getElementById("store-gold-btn");

// trading post buttons
const buyItemsBtn = document.getElementById("buy-btn");
const gambleBtn = document.getElementById("gamble-btn");
const hireBtn = document.getElementById("hire-btn");

// middle buttons
const middleButtons = document.getElementById("event-btn-area");

// gambling buttons
const gambleButtons = document.getElementById("gamble-btns");

// shop buttons
const shopButtons = document.getElementById("shop-btns");

// hire buttons
const hireButtons = document.getElementById('hire-btn-area');
// scout buttons
const scout1 = document.getElementById('scout-1');
const scout2 = document.getElementById('scout-2');
const showReport = document.getElementById('show-foe');

// opponent / envi imgs
const rightImg = document.getElementById("opponent-img-1");

// opponent stat box
const opponentStats = document.getElementById('opponent-stats-box');
const opponentPsnStatus = document.getElementById('psn-status-o');

// player stats - info
let style = 0; // 1 or 2
let playerClass = '' // warrior, ranger, or mage
let currLocation = '' // players curr location
let HP = 0;
let maxHP = 0;
let MP = 0;
let maxMP = 0;
let firstTimeTP = 0;
let maxHit = 50;
let wonGame = 0;

// Afflictions
let playerPsn = 0;
let playerAtkUp = 0;
let playerDefDown = 0;
let playerDoubleDamage = 0;
let playerStealthed = 0;
let wellRested = 1;

// opponent afflictions
let opponentPsn = 0;
let opponentAtkUp = 0;
let opponentDefDown = 0;
let opponentDOT = 0;
let opponentAttacksHalved = 0;

// keep track of traveling and force going back camp
let currentlyTraveling = 0;
let forceGoBackCamp = 0;

// keeping track of hiring scouts, can only before battle
let justHired = 0;

// current monster => 0 is slime
let currentMonster = 0;

const currentMonsterText = document.getElementById('curr-monst-text');

// opponent stats
let opponentHP = 0;
let opponentHPMax = 0;
let opponentHPText = document.getElementById('o-hp-curr');
let opponentHPMaxText = document.getElementById('o-hp-total');

let opponentMP = 5;
let opponentMPMax = 5;
let opponentMPText = document.getElementById('o-mp-curr');
let opponentMPMaxText = document.getElementById('o-mp-total');

let testMP = 10;

// player spells
let spell1Ready = 0
let spell2Ready = 0

// bag
let playerBag = 0;

// gold stored
let playerGoldCurr = document.getElementById("p-gold-curr");
let playerGoldStoredWhole = document.getElementById("p-gold-stored");
let playerGoldStored = document.getElementById("p-gold-stored-curr");

// storeGold 0 === none stored, storeGold 1 === gold stored
let storeGold = 0;

let storedGold = 0;
let gold = 1000;
playerGoldCurr.innerText = gold;

// monster info / stats => stats will be adjusted

const monsters = [

    { name: 'small slime', hit: 20, health: 200, poisons: 'No', defDebuff: 'No' },
    { name: 'unaffiliated rogue', hit: 30, health: 300, poisons: 'Yes', defDebuff: 'Yes' },
    { name: 'skeleton general', hit: 40, health: 400, poisons: 'Yes', defDebuff: 'No' },
    { name: 'orge grunt', hit: 50, health: 500, poisons: 'No', defDebuff: 'Yes' },
    { name: 'red dragon', hit: 70, health: 700, poisons: 'Yes', defDebuff: 'No' },
    { name: 'Phantom Hourglass', hit: 90, health: 900, poisons: 'Yes', defDebuff: 'No' }

];

// location list

let playerNextLocation = 0;

const locations = [

    { name: 'pasture' },
    { name: 'vacant alley' },
    { name: 'cemetery' },
    { name: 'dark cave' },
    { name: 'lower dungeon' },
    { name: 'time realm' }

];

// bag buttons
const bagItem1 = document.getElementById("inv-btn-1");
const bagItem2 = document.getElementById("inv-btn-2");
const bagItem3 = document.getElementById("inv-btn-3");
const bagItem4 = document.getElementById("inv-btn-4");
const bagItem5 = document.getElementById("inv-btn-5");
const bagItem6 = document.getElementById("inv-btn-6");
const bagItem7 = document.getElementById("inv-btn-7");
const bagItem8 = document.getElementById("inv-btn-8");
const bagItem9 = document.getElementById("inv-btn-9");

// bag images
const bagImg1 = document.getElementById("item-img-1");
const bagImg2 = document.getElementById("item-img-2");
const bagImg3 = document.getElementById("item-img-3");
const bagImg4 = document.getElementById("item-img-4");
const bagImg5 = document.getElementById("item-img-5");
const bagImg6 = document.getElementById("item-img-6");
const bagImg7 = document.getElementById("item-img-7");
const bagImg8 = document.getElementById("item-img-8");
const bagImg9 = document.getElementById("item-img-9");

let bagContents = [0, 0, 0, 0, 0, 0, 0, 0, 0];

// amount of each item
let breadAmount = 0;
let juiceAmount = 0;
let meatAmount = 0;
let poisonCureAmount = 0;
let healthPotionAmount = 0;
let manaPotionAmount = 0;
let attackUpAmount = 0;
let spell1ReplenishAmount = 0;
let spell2ReplenishAmount = 0;


// all bag btns
const bagButtons = document.querySelectorAll("button.inv-button");

function putInBag(value, amount) {
    if (bagContents.includes(value)) {
        switch (value) {
            case 1:
                breadAmount += amount
                break;
            case 2:
                juiceAmount += amount
                break;
            case 3:
                meatAmount += amount
                break;
            case 4:
                poisonCureAmount += amount
                break;
            case 5:
                healthPotionAmount += amount
                break;
            case 6:
                manaPotionAmount += amount
                break;
            case 7:
                attackUpAmount += amount
                break;
            case 8:
                spell1ReplenishAmount += amount
                break;
            case 9:
                spell2ReplenishAmount += amount
                break;
            default:
                breadAmount++
                break;
        } // end switch
    } else {
        let itemRecieved = 0;
        for (let i = 0; itemRecieved < 1; i++)
            if (bagContents[i] === 0) {
                itemRecieved++
                bagContents[i] = value;
                switch (value) {
                    case 1:
                        breadAmount += amount
                        break;
                    case 2:
                        juiceAmount += amount
                        break;
                    case 3:
                        meatAmount += amount
                        break;
                    case 4:
                        poisonCureAmount += amount
                        break;
                    case 5:
                        healthPotionAmount += amount
                        break;
                    case 6:
                        manaPotionAmount += amount
                        break;
                    case 7:
                        attackUpAmount += amount
                        break;
                    case 8:
                        spell1ReplenishAmount += amount
                        break;
                    default:
                        spell2ReplenishAmount += amount
                        break;
                } // end switch
            } // end if loop
    } // end for loop
} // end func

// [0, 3, 5, 2, 1, 0, 6]


// func for taking items out of bag
const removeFromBag = (item) => {
    switch (item) {
        case 1:
            if (breadAmount === 0) {
                for (let i = 0; i < bagContents.length; i++) {
                    if (bagContents[i] === 1) {
                        bagContents[i] = 0;
                    } // end if
                } // end for
            } // end case
            break;
        case 2:
            if (juiceAmount === 0) {
                for (let i = 0; i < bagContents.length; i++) {
                    if (bagContents[i] === 2) {
                        bagContents[i] = 0;
                    } // end if
                } // end for
            } // end case
            break;
        case 3:
            if (meatAmount === 0) {
                for (let i = 0; i < bagContents.length; i++) {
                    if (bagContents[i] === 3) {
                        bagContents[i] = 0;
                    } // end if
                } // end for
            } // end case
            break;
        case 4:
            if (poisonCureAmount === 0) {
                for (let i = 0; i < bagContents.length; i++) {
                    if (bagContents[i] === 4) {
                        bagContents[i] = 0;
                    } // end if
                } // end for
            } // end case
            break;
        case 5:
            if (healthPotionAmount === 0) {
                for (let i = 0; i < bagContents.length; i++) {
                    if (bagContents[i] === 5) {
                        bagContents[i] = 0;
                    } // end if
                } // end for
            } // end case
            break;
        case 6:
            if (manaPotionAmount === 0) {
                for (let i = 0; i < bagContents.length; i++) {
                    if (bagContents[i] === 6) {
                        bagContents[i] = 0;
                    } // end if
                } // end for
            } // end case
            break;
        case 7:
            if (attackUpAmount === 0) {
                for (let i = 0; i < bagContents.length; i++) {
                    if (bagContents[i] === 7) {
                        bagContents[i] = 0;
                    } // end if
                } // end for
            } // end case
            break;
        case 8:
            if (spell1ReplenishAmount === 0) {
                for (let i = 0; i < bagContents.length; i++) {
                    if (bagContents[i] === 8) {
                        bagContents[i] = 0;
                    } // end if
                } // end for
            } // end case
            break;
        case 9:
            if (spell2ReplenishAmount === 0) {
                for (let i = 0; i < bagContents.length; i++) {
                    if (bagContents[i] === 9) {
                        bagContents[i] = 0;
                    } // end if
                } // end for
            } // end case
            break;
        default:
            console.log(bagContents)
    } // end switch
} // end removeFromBag func

// func for shifting empty bag slots to back

function shiftBag() {

    return bagContents.sort((a, b) => b - a);

} // end shiftBag func

// func for checking the items currently in bag and displaying accordingly
function checkBag() {
    for (let i = 0; i < bagContents.length; i++) {
        let ourImg = document.getElementById(`item-img-${i + 1}`);
        let ourBtn = document.getElementById(`inv-btn-${i + 1}`);
        let num = bagContents[i]
        switch (num) {
            case 0:
                ourImg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn1Ki9TkNGca30g1Z_S9E8dVvFgBj7d9DQcLIYhO7fzEm5-61OCba2TsO5R8XsmaOTUtc&usqp=CAU';
                ourBtn.value = 0;
                break;
            case 1:
                ourImg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiWKaq4zE2yDGYSkvtwlBXWzBOyTgju39kUo9j3Ub-Q7B0C20Emr4wRxyq1kcdQtp44Ms&usqp=CAU';
                ourBtn.value = 1;
                break;
            case 2:
                ourImg.src = 'https://i5.walmartimages.com/seo/Camco-43881-7-oz-Polycarbonate-Juice-Glass-2-pack_205bfe11-b849-4bb9-a495-029c03312072.8d96e469908ead4a3967438d722c97d1.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF';
                ourBtn.value = 2;
                break;
            case 3:
                ourImg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzKed1XkN1Z6fsZ6GdKk71RxNm566KRex2i0zi8WbFLKDpjxLNZzj5tiJxpRcfxAsSZBw&usqp=CAU';
                ourBtn.value = 3;
                break;
            case 4:
                ourImg.src = 'https://i.pinimg.com/736x/3c/cb/84/3ccb84a7f4c2f9b163f2efa6874c2e1a.jpg';
                ourBtn.value = 4;
                break;
            case 5:
                ourImg.src = 'https://i.pinimg.com/736x/79/0d/ea/790deaac8c64b8d85ea5cc8de0085cf2.jpg';
                ourBtn.value = 5;
                break;
            case 6:
                ourImg.src = 'https://i.pinimg.com/474x/39/db/b7/39dbb7b173dd611c2dbeb82797ea8a07.jpg';
                ourBtn.value = 6;
                break;
            case 7:
                ourImg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFqMjr0J6Sc38JKY_AR0zypoghlq9CqU4rsA&s';
                ourBtn.value = 7;
                break;
            case 8:
                ourImg.src = 'https://i.pinimg.com/originals/f4/17/3b/f4173bdcb44ea1eab962a7f56d544ff5.jpg';
                ourBtn.value = 8;
                break;
            case 9:
                ourImg.src = 'https://i.pinimg.com/736x/e2/50/93/e25093dc5eeedb2e2fdbe0bc9aaef10b.jpg';
                ourBtn.value = 9;
                break;
            default:
                ourImg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn1Ki9TkNGca30g1Z_S9E8dVvFgBj7d9DQcLIYhO7fzEm5-61OCba2TsO5R8XsmaOTUtc&usqp=CAU';
                ourBtn.value = 0;
                break;
        } // end switch
    } // end for loop
} // end checkBag func


// 0 = empty
// 1 = bread - 25 hp
// 2 = juice - 20 mana
// 3 = meat - 50 hp
// 4 = poison cure - cures poison 
// 5 = health potion - 100 hp
// 6 = mana potion - 40 hp
// 7 = atk up - times atk dmg by 2
// 8 = spell 1 replenish - lets you use spell 1
// 9 = spell 2 replenish - lets you use spell 2

// bag => bread, poison cure, mana potion, health potion, juice, atk up, rope, 

// currentLocation
const currentLocationText = document.getElementById("current-location");

// log text
let logText = document.getElementById("log-text");

// environment conditions area
const enviConditions = document.getElementById('curr-envi-conditions');

// info elements
const currTime = document.getElementById("curr-time");
const currTemp = document.getElementById("random-temp");
const currPop = document.getElementById("curr-pop");

// choosing style
style1Button.addEventListener('click', () => {
    style = 1
    styleArea.classList.add('hidden');
    classArea.classList.remove('hidden');
    classArea1.classList.remove('hidden');
});

style2Button.addEventListener('click', () => {
    style = 2
    styleArea.classList.add('hidden');
    classArea.classList.remove('hidden');
    classArea2.classList.remove('hidden');
});

const fixCores = () => {

    if (HP > 0) {
        playerHpCurr.innerText = HP;
        playerHpTotal.innerText = maxHP;
        playerMpCurr.innerText = MP;
        playerMpTotal.innerText = maxMP;

        if (Number(playerHpCurr.innerText) > maxHP) {
            playerHpCurr.innerText = maxHP;
            HP = maxHP;
        }
        if (Number(playerMpCurr.innerText) > maxMP) {
            playerMpCurr.innerText = maxMP;
            MP = maxMP;
        }
    } else { // player dies
        mainImage.src = 'https://ih1.redbubble.net/image.4816264180.3974/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.u5.jpg';
        actionImage.src = 'https://static.vecteezy.com/system/resources/previews/014/894/538/non_2x/8-bit-pixel-text-game-over-background-icon-for-game-assets-in-illustrations-vector.jpg'
        logText.innerText = `You have died... Please reload the page to start over.`
        HP = 0;
        playerHpCurr.innerText = 0;
        hideButtonsUponDeath();
        bagTable.classList.add('hidden');
        bagHeader.classList.add('hidden');
    }

    opponentMPText.innerText = opponentMP;

} // end fixCores func

// choosing class

warrior1Btn.addEventListener('click', () => {
    playerClass = 'Warrior'
    classArea.classList.add('hidden');
    mainArea.classList.remove('hidden');
    welcomeHeader.classList.add('hidden');
    mainImage.src = warrior1Img.src;
    HP = 250;
    maxHP = 250;
    MP = 30;
    maxMP = 30;
    fixCores();
});

ranger1Btn.addEventListener('click', () => {
    playerClass = 'Ranger'
    classArea.classList.add('hidden');
    mainArea.classList.remove('hidden');
    welcomeHeader.classList.add('hidden');
    mainImage.src = ranger1Img.src;
    HP = 225;
    maxHP = 225;
    MP = 40;
    maxMP = 40;
    fixCores();
});

mage1Btn.addEventListener('click', () => {
    playerClass = 'Mage'
    classArea.classList.add('hidden');
    mainArea.classList.remove('hidden');
    welcomeHeader.classList.add('hidden');
    mainImage.src = mage1Img.src;
    HP = 200;
    maxHP = 200;
    MP = 50;
    maxMP = 50;
    fixCores();
});

warrior2Btn.addEventListener('click', () => {
    playerClass = 'Warrior'
    classArea.classList.add('hidden');
    mainArea.classList.remove('hidden');
    welcomeHeader.classList.add('hidden');
    mainImage.src = warrior2Img.src;
    HP = 250;
    maxHP = 250;
    MP = 30;
    maxMP = 30;
    fixCores();
});

ranger2Btn.addEventListener('click', () => {
    playerClass = 'Ranger'
    classArea.classList.add('hidden');
    mainArea.classList.remove('hidden');
    welcomeHeader.classList.add('hidden');
    mainImage.src = ranger2Img.src;
    HP = 225;
    maxHP = 225;
    MP = 40;
    maxMP = 40;
    fixCores();
});

mage2Btn.addEventListener('click', () => {
    playerClass = 'Mage'
    classArea.classList.add('hidden');
    mainArea.classList.remove('hidden');
    welcomeHeader.classList.add('hidden');
    mainImage.src = mage2Img.src;
    HP = 200;
    maxHP = 200;
    MP = 50;
    maxMP = 50;
    fixCores();
});

// start btn

startButton.addEventListener('click', () => {
    startButton.classList.add('hidden');
    currLocation = 'camp'
    logText.innerText = 'You will start your adventure at camp. You can rest to restore your HP and MP. There will be free food available for you to take. You can also store gold incase of any thieves should you encounter them on your travels. You can use buttons below to travel, or engage in activities at camp.'
    checkLocation();
    actionImage.src = campImage.src
    getLocationInfo();
})

// check location func
function checkLocation() {
    if (currLocation === 'camp') {
        currentLocationText.innerText = 'Camp'
        campButtons.classList.remove('hidden')
        travelButtons.classList.remove('hidden')
        travelBtnHeaders.classList.remove('hidden')
        tradingPostButtons.classList.add('hidden')
    } else if (currLocation === 'trading-post') {
        currentLocationText.innerText = 'Trading Post'
        travelButtons.classList.remove('hidden')
        tradingPostButtons.classList.remove('hidden')
        travelBtnHeaders.classList.remove('hidden')
        campButtons.classList.add('hidden')
    } else if (currLocation === 'pasture') {
        currentLocationText.innerText = 'Pasture'
        actionImage.src = 'https://i1.sndcdn.com/artworks-XjvA7g8SnwiRXLp4-DFse5g-t500x500.jpg'
    } else if (currLocation === 'vacant alley') {
        currentLocationText.innerText = 'Vacant Alley'
        actionImage.src = 'https://wiki.rpg.net/images/5/53/Dark_city.jpg'
    } else if (currLocation === 'cemetery') {
        currentLocationText.innerText = 'Cemetery'
        actionImage.src = 'https://i.pinimg.com/736x/04/d8/42/04d842af1654a36dc0130e424a09ff0a.jpg'
    } else if (currLocation === 'dark cave') {
        currentLocationText.innerText = 'Dark Cave'
        actionImage.src = 'https://i.pinimg.com/736x/ca/3b/d9/ca3bd9d4dd85a7c7edf810bc53979960.jpg'
    } else if (currLocation === 'lower dungeon') {
        currentLocationText.innerText = 'Lower Dungeon'
        actionImage.src = 'https://www.shutterstock.com/image-illustration/scary-endless-medieval-catacombs-torches-600nw-1940646100.jpg'
    } else if (currLocation === 'time realm') {
        currentLocationText.innerText = 'Time Realm'
        actionImage.src = 'https://i.pinimg.com/236x/a3/8e/fb/a38efb2023cc540be46a4bbb459a0dc8.jpg'
    }

} // end checkLocation func

function getLocationInfo() {
    const time = ['Morning', 'Mid-Day', 'Night'];
    const populations = ['Sparce', 'Normal', 'Dense'];
    const randomPop = (Math.floor(Math.random() * 3));
    const randomTime = (Math.floor(Math.random() * 3));
    const randomTemp = (Math.floor((Math.random() * (82 - 15)) + 15));

    if (time[randomTime] === 'Morning') {
        rightImg.src = 'https://talkingfinances.co.uk/wp-content/uploads/2023/12/21.jpg'
    }
    if (time[randomTime] === 'Mid-Day') {
        rightImg.src = 'https://readwrite.com/wp-content/uploads/2024/06/Obsidians-Avowed-to-mirror-The-Outer-Worlds-in-structure-and-length-900x600.png'
    }
    if (time[randomTime] === 'Night') {
        rightImg.src = 'https://media.istockphoto.com/id/1270504713/photo/night-sky.webp?b=1&s=170667a&w=0&k=20&c=gO4TYAFFGRettPA8i1KQGHVoZVLnX2SAdCes2EWOWI4='
    }
    if (time[randomTime] === 'Night') {
        currPop.innerText = populations[0];
    } else {
        currPop.innerText = populations[randomPop]
    }
    currTime.innerText = time[randomTime]
    currTemp.innerText = randomTemp;
} // end getLocationInfo func

const checkStats = () => {
    if (playerPsn === 0) {
        poisonToggle.classList.add('hidden');
    } else {
        poisonToggle.classList.remove('hidden');
    };
    if (playerAtkUp === 0) {
        atkToggle.classList.add('hidden');
    } else {
        atkToggle.classList.remove('hidden');
    };
    if (playerDefDown === 0) {
        defToggle.classList.add('hidden');
    } else {
        defToggle.classList.remove('hidden');
    };
    if (spell1Ready === 1) {
        spell1Btn.style.background = 'linear-gradient(#00a23a, #38c1d9)'
    } else {
        spell1Btn.style.background = 'buttonface'
    }
    if (spell2Ready === 1) {
        spell2Btn.style.background = 'linear-gradient(#38c1d9, #00a23a)'
    } else {
        spell2Btn.style.background = 'buttonface'
    }
} // end checkStats func

function checkOpponentStats() {
    if (opponentPsn === 1) {
        opponentPsnStatus.classList.remove('hidden')
    } else {
        opponentPsnStatus.classList.add('hidden');
    };
}

// func for healing up
const healingUp = () => {
    HP = maxHP;
    MP = maxMP;
    fixCores();
}

const checkResting = () => {
    if (wellRested === 0) {
        logText.innerText = 'You have already rested.'
    } else {
        logText.innerText = 'You rest and now feel well rested. You restore full HP and MP in the process. Your ailments have been cured and your stat bonuses have returned to normal.'
        playerPsn = 0;
        playerAtkUp = 0;
        playerDefDown = 0;
        getLocationInfo();
        healingUp();
        checkStats();
    }
} // end checkResting func

// travels btns

// wonGame = 1;

goCampBtn.addEventListener('click', () => {
    if (wonGame === 1) {
        winArea.classList.remove('hidden');
        mainArea.classList.add('hidden');
    }
    if (currLocation === 'camp') {
        logText.innerText = 'You tried traveling to camp, but you are already here!'
    } else {
        if (opponentHP <= 0) {
            currentlyTraveling = 0;
            forceGoBackCamp = 0;
            currentMonsterText.classList.add('hidden');
            logText.innerText = 'You have arrived back at camp.';
            getLocationInfo();
            currLocation = 'camp'
            checkLocation();
            actionImage.src = campImage.src
            hideScroll();
            opponentStats.classList.add('hidden');
            enviConditions.classList.remove('hidden');
            middleButtons.classList.add('hidden');
        } else {
            logText.innerText = `You can't go to camp. You are currently fighting!`
        }
    } // end if else
})

goTradingPostBtn.addEventListener('click', () => {
    if (currLocation === 'trading-post') {
        logText.innerText = 'You tried traveling to the trading post, but you are already here!'
    } else {
        if (currentlyTraveling === 0) {
            currentMonsterText.classList.add('hidden');
            logText.innerText = 'You have arrived at the trading post.';
            currLocation = 'trading-post'
            getLocationInfo();
            checkLocation();
            actionImage.src = tradingPostImage.src
            wellRested++;
            actionImage.src = tradingPostImage.src
            middleButtons.classList.add('hidden');
            hideScroll();
            opponentStats.classList.add('hidden');
            enviConditions.classList.remove('hidden');
            if (firstTimeTP <= 1) {
                logText.innerText = 'You have arrived at the trading post. Here you can buy certain items like food and potions, gamble any gold you have, or even hire foretellers who will scout your future opponents and get their stats. You can do any of these using the buttons below.'
                firstTimeTP++;
                wellRested++;
            }
        } else {
            logText.innerText = `You can't go to the trading post. You are currently fighting!`
        }
    } // end if else
});



goTravelBtn.addEventListener('click', () => {
    if (currLocation === 'trading-post') {
        logText.innerText = `You should return back to camp before you start traveling.`
    } else {
        if (forceGoBackCamp === 1) {
            logText.innerText = `You can't travel as you are weak from battle. You should finish your battle first.`
        } else {
            if (currentMonster === 5) {
                logText.innerText = `Per the kings orders, you set out to investigate the mysterious time portal in the middle of the city. As you get closer your perception of space and time start to shift. You approach it until you can no longer control your movements and are sucked into the portal! There it is! The Phantom Hourglass!!!`
                currLocation = locations[playerNextLocation].name
                checkLocation();
                enviConditions.classList.add('hidden')
                opponentStats.classList.remove('hidden');
                currentMonsterText.classList.remove('hidden');
                currentMonsterText.innerText = monsters[currentMonster].name
                monsterImgs(currentMonster)
                opponentHP = monsters[currentMonster].health;
                opponentHPText.innerText = opponentHP;
                opponentHPMax = opponentHP;
                opponentHPMaxText.innerText = opponentHPMax;
                hitBtn.classList.remove('hidden');
                runBtn.classList.remove('hidden');
                spell1Btn.classList.remove('hidden');
                spell2Btn.classList.remove('hidden');
            } else {
                failedEscape = 0;
                logText.innerText = `You set out to travel and after some time end up at the ${locations[playerNextLocation].name}. While exploring the ${monsters[currentMonster].name} approaches you!`
                forceGoBackCamp = 1;
                currentlyTraveling = 1;
                currLocation = locations[playerNextLocation].name
                checkLocation();
                enviConditions.classList.add('hidden')
                opponentStats.classList.remove('hidden');
                currentMonsterText.classList.remove('hidden');
                currentMonsterText.innerText = monsters[currentMonster].name
                monsterImgs(currentMonster)
                opponentHP = monsters[currentMonster].health;
                opponentHPText.innerText = opponentHP;
                opponentHPMax = opponentHP;
                opponentHPMaxText.innerText = opponentHPMax;
                opponentMP =
                    hitBtn.classList.remove('hidden');
                runBtn.classList.remove('hidden');
                spell1Btn.classList.remove('hidden');
                spell2Btn.classList.remove('hidden');
            }
        }
    }
});

// switch for monster imgs

const monsterImgs = (currMonstNum) => {

    switch (currMonstNum) {
        case 0:
            rightImg.src = 'https://i.pinimg.com/736x/29/8b/ff/298bffcb6544f4172892bdf45c286fb9.jpg'
            break;
        case 1:
            rightImg.src = 'https://i.pinimg.com/564x/e6/7b/24/e67b245d1c4de0e289fa67cb3840e2ba.jpg'
            break;
        case 2:
            rightImg.src = 'https://storage.googleapis.com/pai-images/876375ca194d4e45ae17d075ca95a219.jpeg'
            break;
        case 3:
            rightImg.src = 'https://i.pinimg.com/236x/77/e0/06/77e00602e0149b8a8b34a253e0911a46.jpg'
            break;
        case 4:
            rightImg.src = 'https://i.pinimg.com/originals/d4/f6/7c/d4f67c26e281f192097873f1478a8890.jpg'
            break;
        case 5:
            rightImg.src = 'https://www.giantbomb.com/a/uploads/scale_medium/0/7242/1486257-braid_hourglass_1024.jpg'
            break;
        default:
            rightImg.src = ''
            break;
    } // end switch

}; // end func

// function to reset opponent stats

function resetOpponentStats() {
    opponentPsn = 0;
    opponentAtkUp = 0;
    opponentDefDown = 0;
    opponentDOT = 0;
    checkOpponentStats();
    justHired = 0;
}

// main player btns

let wonGold = 0;

function checkOpponentHP() {
    if (currentMonster === 5) {
        if (opponentHP <= 0) {
            logText.innerText = `You have defeated the Phantom Hourglass!!! The king of Ashghar would like to speak with you. Please return to camp...`
            opponentHPText.innerText = 0;
            hitBtn.classList.add('hidden');
            runBtn.classList.add('hidden');
            wonGame = 1;
        }
    } else {
        if (opponentHP <= 0) {
            let randomGoblinChance = Math.floor((Math.random() * 4) + 1)
            if (randomGoblinChance === 1) {
                howMuchGold(currentMonster);
                getMonsterGold(currentMonster);
                gold = (gold / 2);
                playerGoldCurr.innerText = gold;
                logText.innerText = `You have defeated the ${monsters[currentMonster].name} and recieved ${wonGold} gold! Shortly after a group of random goblins sneak up on you from behind and remove 50% of your gold from your pockets... You should return to camp.`
                actionImage.src = 'https://i.pinimg.com/736x/4b/61/c4/4b61c4366cf1385957064f878301197e.jpg'
                currentMonster++
                playerNextLocation++
                opponentHPText.innerText = 0;
                hitBtn.classList.add('hidden');
                runBtn.classList.add('hidden');
                spell1Btn.classList.add('hidden');
                spell2Btn.classList.add('hidden');
                availableFood = 1;
                wellRested++
                resetOpponentStats();

            } else {
                howMuchGold(currentMonster);
                logText.innerText = `You have defeated the ${monsters[currentMonster].name} and recieved ${wonGold} gold! You should return back to camp before embarking on another travel.`
                rightImg.src = 'https://ih1.redbubble.net/image.4816264180.3974/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.u5.jpg'
                getMonsterGold(currentMonster);
                currentMonster++
                playerNextLocation++
                opponentHPText.innerText = 0; // keep hp at 0
                hitBtn.classList.add('hidden');
                runBtn.classList.add('hidden');
                spell1Btn.classList.add('hidden');
                spell2Btn.classList.add('hidden');
                availableFood = 1;
                wellRested++
                resetOpponentStats();
            }
        }
    }
}; // end checkOpponentHP func

// func for getting gold after successful battle
function getMonsterGold(monst) {
    switch (monst) {
        case 0:
            gold += 200;
            playerGoldCurr.innerText = gold;
            break;
        case 1:
            gold += 250;
            playerGoldCurr.innerText = gold;
            break;
        case 2:
            gold += 300;
            playerGoldCurr.innerText = gold;
            break;
        case 3:
            gold += 350;
            playerGoldCurr.innerText = gold;
            break;
        case 4:
            gold += 400;
            playerGoldCurr.innerText = gold;
            break;
        default:
            gold = gold;
            playerGoldCurr.innerText = gold;
            break;
    }
};

function howMuchGold(monster) {
    switch (monster) {
        case 0:
            wonGold = 200;
            break;
        case 1:
            wonGold = 250;
            break;
        case 2:
            wonGold = 300;
            break;
        case 3:
            wonGold = 350;
            break;
        case 4:
            wonGold = 400;
            break;
        default:
            gold = gold;
            break;
    }
}

console.log(opponentMP)


hitBtn.addEventListener('click', () => {
    let randomOpponentPsnNum = Math.floor((Math.random() * 3) + 1);
    if (randomOpponentPsnNum === 3 && playerPsn === 0) {
        playerPsn++
        checkStats();
    }
    if (HP > 0) {
        opponentHP -= maxHit;
        opponentHPText.innerText = opponentHP
        checkOpponentHP();
        getMonsterHit(currentMonster);
        inflictPlayer();
        fixCores();
    } else {
        logText.innerText = `You are dead...`
    }
    if (opponentDOT > 0) {
        opponentHP -= 20;
        opponentDOT -= 1;
    }
    if (playerDoubleDamage > 0) {
        opponentHP -= maxHit;
        playerDoubleDamage -= 1;
    }
    if (opponentPsn === 1) {
        opponentHP -= 20;
    }
    if (playerStealthed > 0) {
        HP += monsterHitPlaceholder;
        fixCores();
        playerStealthed -= 1;
    }
    if (opponentAttacksHalved > 0) {
        HP += (monsterHitPlaceholder / 2);
        opponentAttacksHalved -= 1;
    }
    if (playerAtkUp > 0) {
        maxHit = 100;
        playerAtkUp -= 1;
    } else {
        maxHit = 50;
    }
});

// hide all buttons on death

let hideBtns = document.querySelectorAll('button');

const hideButtonsUponDeath = () => {

    hideBtns.forEach((btn) => {
        btn.classList.add('hidden');
    })

}


// function for monsters to psn, def down player
function inflictPlayer() {
    if (playerPsn === 1) {
        HP -= 20;
        fixCores();
    }
} // end inflictPlayer func


// will add def down later^^




// function to get monster's hit

let monsterHitPlaceholder = 0;

function getMonsterHit(val) {
    switch (val) {
        case 0:
            HP -= 25;
            monsterHitPlaceholder = 25;
            fixCores();
            break;
        case 1:
            HP -= 35;
            monsterHitPlaceholder = 35;
            fixCores();
            break;
        case 2:
            HP -= 45;
            monsterHitPlaceholder = 45;
            fixCores();
            break;
        case 3:
            HP -= 55;
            monsterHitPlaceholder = 55;
            fixCores();
            break;
        case 4:
            HP -= 75;
            monsterHitPlaceholder = 75;
            fixCores();
            break;
        case 5:
            HP -= 90;
            monsterHitPlaceholder = 90;
            fixCores();
            break;
        default:
            HP = HP;
    } // end switch
} // end getMonsterHit func

eatBtn.addEventListener('click', () => {

    if (HP === maxHP) {
        logText.innerText = `You are already full health.`
    } else {
        if (HP < maxHP && (meatAmount > 0)) {
            HP += 50
            fixCores();
            meatAmount--
            logText.innerText = `You eat the meat and restore 50HP. You have ${meatAmount} left.`
            removeFromBag(3);
            checkBag();
            shiftBag();
            checkBag();
        } else if (HP < maxHP && (breadAmount > 0)) {
            HP += 25
            fixCores();
            breadAmount--
            logText.innerText = `You eat the bread and restore 25HP. You have ${breadAmount} left.`
            removeFromBag(1);
            checkBag();
            shiftBag();
            checkBag();
        } else {
            logText.innerText = `You don't have any more food in your bag to eat.`
        }
    }
}); // end eatBtn

// var for failing the escape attempt
let failedEscape = 0;

runBtn.addEventListener('click', () => {

    let randomRun = Math.floor((Math.random() * 3) + 1)

    if (failedEscape === 0) {
        if (randomRun === 1) {
            runBtn.classList.add('hidden');
            currentlyTraveling = 0;
            forceGoBackCamp = 0;
            currentMonsterText.classList.add('hidden');
            logText.innerText = 'You have escaped and arrived back at camp safely...';
            getLocationInfo();
            currLocation = 'camp'
            checkLocation();
            actionImage.src = campImage.src
            hideScroll();
            opponentStats.classList.add('hidden');
            enviConditions.classList.remove('hidden');
            resetOpponentStats();
            opponentHP = 0;

        } else {
            failedEscape = 1
            logText.innerText = `You tried to escape and failed. You must stay and fight!`
        }
    }

});

// func for what bag btn does based on its value
function checkBtnVal(btnValue) {

    switch (btnValue) {
        case '1': // bread
            if (HP < maxHP && (breadAmount > 0)) {
                HP += 25
                fixCores();
                breadAmount--
                logText.innerText = `You eat the bread and restore 25HP. You have ${breadAmount} left.`
                removeFromBag(1);
                checkBag();
                shiftBag();
                checkBag();
            }
            break;
        case '2': // juice
            if (MP < maxMP && (juiceAmount > 0)) {
                MP += 10
                fixCores();
                juiceAmount--
                logText.innerText = `You drink the juice and restore 10MP. You have ${juiceAmount} left.`
                removeFromBag(2);
                checkBag();
                shiftBag();
                checkBag();
            }
            break;
        case '3': // meat
            if (HP < maxHP && (meatAmount > 0)) {
                HP += 50
                fixCores();
                meatAmount--
                logText.innerText = `You eat the meat and restore 50HP. You have ${meatAmount} left.`
                removeFromBag(3);
                checkBag();
                shiftBag();
                checkBag();
            }
            break;
        case '4': // poison cure
            if (playerPsn === 1 && (poisonCureAmount > 0)) {
                playerPsn = 0;
                checkStats();
                logText.innerText = `You have used your poison cure and are now free of poison. You have ${poisonCureAmount} left.`
                removeFromBag(4);
                checkBag();
                shiftBag();
                checkBag();
            }
            break;
        case '5': // health potion
            if (HP < maxHP && (healthPotionAmount > 0)) {
                HP += 100
                fixCores();
                healthPotionAmount--
                logText.innerText = `You consume a health potion and restore 100HP. You now have ${healthPotionAmount} left.`
                removeFromBag(5);
                console.log(HP)
                checkBag();
                shiftBag();
                checkBag();
            }
            break;
        case '6': // mana potion
            if (MP < maxMP && (manaPotionAmount > 0)) {
                MP += 40
                fixCores();
                manaPotionAmount--
                logText.innerText = `You consume a mana potion and restore 40MP. You now have ${manaPotionAmount} left.`
                console.log(MP)
                removeFromBag(6);
                checkBag();
                shiftBag();
                checkBag();
            }
            break;
        case '7': // atk up
            if (playerAtkUp < 1 && (attackUpAmount > 0)) {
                fixCores();
                attackUpAmount--
                playerAtkUp = 2;
                checkStats();
                logText.innerText = `You consume an attackUp tonic. Attacks will now do double damage for a limited time. You now have ${attackUpAmount} left.`
                removeFromBag(7);
                checkBag();
                shiftBag();
                checkBag();
            }
            break;
        case '8': // spell 1 replenish
            if (spell1Ready < 1 && (spell1ReplenishAmount > 0)) {
                spell1Ready = 1
                checkStats();
                spell1ReplenishAmount--
                logText.innerText = `You read the ancient texts of Maverik and replenish your spell 1. You now have ${spell1ReplenishAmount} texts left.`
                removeFromBag(8);
                checkBag();
                shiftBag();
                checkBag();
            }
            break;
        case '9': // spell 2 replenish
            if (spell2Ready < 1 && (spell2ReplenishAmount > 0)) {
                spell2Ready = 1
                checkStats();
                spell2ReplenishAmount--
                logText.innerText = `You read the more modern texts of Dovelynn and replenish your spell 2. You now have ${spell2ReplenishAmount} texts left.`
                removeFromBag(9);
                checkBag();
                shiftBag();
                checkBag();
            }
            break;
        default:
            HP = HP;
            fixCores();
            break;
    } // end switch

} // end checkBtnVal func


// when any of the bag buttons get clicked
function clickBtn() {
    for (let i = 0; i < bagButtons.length; i++) {
        bagButtons[i].addEventListener('click', () => {
            checkBag();
            checkBtnVal(bagButtons[i].value);
        })
    }
} // end clickBtn func

// func for clicking bag button
bagBtn.addEventListener('click', () => {
    if (playerBag === 0) {
        bagTable.classList.remove('hidden');
        bagHeader.classList.remove('hidden');
        playerBag++;
        clickBtn();
        checkBag();
        console.log(bagContents);
        shiftBag();
    } else {
        if (playerBag === 1) {
            bagTable.classList.add('hidden');
            bagHeader.classList.add('hidden');
            playerBag = 0;
            console.log(bagContents);
        }
    }
    console.log(playerBag)
});

// spell btns

spell1Btn.addEventListener('click', () => {
    if (MP >= 20) {
        if (spell1Ready > 0) {
            castSpell1(playerClass);
            spell1Ready--
        } else {
            logText = `Your spell 1 is not ready.`
        }
        checkStats();
        MP -= 20;
        fixCores();
    } else {
        logText.innerText = `You don't have enough mana to cast this spell`
    }
});

spell2Btn.addEventListener('click', () => {
    if (MP >= 30) {
        if (spell2Ready > 0) {
            castSpell2(playerClass);
            spell2Ready--
        } else {
            logText = `Your spell 2 is not ready.`
        }
        checkStats();
        MP -= 30;
        fixCores();
    } else {
        logText.innerText = `You don't have enough mana to cast this spell`
    }
});

// functions for casting spells

function castSpell1(playerClass) {
    switch (playerClass) {
        case 'Warrior':
            logText.innerText = `You cast Dual Blade of Healing. Your next attack heals you for 20 HP and your enemy is now poisoned.`
            actionImage.src = 'https://i.pinimg.com/736x/59/6c/ec/596cecb34748637d68037325791ab980.jpg'
            HP += 20; // hp healed here, but doesnt show untill fixCores();
            opponentPsn = 1;
            checkOpponentStats();
            break;
        case 'Ranger':
            logText.innerText = `You cast Rangers Apprentice. Your next attack shoots twice and your enemy is now poisoned.`
            actionImage.src = 'https://i.pinimg.com/564x/fd/51/a8/fd51a81d5df4ccfcbe194a4624901e18.jpg'
            opponentHP -= maxHit; // opponent hit here. will update upon hitting hit button
            opponentPsn = 1;
            checkOpponentStats();
            break;
        case 'Mage':
            logText.innerText = `You cast deathfire touch. Your enemy is inflicted with a damage over time affliction for the next 3 turns. Your enemy is now poisoned.`
            actionImage.src = 'https://i.pinimg.com/564x/f7/ee/f8/f7eef8459d818a5f7d3fcd8ece640a6d.jpg'
            opponentPsn = 1;
            checkOpponentStats();
            opponentDOT = 3;
            break;
        default:
            console.log('spell failed')
            break;
    }; // end switch
}; // end castSpell1 func

function castSpell2(playerClass) {

    switch (playerClass) {
        case 'Warrior':
            logText.innerText = `You cast Berserker Rage. Your next 3 attacks deal 2x damage.`
            playerDoubleDamage = 3;
            actionImage.src = 'https://live.cdn.renderosity.com/gallery/items/2899872/images/1877092/2f7ec3bc9e0ca9b8ceb7c6efbc5a381e_original.jpg'
            break;
        case 'Ranger':
            logText.innerText = `You cast Iowerth's Stealth. You decend into the shadows and are in stealth. The next 3 enemy attacks will miss.`
            playerStealthed = 3;
            actionImage.src = 'https://i.pinimg.com/236x/50/93/89/509389d389d52177ae0c0b85642671db.jpg'
            break;
        case 'Mage':
            logText.innerText = `You cast Mejai's Soulstealer. For the next 3 attacks your enemys attacks do 50% damage, and your attacks do double damage.`
            playerDoubleDamage = 3;
            opponentAttacksHalved = 3;
            actionImage.src = 'https://i.pinimg.com/236x/ec/1d/df/ec1ddf6e59566973c783b6ffb0043929.jpg'
            break;
        default:
            console.log('spell failed');
            break;
    } // end switch
} // end castSpell2 func


// actions btns

// camp btns

restBtn.addEventListener('click', () => {
    if (currentlyTraveling === 0) {
        checkResting();
        console.log(wellRested)
        wellRested = 0;
    } else {
        logText.innerText = `You cannot rest during the middle of a battle!`
    }
});

// var for if there is any food available
let availableFood = 1;

// click get food btn
getFoodBtn.addEventListener('click', () => {
    if (currentlyTraveling === 0) {
        let randomNumberOfBread = (Math.floor(Math.random() * 3) + 1)
        let randomNumberOfJuice = (Math.floor(Math.random() * 2) + 1)
        let randomNumberOfMeat = (Math.floor(Math.random() * 2) + 1)
        let randomItemArr = [4, 5, 6, 7, 8, 9];
        if (availableFood === 1) {
            putInBag(randomItemArr[(Math.floor(Math.random() * randomItemArr.length))], 1)
            putInBag(1, randomNumberOfBread)
            putInBag(2, randomNumberOfJuice)
            putInBag(3, randomNumberOfMeat)
            checkBag();
            shiftBag();
            availableFood = 0;
            logText.innerText = 'You find some items sprawled out on a random table and take them.'
        } else {
            logText.innerText = 'There are currently no food or items for you to take. Please try again later as there might be some extras for you then.'
        }
    } else {
        logText.innerText = `You cannot get food as you are currently fighting!`
    }
});

storeGoldBtn.addEventListener('click', () => {
    if (currentlyTraveling === 0) {
        // you have 50 gold
        if (storeGold === 0) {
            storedGold = gold;
            gold = 0;
            playerGoldCurr.innerText = 0;
            playerGoldStored.innerText = storedGold;
            playerGoldStoredWhole.classList.remove('hidden');
            storeGold = 1;
        } else {
            if (storeGold === 1) { // you have 450 gold stored
                gold += storedGold;
                storedGold = 0;
                playerGoldCurr.innerText = gold;
                playerGoldStored.innerText = 0;
                playerGoldStoredWhole.classList.add('hidden');
                storeGold = 0;
            }
        };
    } else {
        logText.innerText = `You cannot store gold while traveling!`
    }
});

// trading post btns

// shop btns

buyItemsBtn.addEventListener('click', () => {
    gambleButtons.classList.add('hidden');
    hireButtons.classList.add('hidden');
    middleButtons.classList.remove('hidden');
    shopButtons.classList.remove('hidden');
    hideScroll();
    actionImage.src = 'https://i.pinimg.com/236x/c9/26/07/c92607efae6ffb91729af216852c0a66.jpg'
    logText.innerText = `Browse my wares my friend! The names Fernidand. I have common and specialty items from all across the kingdom of Ashghar. Just don't ask how I procured them... All sales are final. If anyone were to ask where you got these items, it wasn't from me!`
});

// buy item btns
const allShop = document.querySelectorAll('button.shop-btn');

// arr to get amounts of items
const arrOfAmounts = () => {
    let arr = [];
    arr.push(breadAmount);
    arr.push(juiceAmount);
    arr.push(meatAmount);
    arr.push(poisonCureAmount);
    arr.push(healthPotionAmount);
    arr.push(manaPotionAmount);
    arr.push(attackUpAmount);
    arr.push(spell1ReplenishAmount);
    arr.push(spell2ReplenishAmount);
    return arr;
}; // arrOfAmounts func end

// func for buying items in shop, all btns
allShop.forEach((btn) => {
    btn.addEventListener('click', () => {
        let amountArr = [];
        if (gold >= Number((btn.dataset.worth))) {
            putInBag((Number(btn.dataset.value)), 1);
            checkBag();
            arrOfAmounts();
            gold -= Number(btn.dataset.worth);
            playerGoldCurr.innerText = gold;
            logText.innerText = `Thank you for your purchase of ${btn.dataset.name}. You now have ${arrOfAmounts()[(btn.dataset.value) - 1]}. Please come back soon!`
        } else {
            logText.innerText = `You don't have enough gold to buy the ${btn.dataset.name}. Come back when you actually have some money!`
        }
    }) // end callback
}); // end func


// gamble btns

const gamble5 = document.getElementById('gamble-5');
const gamble25 = document.getElementById('gamble-25');
const gamble50 = document.getElementById('gamble-50');

gambleBtn.addEventListener('click', () => {
    hireButtons.classList.add('hidden');
    shopButtons.classList.add('hidden');
    logText.innerText = 'Welcome to the Squeal of Fortune! Here you have the chance to double your money! You can choose to gamble 5, 25, and even up to 50 coins at a time. You will roll a number between 0 and 20. You roll over 10, You win. 10 and under I win. Wins will x2 your bet and losses will, lets just say... make my pockets fuller. Good luck hehehe...'
    actionImage.src = 'https://i.pinimg.com/1200x/af/64/70/af647037cc1a3d61379c60b1b03b23dd.jpg'
    shopButtons.classList.add('hidden');
    middleButtons.classList.remove('hidden');
    gambleButtons.classList.remove('hidden');
    hideScroll();
});

gamble5.addEventListener('click', () => {
    let randomRoll = Math.floor(Math.random() * 20)
    if (gold >= 5) {
        if (randomRoll > 10) {
            logText.innerText = `You win... Here's 10 gold.`
            gold += 5;
            playerGoldCurr.innerText = gold;
            actionImage.src = 'https://i.pinimg.com/736x/1e/ca/1a/1eca1aded2dedba58f5e5de44bc90c73--the-goblin-gobelin.jpg'
        };
        if (randomRoll <= 10) {
            logText.innerText = `You lose. That's okay you can always try again... hehehe...`
            gold -= 5;
            playerGoldCurr.innerText = gold;
            actionImage.src = 'https://i.pinimg.com/1200x/af/64/70/af647037cc1a3d61379c60b1b03b23dd.jpg'
        };
    } else {
        logText.innerText = `You don't have enough gold to wager that much. Maybe you shouldn't be worrying about gambling right now hehehe...`
    }
});

gamble25.addEventListener('click', () => {
    let randomRoll = Math.floor(Math.random() * 20)
    if (gold >= 25) {
        if (randomRoll > 10) {
            logText.innerText = `You win... Here's 50 gold.`
            gold += 25;
            playerGoldCurr.innerText = gold;
            actionImage.src = 'https://i.pinimg.com/736x/1e/ca/1a/1eca1aded2dedba58f5e5de44bc90c73--the-goblin-gobelin.jpg'
        };
        if (randomRoll <= 10) {
            logText.innerText = `You lose. That's okay you can always try again... hehehe...`
            gold -= 25;
            playerGoldCurr.innerText = gold;
            actionImage.src = 'https://i.pinimg.com/1200x/af/64/70/af647037cc1a3d61379c60b1b03b23dd.jpg'
        };
    } else {
        logText.innerText = `You don't have enough gold to wager that much. Maybe try wagering less...`
    }
});

gamble50.addEventListener('click', () => {
    let randomRoll = Math.floor(Math.random() * 20)
    if (gold >= 50) {
        if (randomRoll > 10) {
            logText.innerText = `You win... Here's 100 gold.`
            gold += 50;
            playerGoldCurr.innerText = gold;
            actionImage.src = 'https://i.pinimg.com/736x/1e/ca/1a/1eca1aded2dedba58f5e5de44bc90c73--the-goblin-gobelin.jpg'
        };
        if (randomRoll <= 10) {
            logText.innerText = `You lose. That's okay you can always try again... hehehe...`
            gold -= 50;
            playerGoldCurr.innerText = gold;
            actionImage.src = 'https://i.pinimg.com/1200x/af/64/70/af647037cc1a3d61379c60b1b03b23dd.jpg'
        };
    } else {
        logText.innerText = `You don't have enough gold to wager that much. Maybe try wagering less...`
        actionImage.src = 'https://i.pinimg.com/1200x/af/64/70/af647037cc1a3d61379c60b1b03b23dd.jpg';
    };
});



hireBtn.addEventListener('click', () => {
    scout1.classList.remove('hidden');
    scout2.classList.remove('hidden');
    gambleButtons.classList.add('hidden');
    shopButtons.classList.add('hidden');
    middleButtons.classList.remove('hidden');
    hireButtons.classList.remove('hidden');
    hideScroll();
    actionImage.src = 'https://qph.cf2.quoracdn.net/main-qimg-095ac1960cb47c36811cb2cb14dae3b3-lq'
    logText.innerText = `Greetings traveler. Sorry if I startled you, I can be hard to see sometimes. My name is Elewynn from the 41st Rogues Company. I've heard that you might be interested in our services. For a small price my crew will scout ahead of you and bring you back details of the foes you might encounter on your travels. Look... we don't have much time. Are you interested or not?`
});

// scout report stats

const foeHit = document.getElementById('scouted-hit');
const foeHealth = document.getElementById('scouted-health');
const foePsn = document.getElementById('scouted-poison');
const foeDefDebuff = document.getElementById('scouted-def');

scout1.addEventListener('click', () => {
    let randomMonsterNum = Math.floor(Math.random() * 5)
    if (justHired === 0) {
        if (gold >= 50) {
            logText.innerText = `Elewynn takes your payment and stealths into the shadows for a few brief moments, only to return with a small scroll in hand. "Hey, I have the report from the scouts. You can view it below." `
            scout1.classList.add('hidden');
            scout2.classList.add('hidden');
            showReport.classList.remove('hidden');
            foeHit.innerText = monsters[randomMonsterNum].hit
            foeHealth.innerText = monsters[randomMonsterNum].health
            foePsn.innerText = monsters[randomMonsterNum].poisons
            foeDefDebuff.innerText = monsters[randomMonsterNum].defDebuff
            gold -= 50;
            playerGoldCurr.innerText = gold;
            justHired++
        } else {
            logText.innerText = `You don't have enough to hire my scouts... Are we a joke to you?`
        }
    } else {
        scoutReport.classList.add('hidden');
        logText.innerText = `My scouts have already provided you with a report. Come back later and I might have a new report for you.`
    }
});

scout2.addEventListener('click', () => {
    if (justHired === 0) {
        if (gold >= 100) {
            logText.innerText = `Elewynn takes your payment and stealths into the shadows for a few brief moments, only to return with a small scroll in hand. "Hey I have the report from the scouts. You can view it below." `
            scout1.classList.add('hidden');
            scout2.classList.add('hidden');
            scoutReport.classList.add('hidden');
            showReport.classList.remove('hidden');
            foeHit.innerText = monsters[currentMonster].hit
            foeHealth.innerText = monsters[currentMonster].health
            foePsn.innerText = monsters[currentMonster].poisons
            foeDefDebuff.innerText = monsters[currentMonster].defDebuff
            gold -= 100;
            playerGoldCurr.innerText = gold;
            justHired++
        } else {
            logText.innerText = `You don't have enough to hire my scouts... Are we a joke to you?`
        }
    } else {
        scoutReport.classList.add('hidden');
        logText.innerText = `My scouts have already provided you with a report. Come back later and I might have a new report for you.`
    }
});

// scout report 
const scoutReport = document.getElementById('report-area');

showReport.addEventListener('click', () => {

    showReport.classList.add('hidden');
    scoutReport.classList.remove('hidden');
    scout1.classList.remove('hidden');
    scout2.classList.remove('hidden');

});

// hide all middle buttons func

const hideMiddleButtons = () => {

    middleButtons.classList.add('hidden');
    scoutReport.classList.add('hidden');

}

function hideScroll() {
    scoutReport.classList.add('hidden');
}



// make text log into list
// make text go into list
// query all selector to remove list contents
// switch to move text in list up one. when hits last one defaults to just removes it
// have like 10 lists
// scroll bar on text box

// give btns values according to how much of the item you do have => 3 breads => 3 value
