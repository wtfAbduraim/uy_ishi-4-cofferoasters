import React from 'react';
import './Two.scss'
import Language from '../../Localization/Localization';
import { Context as LocalizationCon } from '../../Context/Localization';

function Two() {
    const {lang} = React.useContext(LocalizationCon)
    return (
        <>
            <section className="two">
                <div className="container">
                    <div className="two__info">
                        <h1 className="two__heading">
                            {Language[lang].twopage.two.heading}
                        </h1>
                        <p className="two__text">
                            {Language[lang].twopage.two.text}
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Two;