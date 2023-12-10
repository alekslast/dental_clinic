// React Hooks
import { Link } from "react-router-dom";

// Components
import Footer from "../components/Footer";
import Header from '../components/Header';

// Styles
import '../styles/Home.css';
import '../styles/Header.css';

export default function Home() {
    return (
        <div className="home">
          <Header /> {/* Добавлен Header */}          
            <div className="home--category--parent">
                <div className="home--category dent">
                    <Link
                        className="home--link dent"
                        to='stomatologie'>
                        <div>
                            <div className="dent--img" />
                        </div>
                    </Link>
                    <p>Pastreaza ce ti-e mai scump</p>
                </div>

                <div className="home--category farm">
                    <Link
                        className="home--link"
                        to='farmacie'>
                        <div>
                            <div className="farm--img" />
                        </div>
                    </Link>
                    <p>Vrei sa te faci sanatos?</p>
                </div>

                <div className="home--category beauty">
                    <Link
                        className="home--link"
                        to='beauty'>
                        <div>
                            <div className="beauty--img" />
                        </div>
                    </Link>
                    <p>Tot ceea ce este invizibil este etern.</p>
                </div>
               
            </div>

           
             {/* Add the left background image */}
             <div className="background-image left" />

            {/* Add the right background image */}
            <div className="background-image right" />
            <Footer />  
        </div>
    )
}
