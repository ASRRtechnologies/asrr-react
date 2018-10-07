import locale from 'browser-locale';
import Cookie from 'react-cookies'
import {setDefaultTranslations, setDefaultLanguage} from 'react-multi-lang'

import en from './translations/en.json'
import nl from './translations/nl.json'

class Language {

    static DEFAULT_LANGUAGE = 'en';
    static COOKIE_NAME = 'lang';

    static initialize() {
        setDefaultTranslations({en, nl});
        const localString = locale().toLowerCase();

        if (!Language.loadPreferredLanguage()) {
            if (localString.includes("en")) {
                setDefaultLanguage('en');
            } else if (localString.includes("nl")) {
                setDefaultLanguage('nl');
            } else {
                setDefaultLanguage(Language.DEFAULT_LANGUAGE);
            }
        }
    }

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
        console.log(language);
        Cookie.save(Language.COOKIE_NAME, language, {maxAge: 3600 * 24 * 365});
        setDefaultLanguage(language);
    }
}

export default Language;