import { Given, When, Then } from "@wdio/cucumber-framework";
import stopwatchPage from "../../pageobjects/stopwatch/stopwatch.page";

Then('The {string} element should be present', async function(elementName) {
    const elements = {
        "start-button": stopwatchPage.startButton,
        "time-text": stopwatchPage.stopwatchTimeText,
        "hundredths-text": stopwatchPage.stopwatchHundredthsText,
        "circle": stopwatchPage.stopwatchCircle
    }

    await expect(elements[elementName]).toBePresent();
});

Then('The {string} element should not be present', async function(elementName) {
    const elements = {
        "lap-button": stopwatchPage.lapButton,
        "reset-button": stopwatchPage.resetButton
    }

    await expect(elements[elementName]).not.toBePresent();
});