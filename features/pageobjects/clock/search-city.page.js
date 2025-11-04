import Page from '../page';
import { $ } from "@wdio/globals";

class SearchCityPage extends Page {

	get selectorClockInput() {
		return $('id=com.google.android.deskclock:id/open_search_view_edit_text');
	}

	get resultOptionList() {
		return $('id=com.google.android.deskclock:id/search_results_view');
	}

	get resultOptions() {
		return this.resultOptionList.$$('android.widget.LinearLayout');
	}

	async getCityNameElement(option) {
		return option.$('id=com.google.android.deskclock:id/city_name');
	}

	async getFilteredOption(optionName) {
		let option = undefined;
		const options = await this.resultOptions;

		for(const optionElement of options) {
			const cityNameElement = await this.getCityNameElement(optionElement);
			const text = await cityNameElement.getText();

			if(text.includes(optionName)) {
				option = optionElement;
				break;
			}
		}


		return option;
	}
}


export default new SearchCityPage();