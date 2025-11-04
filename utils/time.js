/**
 * 
 * @param {string} time 
 * @returns {number}
 */
export function convertTimeToSeconds(time) {
    let factor = 3600;

    let totalSeconds = 0;    
    for(const stringNumber of time.split(':')) {
        const number = parseInt(stringNumber);

        totalSeconds += number * factor;
        factor /= 60;
    }

    return totalSeconds;
}


/**
 * 
 * @param {string} time 
 */
export function convertTimeToFullTime(time) {

    const batches = time.split(':');
    let fullTime = "";

    for(let index = 2; index >= 0; index--) {

        if(index >= batches.length) {
            fullTime += "00"
        }
        else {
            const timeStringExpression = batches[index]

            if(timeStringExpression.length == 2) {
                fullTime += timeStringExpression;
            }
            else {
                fullTime += ("0" + timeStringExpression);
            }
        }
       

        if(index != 0) {
            fullTime += ":";
        }
    }

    return fullTime;
}


/**
 * 
 * @param {string} time 
 * @returns {string}
 */
export function trasnformToNormalFormatTime(time) {
    return time.replace(' ', ' ');
}

/**
 * 
 * @param {string} time 
 * @returns {string}
 */
export function trasnformToWeirdFormatTime(time) {
    return time.replace(' ',' ');
}

/**
 * 
 * @param {string} time
 * @returns {object} 
 */
export function convertStringTimeToObject(time) {
    //11:00 AM
    time = time.split(' ');
    const format = time[1];
    const hourString = time[0].split(':')[0];
    const minuteString = time[0].split(':')[1];
    
    return {
        hour: parseInt(hourString),
        minute: parseInt(minuteString),
        format: format
    };
}

 /**
 * 
 * @param {object} timeObject
 * @param {number} timeObject.hour
 * @param {number} timeObject.minute
 * @param {'AM' | 'PM'} timeObject.format
 */
export function convertObjectToStringTime(timeObject) {
    let result = "";

    result += timeObject.hour + ":";
    result += (timeObject.minute < 10 ? '0': '') + timeObject.minute + " ";
    result += timeObject.format;

    return result;
}