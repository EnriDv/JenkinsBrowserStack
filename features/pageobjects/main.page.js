import Page from "./page";
import { $, $$ } from "@wdio/globals";

class MainPage extends Page {

    get actionBarTitle() {
        return $('id=com.google.android.deskclock:id/action_bar_title');
    }

    //Usamos el id ya que en la seccion de bedtime existe otro elemento con accesibility id = ~More options
    get moreOptionsButton() {
        return $('id=com.google.android.deskclock:id/overflow_action_button');
    }

    /**
     * 
     * @param {string} optionNumber 
     * @returns {ChainablePromiseElement}
     */
    getOption(optionText) {
        return $(`android=new UiSelector().text("${optionText}")`);
    }
}

export default new MainPage();