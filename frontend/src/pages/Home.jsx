// React Hooks
import { Link } from "react-router-dom";


// Components
import Footer from "../components/Footer";


// Styles
import '../styles/Home.css';


export default function Home() {
    return (
        <div className="home">

            <div className="home--epigraph">
                <h2>3:16</h2>
                <hr />
                <p className="epigraph--first-p">Fiidca asa a iubit Dumnezeu lumea...</p>
                
            </div>

            <div className="home--category--parent">
                <div className="home--category">
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

                    <p>Tot  ceea ce este invizibil este etern.</p>     

                </div>
             
              </div>
              <Footer />
        </div>
    )
}
