import { Link } from "react-router-dom";


// Styles
import '../styles/Home.css';




const Home = () => {
    return (
        <div className="home">

            <div className="home--epigraph">
                <h2>3:16</h2>
                <hr />
                <p className="epigraph--first-p">Fiidca asa a iubit Dumnezeu lumea...</p>
                <p className="epigraph--colored-p">ибо так возлюбил Бог этот мир, что...</p>
            </div>

            <div className="home--category--parent">
                <div className="home--category">
                    <Link
                        className="home--link dent"
                        to='stomatologie'>

                        <div>
                            <h3>Pastreaza ce ti-e mai scump</h3>
                            <div className="dent--img" />
                            
                        </div>
                        
                    </Link>
                    <p>Сохрани то, что тебе дорого.</p>
                </div>

                <div className="home--category farm">
                    <Link
                        className="home--link"
                        to='farmacie'>

                        <div>
                            <h3>Vrei sa te faci sanatos?</h3>
                            <div className="farm--img" />
                        </div>

                    </Link>
                    <p>Нездоровые имеют нужду во враче.</p>
                </div>

                <div className="home--category beauty">
                    <Link
                        className="home--link"
                        to='beauty'>

                        <div>
                            <h3>Tot vizibilul e temporar</h3>
                            <div className="beauty--img" />
                        </div>
                    </Link>
                    <p>Нездоровые имеют нужду во враче.</p>
                </div>
            </div>

        </div>
    )
}

export default Home;