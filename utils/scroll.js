import { browser } from "@wdio/globals";

/**
 * 
 * @param {ChainablePromiseElement} scrollableElement 
 * @param {string} elementIdentifier 
 * @param {number} maxScrolls 
 * @param {number} percentage 
 * @param {string} direction 
 * 
 * @return {boolean}
 */
export async function scrollToElement(scrollableElement, elementIdentifier, maxScrolls, percentage, direction) {
    
    for(let scroll = 1; scroll <= maxScrolls; scroll += 1) {
        const elements = await $$(elementIdentifier);

        if(elements.length > 0) {
            return true;
        }

        await browser.swipe({
            direction: direction,
            duration: 200,
            percent: percentage,
            scrollableElement: scrollableElement
        });
    }

    return false;
}

/**
 * 
 * @param {ChainablePromiseElement} scrollableElement 
 * @param {number} duration 
 * @param {number} percent 
 * @param {string} direction 
 */
export async function scrollWithElement(scrollableElement, duration, percent, direction) {
    await browser.swipe({
        direction: direction,
        duration: duration,
        percent: percent,
        scrollableElement: scrollableElement
    });
}

/**
 * 
 * @param {number} startX 
 * @param {number} startY 
 * @param {number} endX 
 * @param {number} endY 
 * @param {number} duration 
 */
export async function scrollWithCoordinates(startX, startY, endX, endY, duration) {
    await browser.swipe({
        from: {
            x: startX,
            y: startY
        },
        to: {
            x: endX,
            y: endY
        },
        duration: duration
    })
}