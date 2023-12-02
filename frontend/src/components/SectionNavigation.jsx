import { Link } from 'react-router-dom';

export default function SectionNavigation(props) {

    const path = props.path
    let sectionDependentNavStyle;
    // console.log(path)
    

    switch (path) {
        case '/stomatologie':
            sectionDependentNavStyle = 'dent-section-navigation';
            break;
        case '/farmacie':
            sectionDependentNavStyle = 'farm-section-navigation';
            break;
        case '/beauty':
            sectionDependentNavStyle = 'beauty-section-navigation';
            break;
        default:
            sectionDependentNavStyle = 'section-navigation';
    }

    return (
        <>
            <header className='nav-header'>
                <nav className={sectionDependentNavStyle}>
                    <Link  to='/'>
                    PRINCIPALA
                    </Link>

                    <a href='#services'>
                    SERVICII
                    </a>
                    <Link to={`${path}/posts`}>
                    ACTIE
                    </Link>
                    <a href='#contacts'>
                    CONTACTE
                    </a>
                </nav>
            </header>
        </>
    )
}
