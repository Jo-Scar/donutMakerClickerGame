//---------------------------------------------------------------- Iteration 1 ------------------------------------------------------------------------------------------------------------//
// FEATURE 1 : Have a way to count donuts.

// let makeDonut = document.getElementById('myBtn');
let displayDonutCount = document.getElementById('counter');
// let displayBuyAuto = document.getElementById('buyAuto');
let displayAutoCounter = document.getElementById('autoCounter');
let displayAutoCost = document.getElementById('autoClickerCost');
let displayMultiplierCount = document.getElementById('multiplierCount');
// let displayDonutMultiplier = document.getElementById('donutMultiplier');
// let displayActivateClicker = document.getElementById('autoAvaliable');



let donutCount = 0;
let clickerCount = 0;
let autoClickerCost = 100;
let activateAutoClickerCost = 1;
let multiplierForDonut = 1;
let donutValue = 1;
let multiplierCount = 0;
let multiplierCost = 10;

// different counters to display to screen
displayDonutCount.innerHTML = "Number of Donuts : " + donutCount.toFixed(3);
displayMultiplierCount.innerHTML = "Number of Donut Multipliers : " + multiplierCount.toFixed(3);



// displaying cost in real time
displayAutoCost.innerHTML = "Cost for Auto Clicker : " + autoClickerCost.toFixed(3);
donutMultiplier.innerHTML = "Cost for Donut Multiplier : " + multiplierCost.toFixed(3);

// when my button is clicked it will trigger addToCount funtion
myBtn.addEventListener('click', addToCount);

//  add to donut count and retrieve a donut count.
function addToCount() {
  donutCount = donutCount + multiplierForDonut;
  displayDonutCount.innerHTML = "Number of Donuts : " + donutCount.toFixed(3);
}

// FEATURE 2 : Be able to purchase the first Auto Clicker with 100 donuts

// when buy Auto button is clicked it will trigger addToAutoClicker function
buyAuto.addEventListener('click', addToAutoClicker);

// function to buy an Auto Clicker and subtract from the donutCount.
function addToAutoClicker() {
  // Feature 3 : The cost of each Auto Clicker will go up with each purchase.
  // subtract from donut count when someone buys an auto clickerCount
  // for every additional Auto Clicker will cost 10% more
  // Feature 4 : Ensure that there are enough clicks to buy a Auto Clicker.
  // Feature 5 : When the ‘activate Auto Clickers’ event is executed, increase the donut total by the amount of Auto Clickers owned.
  if (donutCount >= autoClickerCost) {
    // this will increment the Auto Clicker count by 1
    clickerCount++;
    // this is going to subtract the cost for the Auto Clicker from donut count.
    donutCount = donutCount - autoClickerCost;
    // Feature 5 : increase the donut total by the amount of Auto Clickers owned.
    donutCount = donutCount * clickerCount;

    // Feature 3 : Auto Clicker cost goes up
    autoClickerCost = autoClickerCost * 1.10;
    // these will update the display count for donuts and Auto Clickers. 
    displayDonutCount.innerHTML = "Number of Donuts : " + donutCount.toFixed(3);
    displayAutoCounter.innerHTML = "Number of Auto Clickers : " + clickerCount.toFixed(3);
    displayAutoCost.innerHTML = "Cost for Auto Clicker : " + autoClickerCost.toFixed(3);

  }
  else {
    // this will alert the user they do not have enough donuts to buy an Auto Clicker
    alert("Not enough Donuts, you currently have : " + donutCount.toFixed(3));
  }
}

// Feature 5 : The amount of Auto Clickers affect the amount of donuts added when an ‘Activate Auto Clickers’ event is called.

// create a function that when triggerred it will automatically start to increase the donut count if there is an avaliable Auto Clicker!.
// syntax setInterval(function, milliseconds, param1, param2, ...)



buyAuto.addEventListener('click', autoDonutMaker);

function autoDonutMaker() {
  if (clickerCount > 0) {
    // this is going to increment donut count every second, 1 sec = 1000 ms
    setInterval(function () { addToCount() }, 1000);
    // then, this is going to subtract the cost for the Auto Clicker from clicker count.
    activateAutoClickerCost = clickerCount - activateAutoClickerCost;
    // to display the avaliable Auto Clickers avaliable to use


  }
  else {
    // alert("Not enough Auto Clickers, you currently have : " + clickerCount.toFixed(3));
  }
}

//---------------------------------------- Iteration 2 -------------------------------------------------------------------------------------------------------------------------------------//

// FEATURE 1 : Be able to purchase the first Donut Multiplier with 10 clicks from your click count.
// 	• Can retrieve a Donut Multiplier count.





// when buy Multi button is clicked it will trigger addMultiplierCount function
buyMulti.addEventListener('click', addMultiplierCount)

// 	• Can add to the Donut Multiplier count.



function addMultiplierCount() {

  // FEATURE 3 : Ensure that there are enough donuts to buy a Donut Multiplier.
  if (donutCount >= 10) {
    // add to Donut Multiplier count.
    multiplierCount++;

    // subtract the amount of the Donut Multiplier cost from the donut count.
    donutCount = donutCount - multiplierCost;

    // FEATURE 2 : The cost of each Donut Multiplier will go up with each purchase.

    multiplierCost = multiplierCost * 1.10;

    // FEATURE 4 : 5 The first Donut Multiplier should increase the value of a Donut by 1.2.
    // donutValue = Math.pow(donutCount, 1.2);
    // donutValue *= 1.2; //
    multiplierForDonut = multiplierForDonut * 1.2;

    // retrieve Donut Multiplier count. 
    displayMultiplierCount.innerHTML = "Number of Donut Multipliers : " + multiplierCount.toFixed(3);
    displayDonutCount.innerHTML = "Number of Donuts : " + donutCount.toFixed(3);
    // display cost for Donut Multiplier 
    donutMultiplier.innerHTML = "Cost for Donut Multiplier : " + multiplierCost.toFixed(3);
  }
  else {
    // this will alert the user they do not have enough donuts to buy an Donut Multiplier
    alert("Not enough Donuts, you currently have : " + donutCount.toFixed(3));
  }


}

resetGameButton.addEventListener('onclick', resetButton);

// reset button function
function resetButton(){
  document.getElementById('resetGame').reset();
}

/* Drop Down Menu */
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("dropDown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "75%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}