import Page from "../page";
import { $, $$ } from "@wdio/globals";

class BedtimePage extends Page {

    get bedtimeIntroTitle() {
        return $('id=com.google.android.deskclock:id/bedtime_onboarding_intro_title');
    }

    get bedtimeOnBoardingStartButton() {
        return $('id=com.google.android.deskclock:id/bedtime_onboarding_start');
    }

    get preferenceSunrise() {
        return $('id=com.google.android.deskclock:id/preference_sunrise');
    }

    get preferenceVibrate() {
        return $('id=com.google.android.deskclock:id/preference_vibrate');
    }

    get fifteenMinutesLaterButton() {
        return $('~Fifteen minutes later');
    }

    get fifteenMinutesEarlierButton() {
        return $('~Fifteen minutes earlier');
    }

    get targetClock() {
        return $('id=com.google.android.deskclock:id/target_clock');
    }

    get nextButton() {
        return $('id=com.google.android.deskclock:id/bedtime_onboarding_next');
    }

    get skipButton() {
        return $('id=com.google.android.deskclock:id/bedtime_onboarding_skip');
    }

    get bedtimeClock() {
        return $('id=com.google.android.deskclock:id/bedtime_clock');
    }

    get wakeClock() {
        return $('id=com.google.android.deskclock:id/wake_clock')
    }

    get sleepDuration() {
        return $('id=com.google.android.deskclock:id/sleep_duration');
    }

    get bedtimeDialogLayout() {
        return $('id=com.google.android.deskclock:id/bedtime_dialog_layout');
    }

    get toggleSwitchAlarm() {
        return $('id=com.google.android.deskclock:id/toggle_switch');
    }

    get fullCardView() {
        return $('id=com.google.android.deskclock:id/card_view');
    }

    /**
     * 
     * @param {string} hour 
     * @returns {ChainablePromiseElement}
     */
    getBedtimeClockByAccesbilityId(hour) {
        return $(`~Bedtime ${hour}`);
    }

    /**
     * 
     * @param {string} hour 
     * @returns {ChainablePromiseElement}
     */
    getWakeClockByAccesibilityId(hour) {
        return $(`~Wake-up ${hour}`);
    }

    /**
     * 
     * @param {string} day 
     * @returns {ChainablePromiseElement}
     */
    getDayButton(day) {
        return $(`~${day}`);
    }

    /**
     * 
     * @param {number} cardNumber 
     * @returns {ChainablePromiseElement}
     */
    getBedtimeCardTitle(cardTitle) {
        return $(`android=new UiSelector().text("${cardTitle}")`)
    }

    /**
     * 
     * @param {object} time 
     */
    async setBedtimeAndWakeTime(time) {
        if(time.bedtime.format == 'PM') {
            time.bedtime.hour *= -1;
        }

        if(time.wakeUpTime.format == 'PM') {
            time.wakeUpTime *= -1;
        }        
    }

    /**
     * 
     * @param {object} currentTime
     * @param {number} currentTime.hour
     * @param {number} currentTime.minute
     * @param {'AM' | 'PM'} currentTime.format
     *  
     * @param {object} targetTime 
     * @param {number} targetTime.hour
     * @param {number} targetTime.minute
     * @param {'AM' | 'PM'} targetTime.format
     */
    async setTime(currentTime, targetTime) {

        if(currentTime.format != targetTime.format) {
            for(let count = 0; count < 48; count++) {
                await this.fifteenMinutesLaterButton.click();
            }
        }

        let fifteenMinutesEarlierTimes = 0;
        let fifteenMinutesLaterTimes = 0;

        const hourDifference = Math.abs(targetTime.hour - currentTime.hour);
        const minuteDifference = Math.abs(targetTime.minute - currentTime.minute);

        if(currentTime.hour < targetTime.hour) {
            fifteenMinutesLaterTimes += (4 * hourDifference);
        }
        else {
            fifteenMinutesEarlierTimes += (4 * hourDifference);
        }

        if(currentTime.minute < targetTime.minute) {
            fifteenMinutesLaterTimes += Math.round(minuteDifference / 15);
        }
        else {
            fifteenMinutesEarlierTimes += Math.round(minuteDifference / 15);
        }

        for(let time = 1; time <= fifteenMinutesEarlierTimes; time++) {
            await this.fifteenMinutesEarlierButton.click();
        }

        for(let time = 1; time <= fifteenMinutesLaterTimes; time++) {
            await this.fifteenMinutesLaterButton.click();
        }
    }


    /**
     * 
     * @param {ChainablePromiseElement} clock 
     */
    async toggleAlarm(clock) {
        await clock.click();
        await this.toggleSwitchAlarm.click();

        await browser.swipe({
            direction: 'down',
            percent: 0.75,
            scrollableElement: this.bedtimeDialogLayout,
            duration: 1000
        });
    }
}


export default new BedtimePage();