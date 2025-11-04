import { Given, When, Then } from "@wdio/cucumber-framework";
import timerPage from "../../pageobjects/timer/timer.page";
import { convertTimeToFullTime } from "../../../utils/time";
import { browser } from "@wdio/globals";

When('Sets the timer to {string}', async function(time) {
    await timerPage.setTimer(time);
});

When('Clicks the start timer button', async function() {
    await timerPage.startButton.click();
});

When('Stops the timer number {int} with a delay of {int} hours, {int} minutes and {int} seconds', async function(cardNumber, hours, minutes, seconds) {
    // La posicion recibe parametros de 1 a n. Y se convertira a cero indizado para el funcionamiento correcto
    const card = await timerPage.getNthCardTimer(cardNumber - 1);
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;

    await timerPage.stopTimer(totalSeconds, card);
});

When('Clicks the add new timer button', async function() {
    await timerPage.addTimerButton.click();
})

Then('The seconds remaining of the card number {int} should have the value {string}', async function(cardNumber,expectedTime) {
    await browser.pause(2000);

    const card = await timerPage.getNthCardTimer(cardNumber - 1);
    const secondsRemainingElement = await timerPage.getSecondsRemainingElement(card);

    let textTime = await secondsRemainingElement.getText();
    textTime = convertTimeToFullTime(textTime);

    await expect(textTime).toEqual(expectedTime);
});


Then('Deletes the timer card number {int}', async function(cardNumber) {
    const card = await timerPage.getNthCardTimer(cardNumber - 1);
    await timerPage.getCardDeleteButton(card).click();
})