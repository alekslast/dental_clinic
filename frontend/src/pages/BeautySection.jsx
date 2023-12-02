// Components
import ScrollTopButton  from '../components/ScrollTopButton';
import DownloadButton from '../components/DownloadButton';

// Styles
import '../styles/BeautySection.css';

// Images
import beautyLogo       from '../assets/BeautySection/logo1.png';
import lady             from '../assets/BeautySection/lady1.png';
import brush            from '../assets/BeautySection/transitionBrush1.png';
import cardPic1         from '../assets/BeautySection/card-pic1.png';
import cardPic2         from '../assets/BeautySection/card-pic2.png';
import cardPic3         from '../assets/BeautySection/card-pic3.png';
import wave             from '../assets/BeautySection/wave1.png';
import beautyLogoFace   from '../assets/BeautySection/beauty-logo-face.png';
import fbLogo           from '../assets/fb-logo.png';
import igLogo           from '../assets/ig-logo.png';


// Video
import video            from '../assets/BeautySection/video1.mp4';

export default function BeautySection() {
    return (
        <>
            <ScrollTopButton />
            <section className="beauty-section--header">
                <div className='beauty-section--header--logo'>
                    <h2 className='beauty-text'>Beauty</h2>
                    <img src={beautyLogo} alt='beauty logo' className='beauty-logo' />
                    <div className='beauty-postfix'>
                        <p className='beauty-ro'>Tot vizibilul e temporar</p>
                        <p className='beauty-ru'>Все видимое временно</p>
                    </div>
                </div>       
            </section>

            <section className='beauty-section--intro' id='promoții'>
                <div className='beauty-section--intro--inner'>
                    <div className='beauty-section--intro--lady'>
                        <img src={lady} />
                    </div>

                    <div className='beauty-section--intro--content'>
                        <div className='beauty-section--intro--logo'>
                            <h3>PROMOȚII</h3>
                            <img src={wave} alt='decorative wave' />
                        </div>                     
                        <div className='beauty-section--intro--text'>
                            <h4>Bine ați venit la "Miro-Studio".</h4>
                            <h2>Încredințați mâinilor pricepute ale stilistilor noștri și simțiți în fiecare mișcare grijă pentru strălucirea dvs. exterioară și interioară. Creăm imagini unice cu dragoste - pentru voi!</h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className='beauty-section--services' id='services'>
                <img src={brush} className='transition-brush' />

                <h2>Servicii</h2>
              
                <div className='beauty--cards'>
                    
                    <div className='beauty--card-element'>
                        <div className='beauty-circle-placeholder' />
                        <img src={cardPic1} className='beauty-card-img' />
                        <div className='beauty-services-card'>                                                  
                            <h5>Machiaj</h5>
                            <h6>Oferim următoarele servicii:</h6>
                            <ul>
                                <li>Machiaj</li>
                                <li>Extensii de gene</li>
                                <li>Corectarea sprâncenelor</li>                             
                             </ul>
                             <DownloadButton />                          
                        </div> 
                       
                                         
                    </div>
                    <div className='beauty--card-element'>
                        <div className='beauty-circle-placeholder' />
                        <img src={cardPic2} className='beauty-card-img' />
                        <div className='beauty-services-card'>                                                  
                            <h5>Coafor</h5>
                            <h6>Oferim următoarele servicii:</h6>
                            <ul>                         
                                <li>Aranjare, Vopsire, Suvițe</li>    
                                <li>Coafuri pentru doamne</li>   
                                <li>Proceduri  pentru păr</li>                            
                             </ul>
                             <button class="custom-button">Descărcați prețuri</button>
                            </div>                                                
                        </div>
                    <div className='beauty--card-element'>
                        <div className='beauty-circle-placeholder' />
                        <img src={cardPic3} className='beauty-card-img' />
                        <div className='beauty-services-card'>                                                  
                            <h5>Manichiură</h5>
                            <h6>Oferim următoarele servicii:</h6>
                            <ul>
                                <li>Manichiură</li>
                                <li>Pedichiură </li>
                                <li>Extensii de unghii</li>  
                                <button class="custom-button">Descărcați prețuri</button>                           
                             </ul>
                        </div>  
                    </div>
                </div>
            </section>

            <section className='beauty-section--commited'>
                <img src={beautyLogoFace} alt='logo face' />
                <h2>Bun venit în salonul nostru</h2>            
                <div class="container">
  <div>
    <div class="gallery">
      <h3>Orar Convenabil</h3>
      <span>Descoperiți frumusețea la timp.</span>
    </div>
  </div>
  <div>
    <div class="gallery">
      <h4>Ușor de Găsit</h4>
      <p>Salonul este ușor de găsit, iar frumusețea - ușor de atins.</p>
    </div>
  </div>
  <div>
    <div class="gallery">
      <h4>Ridicăm Nivelul Frumuseții</h4>
      <span> Experiența noastră este secretul frumuseții tale.</span>
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
            <p>Tel: 022 52 52 50</p>                     
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
