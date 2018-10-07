import locale from 'browser-locale';
import {setDefaultTranslations, setDefaultLanguage} from 'react-multi-lang'

import en from './translations/en.json'
import nl from './translations/nl.json'

setDefaultTranslations({en, nl});

class Language {

    static initialize() {
        const localString = locale().toLowerCase();

        if (localString.includes("en")) {
            setDefaultLanguage('en');
        } else if (localString.includes("nl")) {
            setDefaultLanguage('nl');
        } else {
            setDefaultLanguage('en');
        }
    }

}

export default Language;