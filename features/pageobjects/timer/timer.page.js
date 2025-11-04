import Page from "../page";
import { $, browser } from "@wdio/globals";

class TimerPage extends Page {

    get backspace() {
        return $('~Backspace');
    }

    get startButton() {
        return $('~Start');
    }

    get addTimerButton() {
        return $('~Add timer');
    }

    /**
     * 
     * @param {string} digit
     * @returns {ChainablePromiseElement} 
     */   
    async getDigitElement(digit) {
        return $(`id=com.google.android.deskclock:id/timer_setup_digit_${digit}`);
    }

    /**
     * 
     * @param {number} numberOfcard 
     */
    async getNthCardTimer(numberOfcard) {
        //El elemento ViewGroup de la primera targeta es la posicion 5 inciando desde cero, por lo que se hara una modificacion en los indices
        numberOfcard += 5;

        return $(`android=new UiSelector().className("android.view.ViewGroup").instance(${numberOfcard})`)
    }

    /**
     * 
     * @param {ChainablePromiseElement} card 
     * @returns {ChainablePromiseElement}
     */
    async getCardPlayButton(card) {
        return card.$('~Start');
    }

    /**
     * 
     * @param {ChainablePromiseElement} card 
     * @returns {ChainablePromiseElement}
     */
    getCardDeleteButton(card) {
        return card.$('id=com.google.android.deskclock:id/tertiary_button');
    }

    /**
     * 
     * @param {ChainablePromiseElement} card 
     * @returns { ChainablePromiseElement}
     */
    async getCardPauseButton(card) {
        return card.$('~Pause');
    }

    /**
     * 
     * @param {ChainablePromiseElement} card 
     */
    async getCardStopButton(card) {
        return card.$('~Stop');
    }

    /**
     * 
     * @param {ChainablePromiseElement} card 
     * @returns {ChainablePromiseElement}    
     */
    async getSecondsRemainingElement(card) {
        return card.$(`id=com.google.android.deskclock:id/timer_text`);
    }

    /**
     * 
     * @param {string} time 
     */
    async setTimer(time) {

        const sequenceOfDigits = time.split(':');

        for(const digitBatch of sequenceOfDigits) {

            for(const digit of digitBatch) {
                const digitElement = await this.getDigitElement(digit);
                await digitElement.click();
            }

        }
    }

    async stopTimer(delayInSeconds, card) {
        await browser.pause(delayInSeconds * 1000);

        const pauseButton = await this.getCardStopButton(card);

        await pauseButton.click();
    }
}

export default new TimerPage();