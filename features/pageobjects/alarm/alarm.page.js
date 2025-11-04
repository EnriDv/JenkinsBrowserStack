import Page from "../page";
import { $ } from "@wdio/globals";

class AlarmPage extends Page {

    get snackBarElement() {
        return $('id=com.google.android.deskclock:id/snackbar_text');
    }

    get addLabelOkButton() {
        return $('id=android:id/button1');
    }

    get editLabelButton() {
        return $('id=com.google.android.deskclock:id/edit_label');
    }

    get editLabelInput() {
        return $('id=com.google.android.deskclock:id/label_input_field');
    }

    get ringtone() {
        return $('id=com.google.android.deskclock:id/choose_ringtone')
    }

    get repeatSummary() {
        return $('id=com.google.android.deskclock:id/repeat_summary');
    }

    /**
     * 
     * @param {string} dayName 
     * @returns 
     */
    getDayButton(dayName) {
        return $(`~${dayName}`);
    }

    /**
     * 
     * @param {string} name 
     * @returns {ChainablePromiseElement}
     */
    getRingtone(name) {
        return $(`~Ringtone ${name}`)
    }

    /**
     * 
     * @param {string} hour
     * @return {ChainablePromiseElement} 
     */
    getExpandButton(hour) {
        return $(`android=new UiSelector().description("Expand ${hour} alarm")`);
    }

    /**
     * 
     * @param {string} hour 
     * @returns {ChainablePromiseElement}
     */
    getCollapseButton(hour) {
        return $(`~Collapse ${hour} alarm`);
    }

    /**
     * 
     * @param {string} hour 
     * @returns {ChainablePromiseElement} 
     */
    getSwitchElement(hour) {
        return $(`~${hour} alarm`);
    }

    /**
     * 
     * @param {string} name 
     */
    getLabelElement(name) {
        return $(`~Label ${name}`);
    }

    /**
     * 
     * @param {string} name 
     * @param {string} hour
     */
    async setLabel(name) {
        await this.editLabelButton.click();
        await this.editLabelInput.setValue(name);

        await this.addLabelOkButton.click();        
    }  

    /**
     * 
     * @param {Array<string>} days 
     */
    async setAlarmDays(days) {
        for(const day of days) {
            const button = this.getDayButton(day);
            await button.click();
        }
    }
}


export default new AlarmPage();