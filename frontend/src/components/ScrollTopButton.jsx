// React Hooks
import { useState, useEffect } from "react";

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

    const buttonStyle = {
        position: 'fixed',
        bottom: '30px',
        right: '50px',
        borderRadius: '99999px',
        height: '50px',
        width: '50px',
        fontSize: '40px',
        border: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f6f6f6',
        cursor: 'pointer',
        zIndex: 7,
        color: '#000',
        fontFamily: "'Questrial', sans-serif",
        visibility: scrollPosition > 0 ? 'visible' : 'hidden'
    }

    function handleClick() {
        window.scrollTo(0, 0)
    }

    return (
        <p style={buttonStyle} onClick={handleClick}>&#129081;</p>
        // &#129081;
        // &#11165;
        // &#11205;
    )
}