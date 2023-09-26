const Footer = () => {

    const currentYear = new Date().getFullYear()

    return (
        <footer>
            <p>Copyright {currentYear}. Vanya & Sanya</p>
        </footer>
    )
}

export default Footer;