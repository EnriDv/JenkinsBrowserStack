import { Given, Then, When } from "@wdio/cucumber-framework";
import bedtimePage from "../../pageobjects/bedtime/bedtime.page";
import { convertStringTimeToObject, trasnformToNormalFormatTime, trasnformToWeirdFormatTime } from "../../../utils/time";
import { scrollWithCoordinates, scrollWithElement } from "../../../utils/scroll";

When('Clicks the on boarding start button', async function() {
    await bedtimePage.bedtimeOnBoardingStartButton.click();
});

When('Skips the hour configuration', async function() {
    await bedtimePage.skipButton.click();
});

When('Sets the clock with {int} hours, {int} minutes and {string} format', async function (hour, minute, format) {
    const targetTime = {
        hour: hour,
        minute: minute,
        format: format
    }

    const currentStringTime = await bedtimePage.targetClock.getText();
    const currentTime = convertStringTimeToObject(trasnformToNormalFormatTime(currentStringTime));

    await bedtimePage.setTime(currentTime, targetTime);
});

When('Click the next button', async function() {
    await bedtimePage.nextButton.click();
});

When('Toggles the {string} clock', async function(clockType) {
    const typeOfClock = {
        wakeUp: bedtimePage.wakeClock,
        bedtime: bedtimePage.bedtimeClock
    }

    await bedtimePage.toggleAlarm(typeOfClock[clockType]);
});


Then('The duration sleep should contain the value {string}', async function(expectedPartialDuration) {
    const textValue = await bedtimePage.sleepDuration.getText();
    await expect(textValue).toContain(expectedPartialDuration);
});

Then('The {string} clock should have the value of {string}', async function(clockType, expectedClockValue) {
    const typeOfClock = {
        wakeUp: bedtimePage.wakeClock,
        bedtime: bedtimePage.bedtimeClock
    }
    
    let textClockValue = await typeOfClock[clockType].getText();
    textClockValue = trasnformToNormalFormatTime(textClockValue);

    await expect(textClockValue).toEqual(expectedClockValue);
});

Then('The bedtime card with title {string} should not be present', async function(cardTitle) {
    await scrollWithElement(bedtimePage.fullCardView, 500, 0.3, 'up');
    await expect(bedtimePage.getBedtimeCardTitle(cardTitle)).not.toBePresent();
})