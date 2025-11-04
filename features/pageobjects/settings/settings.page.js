import Page from "../page";
import { $$, $ } from "@wdio/globals";

class SettingsPage extends Page {
    get styleButton() {
        return $('android=new UiSelector().text("Style")');
    }

    get silenceAfterButton() {
        return $('android=new UiSelector().text("Silence after")');
    }

    get timerSoundButton() {
        return $('android=new UiSelector().text("Timer sound")');
    }

    get volumeSlider() {
        return $('id=com.google.android.deskclock:id/alarm_volume_slider');
    }

    get navigateUpButton() {
        return $('~Navigate up');
    }

    get scrollView() {
        return $('android.widget.ScrollView');
    }

    /**
     * 
     * @param {string} option 
     * @returns {ChainablePromiseElement}
     */
    getStyleOption(option) {
        return $(`android=new UiSelector().text("${option}")`);
    }

    /**
     * 
     * @param {string} optionTitle 
     * @returns {ChainablePromiseElement}
     */
    getSilenceAfterOption(optionTitle) {
        return $(`android=new UiSelector().text("${optionTitle}")`);
    }

    /**
     * 
     * @param {string} text 
     * @returns {ChainablePromiseElement}
     */
    getSilenceAfterInformation(content) {
        return $(`android=new UiSelector().text("${content}")`);
    }
    
    //419.0063 de x
    async setOffAlarmVolume() {
        await this.volumeSlider.click({
            x: -419
        });
    }

    async resetAlarmVolume() {
        await this.volumeSlider.click();
    }


}

export default new SettingsPage();