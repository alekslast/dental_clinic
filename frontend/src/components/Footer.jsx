export default function Footer() {
    const isVisible = false;
  
    return (
        <div style={{ display: isVisible ? 'block' : 'none' }}>
       <footer>
            <p >Comanda profesioniștilor de la Aviagorodok</p>
        </footer>
        </div>
    )
}
