import Page from "../page";
import { $ } from "@wdio/globals";
import { scrollToElement } from "../../../utils/scroll";

class AlarmSoundPage extends Page {

    get dismissButton() {
        return $('id=com.google.android.deskclock:id/dismiss');
    }

    get ringtoneContent() {
        return $('id=com.google.android.deskclock:id/ringtone_content');
    }

    get navigateUpButton() {
        return $('~Navigate up');
    }

    /**
     * 
     * @param {string} soundName 
     * @returns {ChainablePromiseElement}
     */
    getAlarmSound(soundName) {
        return $(`android=new UiSelector().text("${soundName}")`)
    }

    async setAlarmSound(soundName) {
        const selector = `android=new UiSelector().text("${soundName}")`;

        await this.dismissButton.click();

        await scrollToElement(this.ringtoneContent, selector, 3, 0.3, 'up');

        await this.getAlarmSound(soundName).click();        
    }   
}


export default new AlarmSoundPage();