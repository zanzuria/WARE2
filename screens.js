'use strict';

const screens = {};

// Function to add a new screen
function addScreen(name, screenLogic) {
    screens[name] = screenLogic;
}

// Function to retrieve a screen
function getScreen(name) {
    return screens[name];
}

// Function to navigate to a screen
function navigateTo(name) {
    const screen = getScreen(name);
    if (screen) {
        screen.display();
    } else {
        console.error(`Screen ${name} not found.`);
    }
}

// Export the functions to manage screens
module.exports = { addScreen, getScreen, navigateTo };