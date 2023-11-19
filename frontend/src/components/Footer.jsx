export default function Footer() {
    const isVisible = false;
  
    return (
        <div style={{ display: isVisible ? 'block' : 'none' }}>
       <footer>
            <p style={{marginBottom: '-300px'}}>Comanda profesioniștilor de la Aviagorodok</p>
        </footer>
        </div>
    )
}
