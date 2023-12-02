// Components
import ScrollTopButton  from '../components/ScrollTopButton';

// Styles
import '../styles/BeautySection.css';
// Default theme


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

//Photo Gallery

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

            <section className='beauty-section--intro'>
                <div className='beauty-section--intro--inner'>
                    <div className='beauty-section--intro--lady'>
                        <img src={lady} />
                    </div>

                    <div className='beauty-section--intro--content'>
                        <div className='beauty-section--intro--logo'>
                            <h3>Beauty</h3>
                            <img src={wave} alt='decorative wave' />
                        </div>                     
                        <div className='beauty-section--intro--text'>
                            <h4>Ne place să vedem zâmbete fericite.</h4>
                            <h2>Hai să-ți facem frumusețea o prioritate! </h2>
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
                            <p>machiaj, extensii de gene, corectarea sprâncenelor</p>
                        </div>
                    </div>

                    <div className='beauty--card-element'>
                        <div className='beauty-circle-placeholder' />
                        <img src={cardPic2} className='beauty-card-img' />
                        <div className='beauty-services-card'>
                            <h5>Coafor</h5>
                            <h6>Oferim următoarele servicii:</h6>
                            <p>tuns pentru bărbați și femei coafuri pentru doamne, aranjare, vopsire, șuvițe, proceduri de tratament pentru păr</p>
                        </div>
                    </div>

                    <div className='beauty--card-element'>
                        <div className='beauty-circle-placeholder' />
                        <img src={cardPic3} className='beauty-card-img' />
                        <div className='beauty-services-card'>
                            <h5>Manichiură</h5>
                            <h6>Oferim următoarele servicii:</h6>
                            <p>manichiură, pedichiură și extensii de unghii</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='beauty-section--commited'>
                <img src={beautyLogoFace} alt='logo face' />
                <h2>Bun venit în salonul nostru</h2>            
                <div class="container">
  <div>
    <div class="content">
      <h3>Jane Doe</h3>
      <span>UI & UX Designer</span>
    </div>
  </div>
  <div>
    <div class="content">
      <h1>Alex Smith</h1>
      <span>CEO Expert</span>
    </div>
  </div>
  <div>
    <div class="content">
      <h1>Emily New</h1>
      <span>Web Designer</span>
    </div>
  </div>
  <div>
    <div class="content">
      <h1>Lisa Boley</h1>
      <span>Marketing Coordinator</span>
    </div>
  </div>
</div>
                
            </section>
            <section className='beauty-section--footer'>
                <video src={video} autoPlay muted loop id='myVideo' />
                {/* <img src={bgVideo} id='myVideo' /> */}
                {/* <object data={bgVideo} /> */}
                {/* <embed src={bgVideo} /> */}

                <div className='beauty-section--footer--content'>
                    <div className='working-hours'>
                        <h3>Program de lucru</h3>
                        <b><p>Luni - Duminica</p></b>
                        <p>9:00  - 20:00 </p>

                        <b><p>Programare prealabilă </p></b>
                        <p>Tel: 022 52 52 50</p>
                        
                    </div>

                    <div className='contact-info' id='contacts'>
                        <h3>Adresa</h3>
                        <p>Or. Chisinau</p>
                        <p>Dacia 60/5 A</p>

                        <p>Tel: (022) 52 52 50</p>
                        <p>vitastef@mail.ru</p>
                    </div>

                    <div className='socials'>
                        <a href='#'>
                            <img src={fbLogo} />
                        </a>
                        <a href='#'>
                            <img src={igLogo} />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
