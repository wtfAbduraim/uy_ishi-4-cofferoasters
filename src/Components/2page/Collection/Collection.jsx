import React from 'react';
import './Collection.scss'
import Brat from '../../Img/2page/Bitmap.png'
import Language from '../../Localization/Localization';
import { Context as LocalizationCon } from '../../Context/Localization';
import { Context as ThemeCon } from '../../Context/Theme';

function Collection () {
    const {lang} = React.useContext(LocalizationCon)
    const {theme} = React.useContext(ThemeCon)
    return (
        <>
            <section className={`collection collection--${theme}`}>
                <div className="container">
                    <img 
                        className="collection__img" 
                        src={Brat} 
                        alt="Brat" 
                        width="485" 
                        height="606"/>

                    <div className="collection__info">
                        <h2 className="collection__heading">
                            {Language[lang].twopage.collection.heading}
                        </h2>
                        <p className="collection__text">
                            {Language[lang].twopage.collection.text}
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Collection;