// Components
import ScrollTopButton from '../components/ScrollTopButton';

// Styles
import '../styles/FarmSection.css';

// Images
import pharmLogo        from '../assets/FarmSection/logo2.png';
import headerMan        from '../assets/FarmSection/header-man.png';
import headerPills      from '../assets/FarmSection/header-pills.png';
import introGirl        from '../assets/FarmSection/intro-girl.png';
import wave             from '../assets/FarmSection/wave.png';
import doctor1          from '../assets/DentSection/doctor1.png';
import doctor2          from '../assets/DentSection/doctor2.png';
import doctor3          from '../assets/DentSection/doctor3.png';
import logoPill         from '../assets/FarmSection/farm-logo.png';
import fbLogo           from '../assets/fb-logo.png';
import igLogo           from '../assets/ig-logo.png';

// Video
import video            from '../assets/FarmSection/111.mp4';

export default function FarmSection() {

    const screenWidth = window.innerWidth;
    console.log(screenWidth)
    const designedMaxWidth = 1366;
    const coeficient = designedMaxWidth / screenWidth;
    console.log(coeficient)
    const sideMargins = (1 - coeficient) * 100 / 2
    console.log(sideMargins)
    return (
        <>
            <ScrollTopButton />
            <section className="farm-section--header">
                     <div className='farm-section--header--logo'>
                        <h2 className='farm-text'>Farm</h2>
                        <img src={pharmLogo} className='farm-logo' />
                        <div className='farm-postfix'>
                            <p className='farm-ru'>Сохрани то, что тебе дорого</p>
                            <p className='farm-ro'>Păstrează ce ți-e mai scump</p>
                        </div>
                    </div>         
            </section>

            <section className='farm-section--intro' id='promoții'>
                <div className='farm-section--intro--inner'>
                    <div className='farm-section--intro--content'>
                        <div className='farm-section--intro--logo'>
                            <h3>Home</h3>
                            <img src={wave} alt='decorative wave' />
                        </div>                       
                        <div className='farm-section--intro--text'>
                            <h4>Bine ați venit la Farmacia Noastră!</h4>
                            <h2>
                                 Suntem aici pentru a vă oferi 
                                servicii farmaceutice de înaltă calitate 
                                și pentru a răspunde nevoilor dumneavoastră de 
                                sănătate. Cu o echipă dedicată și o gamă variată 
                                de produse, suntem gata să vă ajutăm să vă mențineți
                                sănătatea și bunăstarea.
                            </h2>
                        </div>
                    </div>

                    <div className='farm-section--intro--lady'>
                        <img src={introGirl} />
                    </div>
                </div>
            </section>

            <section className='farm-section--services' id='services'>
                <h2>Servicii</h2>
                <div className='farm--cards'>        
                    <div className='farm--card-element'>
                        <div className='farm-circle-placeholder' />
                        <img src={doctor3} className='farm-card-img' />
                        <div className='farm-services-card'>
                            <h5>Consultatii</h5>  
                            <br/>                        
                            <p>Ne mândrim cu faptul că oferim o gamă largă de medicamente și consultanță profesională pentru menținerea sănătății și bunăstării dvs.
</p>
                        </div>
                    </div>

                    <div className='farm--card-element'>
                        <div className='farm-circle-placeholder' />
                        <img src={doctor2} className='farm-card-img' />
                        <div className='farm-services-card'>
                            <h5>Măsurarea presiunii</h5>
                           <br/>
                            <p>Este important să efectuați măsurarea tensiunii arteriale regulat pentru a vă monitoriza starea de sănătate.</p>
                        </div>
                    </div>

                    <div className='farm--card-element'>
                        <div className='farm-circle-placeholder' />
                        <img src={doctor1} className='farm-card-img' />
                        <div className='farm-services-card'>
                            <h5>Asistență<br/> medical-sanitară</h5>
                           <br/>
                            <p>Bine ați venit în farmacia noastră, unde sănătatea și bunăstarea dvs. sunt prioritatea noastră.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='beauty-section--footer'>
                <video src={video} autoPlay muted loop id='myVideo' />
               
                <div className='beauty-section--footer--content'>
    <h2>CONTACTE</h2>
    <div className='address-info'>
        <div className='working-hours'>
            <h3>Program de lucru</h3>
            <p>Luni - Duminica</p>
            <p>9:00  - 20:00 </p>
            <p>Programare prealabilă </p>
            <p>Tel: 022 52 52 50 
            <br/>Mob +373 78 52 66  </p>                  
        </div>

        <div className='contact-info' id='contacts'>
            <h3>Adresa</h3>
            <p>Or. Chisinau</p>
            <p>Dacia 60/5 A</p>
            <p>vitastef@mail.ru</p>
        </div>
        <div className='socials'>
            <a href='#'>
                <img src={fbLogo} alt="Facebook Logo" />
            </a>
            <a href='#'>
                <img src={igLogo} alt="Instagram Logo" />
            </a>
        </div>
    </div>
</div>
            </section>
        </>
    )
}
