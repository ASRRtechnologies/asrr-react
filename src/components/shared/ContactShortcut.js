import React, {Component} from 'react';
import Section5 from "../home/Section5";
import {translate} from 'react-multi-lang'

class ContactShortcut extends Component {
    render() {

        const {t} = this.props;
        return (
            <div>
                <div className="services-wrapper margin-work">
                    <h1>{t('work.portfolio.title')}</h1>
                    <p>{t('work.portfolio.text')}</p>
                </div>
            </div>
        );
    }
}

export default translate(ContactShortcut);
