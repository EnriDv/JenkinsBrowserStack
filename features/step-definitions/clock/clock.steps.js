import { Given, When, Then } from "@wdio/cucumber-framework";
import clockPage from "../../pageobjects/clock/clock.page";

When('Adds a new clock with the name {string}', async function(clockName) {
    await clockPage.addClock(clockName);
});

When('Deletes a clock with the name {string}', async function(clockName) {
    const card = await clockPage.getClockCard(clockName);
    await clockPage.deleteClock(card);
});

When('Deletes all clocks', async function() {
    const cityNames = [];

    for(const card of await clockPage.cities) {
        const cityNameElement = clockPage.getCityNameClockElement(card);
        cityNames.push(await cityNameElement.getText());
    }

    for(const city of cityNames) {
        const card = await clockPage.getClockCard(city);
        await clockPage.deleteClock(card);
    }
});

Then('There should be a clock with name {string}', async function(clockName) {
    const card = await clockPage.getClockCard(clockName);
    const cardText = await clockPage.getCityNameClockElement(card).getText();

    await expect(card).not.toBeUndefined();
    await expect(clockName).toContain(cardText);
});

Then('The list of clocks should have a size of {int} elements', async function(expectedSize) {
    await expect(clockPage.cities).toBeElementsArrayOfSize(expectedSize);
});




