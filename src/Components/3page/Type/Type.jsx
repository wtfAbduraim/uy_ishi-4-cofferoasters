import React from 'react';
import './Type.scss'
import Language from '../../Localization/Localization';
import { Context as LocalizationCon } from '../../Context/Localization';
import { Context as ThemeCon } from '../../Context/Theme';

function Type() {
    const { lang } = React.useContext(LocalizationCon)
    const { theme } = React.useContext(ThemeCon)
    return (
        <>
            <section className={`type type--${theme}`}>
                <div className="container">
                    <ul className='type__list'>
                        <li className='type__item'>
                            <p className='type__text'>01</p>
                            <span className='type__span'>
                                {Language[lang].threepage.type.span1}
                            </span>
                        </li>
                        <hr className='type__line' />

                        <li className='type__item'>
                            <p className='type__text'>02</p>
                            <span className='type__span'>
                                {Language[lang].threepage.type.span2}
                            </span>
                        </li>
                        <hr className='type__line' />

                        <li className='type__item'>
                            <p className='type__text'>03</p>
                            <span className='type__span'>
                                {Language[lang].threepage.type.span3}
                            </span>
                        </li>
                        <hr className='type__line' />

                        <li className='type__item'>
                            <p className='type__text'>04</p>
                            <span className='type__span'>
                                {Language[lang].threepage.type.span4}
                            </span>
                        </li>
                        <hr className='type__line' />

                        <li className='type__item'>
                            <p className='type__text'>05</p>
                            <span className='type__span'>
                                {Language[lang].threepage.type.span5}
                            </span>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Type;