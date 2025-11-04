import { Given, When, Then } from "@wdio/cucumber-framework";
import alarmPage from "../../pageobjects/alarm/alarm.page";
import alarmSoundPage from "../../pageobjects/alarm/alarm-sound.page";

When('Sets the alarm label with a name {string} and an hour {string}', async function(label, hour) {
    await alarmPage.setLabel(label);
});

When('Actives the alarm with hour {string}', async function(hour) {
    await alarmPage.getSwitchElement(hour).click();
});

When('Sets the alarm days of the {string} alarm with the days {string}', async function(hour, days) {
    days = days.split(',');
    await alarmPage.setAlarmDays(days);
});

When('Sets the ringtone from {string} to {string} of the {string} alarm', async function(currentRingtone, targetRingtone, hour) {
    await alarmPage.getRingtone(currentRingtone).click();
    await alarmSoundPage.setAlarmSound(targetRingtone);
});

When('Exits the selection ringtone menu', async function() {
    await alarmSoundPage.navigateUpButton.click();
});

Then('The label value should be {string}', async function(expectedLabel) {
    const textValue = await alarmPage.getLabelElement(expectedLabel).getText();
    await expect(textValue).toEqual(expectedLabel);
});

Then('There should be an alert that contains the message {string}', async function(partialMessage) {
    const snackbarText = await alarmPage.snackBarElement.getText();
    await expect(snackbarText).toContain(partialMessage);
});

Then('The days of the alarm should be {string}', async function(expectedDays) {
    const textDays = await alarmPage.repeatSummary.getText();
    await expect(textDays).toEqual(expectedDays);
});

Then('Colapses the alarm with hour {string}', async function(hour) {
    await alarmPage.getCollapseButton(hour).click();
});

Then('Expands the alarm with hour {string}', async function(hour) {
    await alarmPage.getExpandButton(hour).click();
});

Then('The ringtone should have the value of {string}', async function(expectedRingtone) {
    await expect(alarmPage.ringtone).toHaveText(expectedRingtone);
});
