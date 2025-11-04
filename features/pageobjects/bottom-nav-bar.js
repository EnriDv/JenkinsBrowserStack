import Page from './page';
import { $, $$ } from "@wdio/globals";

class BottomNavigationBar extends Page {

	get clockButton() {
		return $('~Clock');
	}

	get timerButton() {
		return $('~Timer');
	}

	get stopwatchButton() {
		return $('~Stopwatch');
	}

	get alarmButton() {
		return $('~Alarm');
	}

	get bedTimeButton() {
		return $('~Bedtime');
	}

    /**
	 * 
	 * @param {string} section 
	 */
	async goToSection(section) {
		
		section = section.toLowerCase();

		switch(section) {
			case "alarm":
				await this.alarmButton.click(); 
				break;
			case "timer":
				await this.timerButton.click();
				break;
			case "stopwatch":
				await this.stopwatchButton.click();
				break;
			case "clock":
				await this.clockButton.click();
				break;
			case "bedtime":
				await this.bedTimeButton.click();
				break;
			default:
				throw new Exception("The argument is an invalid section");
		}
	}
}

export default new BottomNavigationBar();