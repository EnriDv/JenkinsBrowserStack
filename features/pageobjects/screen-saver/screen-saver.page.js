import Page from "../page";

class ScreenSaver extends Page {

    get container() {
        return $('id=com.google.android.deskclock:id/saver_container')
    }

    /**
     * 
     * @param {string} clockType 
     * @returns {ChainablePromiseElement}
     */
    getclock(clockType) {
        return $(`id=com.google.android.deskclock:id/${clockType}_clock`)
    }
}

export default new ScreenSaver();