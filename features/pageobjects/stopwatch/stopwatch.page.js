import Page from "../page";
import { $ } from "@wdio/globals";

class StopwatchPage extends Page {

    get startButton() {
        return $('android=new UiSelector().resourceId("com.google.android.deskclock:id/fab")');
    }

    get pauseButton() {
        return $('android=new UiSelector().resourceId("com.google.android.deskclock:id/fab")'); 
    }

    get resetButton() {
        return $('~Reset');
    }

    get lapButton() {
        return $('~Lap');
    }

    get lapList() {
        return $('id=com.google.android.deskclock:id/laps_list');
    }

    get stopwatchTimeText() {
        return $('id=com.google.android.deskclock:id/stopwatch_time_text');
    }

    get stopwatchHundredthsText() {
        return $('id=com.google.android.deskclock:id/stopwatch_hundredths_text');
    }

    get stopwatchCircle() {
        return $('id=com.google.android.deskclock:id/stopwatch_circle');
    }
}

export default new StopwatchPage();