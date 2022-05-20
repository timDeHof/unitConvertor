let numberEl = document.getElementById("number").textContent;
let length = document.getElementById("results-conversion-text-length");
let volume = document.getElementById("results-conversion-text-volume");
let mass = document.getElementById("results-conversion-text-mass");
console.log(numberEl);

function convertLength() {
  let lengthConversionRatio = 0.3048; // the number of feet in a meter
  let meters2feet = +numberEl / lengthConversionRatio;
  let feet2meters = +numberEl * lengthConversionRatio;
  length.textContent =
    numberEl +
    " meters = " +
    meters2feet.toFixed(3) +
    " feet | " +
    numberEl +
    " feet = " +
    feet2meters.toFixed(3) +
    " meters";
}

function convertVolume() {
  let volumeConversionRatio = 3.785411784; // the number of liters in a US gallon
  let liters2Gal = +numberEl / volumeConversionRatio;
  let gal2Liters = +numberEl * volumeConversionRatio;
  volume.textContent =
    numberEl +
    " liters = " +
    liters2Gal.toFixed(3) +
    " gallons | " +
    numberEl +
    " gallons = " +
    gal2Liters.toFixed(3) +
    " liters";
}

function convertMass() {
  let massConversionRatio = 0.45359237; // the number of kilograms in a pound
  let kilos2pounds = +numberEl / massConversionRatio;
  let pounds2kilos = +numberEl * massConversionRatio;
  mass.textContent =
    numberEl +
    " kilos = " +
    kilos2pounds.toFixed(3) +
    " pounds | " +
    numberEl +
    " pounds = " +
    pounds2kilos.toFixed(3) +
    " liters";
}

convertLength();
convertVolume();
convertMass();
