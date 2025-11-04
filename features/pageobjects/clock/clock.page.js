import Page from '../page';
import { $, $$, browser } from "@wdio/globals";
import searchCityPage from './search-city.page';

class ClockPage extends Page {

	get addCityButton(){ 
		return $('~Add city');
	}

	get cityListElement() {
		return $('id=com.google.android.deskclock:id/cities');
	}

	get cities() {
		return this.cityListElement.$$('androidx.cardview.widget.CardView');
	}

	get analogClock() {
		return $('id=com.google.android.deskclock:id/analog_clock');
	}

	get digitalClock() {
		return $('id=com.google.android.deskclock:id/digital_clock');
	}

	async addClock(city) {
		await this.addCityButton.click();

        await searchCityPage.selectorClockInput.setValue(city);

        const option = await searchCityPage.getFilteredOption(city);
        await option.click();
	}


	/**
	 * 
	 * @param {ChainablePromiseElement} card 
	 * @returns {ChainablePromiseElement}
	 */
	getCityNameClockElement(card) {
		return card.$('id=com.google.android.deskclock:id/city_name');
	}

	/**
	 * 
	 * @param {string} searchedCityName 
	 * @returns {ChainablePromiseElement | undefined}
	 */
	async getClockCard(searchedCityName) {
		const cards = await this.cities;

		for(const card of cards) {
			const cityNameElement = await this.getCityNameClockElement(card);
			const cityName = await cityNameElement.getText();

			if(searchedCityName.includes(cityName)) {
				return card;
			}
		}

		return undefined;
	}

	async deleteClock(clockCard) {
		await browser.swipe({
            direction: 'left',
            duration: 1000,
            percent: 0.8,
            scrollableElement: clockCard
        });
	}

}


export default new ClockPage();