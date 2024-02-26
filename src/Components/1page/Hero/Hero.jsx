import React from 'react';
import './Hero.scss'
import Language from '../../Localization/Localization';
import { Context as LocalizationCon} from "../../Context/Localization";
import { Context as ThemeCon} from '../../Context/Theme';

function Hero() {
    const {lang} = React.useContext(LocalizationCon)
    const {theme} = React.useContext(ThemeCon)

    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="hero__info">
                        <h1 className="hero__heading">
                            {Language[lang].onepage.hero.heading}
                        </h1>
                        <p className="hero__text">
                            {Language[lang].onepage.hero.text}
                        </p>
                        <button className='hero__btn'>
                            {Language[lang].onepage.hero.btn}
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;