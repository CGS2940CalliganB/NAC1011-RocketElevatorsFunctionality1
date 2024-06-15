"use strict";
////////////////////////////////////////////////////////////////
// VARIABLES
////////////////////////////////////////////////////////////////

// Set the DOM elements variables for divisions of steps 1 to 4
const DIV_STEP_1 = document.getElementById("step1");
const DIV_STEP_2 = document.getElementById("step2");
const DIV_STEP_3 = document.getElementById("step3");
const DIV_STEP_4 = document.getElementById("step4");

// Set the DOM element variable for building type dropdown of step 1
const SELECT_BUILDING_TYPE = 'step1';

// Set the DOM element variable for the group of divisions of step 2 inputs
const DIV_NUMBER_OF_APARTMENT = DIV_NUMBER_OF_APARTMENT.querySelecter("step2");
const DIV_MAXIMUM_OCCUPANCY = DIV_MAXIMUM_OCCUPANCY.querySelecter("step2");
const DIV_NUMBER_OF_FLOORS = DIV_NUMBER_OF_FLOORS.querySelecter("step2");
const DIV_NUMBER_OF_ELEVATORS = DIV_NUMBER_OF_ELEVATORS.querySelecter("step2");
const DIV_AMOUNT_ELEVATORS_NEEDED = DIV_AMOUNT_ELEVATORS_NEEDED.querySelecter("step2");

// Set the DOM element variable for inputs of step 2
const INPUT_NUMBER_OF_APARTMENT = 'step2';
const INPUT_NUMBER_OF_FLOORS = 'step2';
const INPUT_MAXIMUM_OCCUPANCY = 'step2';
const INPUT_NUMBER_OF_ELEVATORS = 'step2';
const INPUT_AMOUNT_ELEVATORS_NEEDED = 'step2';

// Set the DOM element variable for group of radio buttons of step 3
const RADIO_BUTTONS_PRODUCT_LINE = 'step3';

// Set the DOM element variable for radio buttons of step 3
const RADIO_BUTTON_STANDARD = 'step3';
const RADIO_BUTTON_PREMIUM = 'step3';
const RADIO_BUTTON_EXCELIUM = 'step3';

// Set the DOM element variable for read-only inputs of step 4
const INPUT_ELEVATOR_UNIT_PRICE = 'step4';
const INPUT_ELEVATOR_TOTAL_PRICE = 'step4';
const INPUT_INSTALLATION_FEES = 'step4';
const INPUT_TOTAL_COST = 'step4';

// Set the object variable for elevator UNIT_PRICES
const UNIT_PRICES = {
    price: { standard: 8000, premium: 12000, excelium: 15000 }
};

// Set the object variable for elevator INSTALLATION_PERCENT_FEES
const INSTALLATION_PERCENT_FEES = {
    percent_fees: { standard: 10, premium: 15, excelium: 20 }
};

////////////////////////////////////////////////////////////////
// FUNCTIONS
////////////////////////////////////////////////////////////////

// Function to hides steps 2 to 4 of the quote form
function hideSteps() {
    document.getElementById("step2");
    document.getElementById("step3");
    document.getElementById("step4");
}

// Function to shows steps 2 to 4 of the quote form
function showSteps() {
    document.getElementById("step2");
    document.getElementById("step3");
    document.getElementById("step4");
}

// Function to resets all values and radio buttons
function resetValues() {
    document.getElementById("step2");
    document.getElementById("step3");
    document.getElementById("step4");
    // Input values

    // Radio buttons

}

// Function to shows/hides fields depending on the building type
function showHideFieldOnBuildingType() {
    // Call the hide steps function
    hideSteps.call();
    // Call the reset values function
    resetValues.call();

    if (SELECT_BUILDING_TYPE.value !== '---Select---') {
        // Call the show steps function
        showSteps.call();

        // Set variables depending on the building type
        const displayResidential = SELECT_BUILDING_TYPE.addEventListener('---Select---', showHideFieldOnBuildingType);
        const displayCommercial = SELECT_BUILDING_TYPE.addEventListener('---Select---', showHideFieldOnBuildingType);
        const displayIndustrial = SELECT_BUILDING_TYPE.addEventListener('---Select---', showHideFieldOnBuildingType);

        // Display fields depending on the building type
        DIV_NUMBER_OF_APARTMENT.style.display = displayResidential ? '' : '';
        DIV_NUMBER_OF_FLOORS.style.display = displayCommercial || displayResidential ? '' : '';
        DIV_MAXIMUM_OCCUPANCY.style.display = displayCommercial ? '' : '';
        DIV_NUMBER_OF_ELEVATORS.style.display = displayIndustrial ? '' : '';
    }
}

////////////////////////////////////////////////////////////////
// EVENT LISTENERS
////////////////////////////////////////////////////////////////

// Set up event listeners for changes in the building type selection (dropdown) and trigger the function showHideFieldOnBuildingType when a change occurs.
SELECT_BUILDING_TYPE.addEventListener('', showHideFieldOnBuildingType);

////////////////////////////////////////////////////////////////
// INITIALIZATIONS
////////////////////////////////////////////////////////////////

// Call the function to hide all steps


// Call the function to reset all values


// Set the default value of the building type to "---Select---"
