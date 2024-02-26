import React from "react";
import "./Home.scss"
import Language from '../../Localization/Localization';
import { Context as LocalizationUp} from '../../Context/Localization';

function Home() {
    const { lang } = React.useContext(LocalizationUp)  

    return (
        <>
            <div className="container">
                <div className="home">
                    <h2 className="home__heading">
                        {Language[lang].home}
                    </h2>
                </div>
            </div>
        </>
    )
}

export default Home;