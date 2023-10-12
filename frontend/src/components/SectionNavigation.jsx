import { Link } from 'react-router-dom';


export default function SectionNavigation(props) {

    const path = props.path
    // console.log(path)

    return (
        <>
            <header className='nav-header'>
                <nav className='section-navigation'>
                    <Link to={path}>
                        Главная
                    </Link>

                    <a href='#services'>
                        Услуги
                    </a>
                    
                    <Link to={`${path}/posts`}>
                        Акции
                    </Link>

                    <a href='#contacts'>
                        Контакты
                    </a>

                </nav>
            </header>
        </>
    )
}
