import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home">

            <Link
                className="home--link"
                to='stomatologie'
            >
                <div>Stomatologie</div>
            </Link>

            <Link
                className="home--link"
                to='beauty'
            >
                <div>Beauty</div>

            </Link>

            <Link
                className="home--link"
                to='farmacie'
            >
                <div>Farmacie</div>
            </Link>

        </div>
    )
}

export default Home;