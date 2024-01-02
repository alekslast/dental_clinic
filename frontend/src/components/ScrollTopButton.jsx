// React Hooks
import { useState, useEffect } from "react";

// Styles
import '../styles/ScrollTopButton.css';

export default function ScrollTopButton() {

    const screenHeight                          = window.innerHeight;
    const [scrollPosition, setScrollPosition]   = useState(0);
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const buttonStyle = scrollPosition > 0 ? 'scroll-to-top-btn visible' : 'scroll-to-top-btn'

    function handleClick() {
        window.scrollTo(0, 0)
    }

    return (
        <button onClick={handleClick} className={buttonStyle}>
   
</button>
        //<button onClick={handleClick} className={buttonStyle}>&#11165;</button>
        // &#129081;
        // &#11165;
        // &#11205;
    )
}