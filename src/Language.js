import locale from 'browser-locale';
import Cookie from 'react-cookies'
import {setDefaultLanguage, setDefaultTranslations} from 'react-multi-lang'

import en from './translations/en.json'
import nl from './translations/nl.json'

class Language {

    /**
     * The default language.
     * @type {string}
     */
    static DEFAULT_LANGUAGE = 'nl';

    /**
     * Name of the language cookie.
     * @type {string}
     */
    static COOKIE_NAME = 'lang';

    /**
     * Initializes the language.
     */
    static initialize() {
        setDefaultTranslations({en, nl});

        if (!Language.loadPreferredLanguage()) {
            const localString = locale().toLowerCase();

            if (localString.includes("en")) {
                setDefaultLanguage('en');
            } else if (localString.includes("nl")) {
                setDefaultLanguage('nl');
            } else {
                setDefaultLanguage(Language.DEFAULT_LANGUAGE);
            }
        }
    }

    /**
     * Loads and sets the preferred language.
     * @returns {boolean} {@code true} if there exists a stored language
     *              cookie, {@code false otherwise}
     */
    static loadPreferredLanguage() {
        let storedLocale = Cookie.load(Language.COOKIE_NAME);
        if (storedLocale !== undefined) {
            setDefaultLanguage(storedLocale);
            return true;
        }
        return false;
    }

    /**
     * Select and store the language.
     * @param language the new language
     */
    static selectPreferredLanguage(language) {
        Cookie.save(Language.COOKIE_NAME, language, {maxAge: 3600 * 24 * 365});
        setDefaultLanguage(language);
    }
}

export default Language;