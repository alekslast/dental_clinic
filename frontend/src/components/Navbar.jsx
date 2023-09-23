import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <header>
            <nav className="nav--container">
                <Link to='/'>
                    <p>Home</p>
                </Link>

                <Link to='/stomatologie'>
                    <p>Stomatologie</p>
                </Link>

                <Link to='/beauty'>
                    <p>Beauty</p>
                </Link>

                <Link to='/farmacie'>
                    <p>Farmacie</p>
                </Link>
            </nav>
        </header>
    )
}

export default Navbar;