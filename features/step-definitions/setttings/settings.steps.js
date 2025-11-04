import { Given, When, Then } from "@wdio/cucumber-framework";
import settingsPage from "../../pageobjects/settings/settings.page";
import clockPage from "../../pageobjects/clock/clock.page";
import screenSaverPage from "../../pageobjects/screen-saver/screen-saver.page";
import { scrollWithElement } from "../../../utils/scroll";

When('Sets off the alarm sound', async function() {
    await settingsPage.setOffAlarmVolume();
});

When('Resets the alarm volume', async function() {
    await settingsPage.resetAlarmVolume();
});

When('Sets the clock style to {string} mode', async function (styleOption) {
    await settingsPage.styleButton.click();
    await settingsPage.getStyleOption(styleOption).click();
});

When('Sets the screen saver clock style to {string}', async function (clockStyle) {
   await scrollWithElement(settingsPage.scrollView, 500, 0.7, 'up');
   await settingsPage.styleButton.click();
   await settingsPage.getStyleOption(clockStyle).click();
});

When('Exits the configuration section', async function() {
    await settingsPage.navigateUpButton.click();
});

When('Silences the alarm after {string}', async function(optionTitle) {
    await settingsPage.silenceAfterButton.click();
    await settingsPage.getSilenceAfterOption(optionTitle).click();
});

Then('The silence after configuration with the value {string} should be displayed', async function(expectedText) {
    await expect(settingsPage.getSilenceAfterInformation(expectedText)).toBeDisplayed();
});

Then('The volume level should have the value {string}', async function(level) {
    await expect(settingsPage.volumeSlider).toHaveText(level);
});

Then('The {string} clock type should be displayed', async function(clockType) {
    const clockTypes = {
        analog: clockPage.analogClock,
        digital: clockPage.digitalClock
    }

    await expect(clockTypes[clockType]).toBeDisplayed();
});

Then('The {string} clock type in the screen saver should be displayed', async function(clockType) {
    await expect(screenSaverPage.getclock(clockType.toLowerCase())).toBeDisplayed();
});

Then('Exits the screen saver', async function () {
    await screenSaverPage.container.click();
});