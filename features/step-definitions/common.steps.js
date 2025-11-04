import { Given, When, Then } from "@wdio/cucumber-framework";
import bottomNavBar from "../pageobjects/bottom-nav-bar";
import { browser } from "@wdio/globals";
import mainPage from "../pageobjects/main.page";
import { scrollWithCoordinates } from "../../utils/scroll";

Given('The user is on the {string} section', async function(section) {
    await bottomNavBar.goToSection(section);
});

Given('The user is on the settings section', async function() {
    await mainPage.moreOptionsButton.click();
    await mainPage.getOption("Settings").click();
});

When('The application enters on debug mode', async function() {
    await browser.debug();
});

When('Clicks the more options button', async function() {
    await mainPage.moreOptionsButton.click();
});

When('Clicks the option {string}', async function(option) {
    await mainPage.getOption(option).click();
});

When('Scrolls from x: {float} and y: {float} to x: {float} and y:{float}', async function(startX, startY, endX, endY) {
    await scrollWithCoordinates(startX, startY, endX, endY, 500);
});

When('Loads a new session of the application', async function() {
    await browser.reloadSession();
});

Then('The section should have the title {string}', async function(expectedTitle) {
    await expect(mainPage.actionBarTitle).toHaveText(expectedTitle);
});
