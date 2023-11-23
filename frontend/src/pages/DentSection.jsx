// Components
import ScrollTopButton from '../components/ScrollTopButton';

// Styles
import '../styles/DentSection.css';

// Images
import dentLogo         from '../assets/DentSection/logo.png';
import wave             from '../assets/DentSection/wave1.png';
import toothIntro       from '../assets/DentSection/dent-intro.png';
import doctor1          from '../assets/DentSection/doctor1.png';
import doctor2          from '../assets/DentSection/doctor2.png';
import doctor3          from '../assets/DentSection/doctor3.png';
import sdLogo           from '../assets/DentSection/dent-logo-sd.png';
import ladyDoc          from '../assets/DentSection/lady-doc1.png';
import footerPic        from '../assets/DentSection/footer-pic.png';
import fbLogo           from '../assets/fb-logo.png';
import igLogo           from '../assets/ig-logo.png';




export default function DentSection() {
    return (
        <>
            <ScrollTopButton />
            <section className="dent-section--header">
                <div className='dent-section--header--logo'>
                    <h2 className='dent-text'>Dent</h2>
                    <img src={dentLogo} className='dent-logo' />
                    <div className='dent-postfix'>
                        <p className='dent-ru'>Сохрани то что тебе дорого.</p>
                        <p className='dent-ro'>Păstrează ce ți-e mai scump</p>
                    </div>
                </div>
            </section>

            <section className='dent-section--intro'>
                <div className='dent-section--intro--inner'>
                    <div className='dent-section--intro--tooth'>
                        <img src={toothIntro} />
                    </div>

                    <div className='dent-section--intro--content'>
                        <div className='dent-section--intro--logo'>
                            <h3>DENT</h3>
                            <img src={wave} alt='decorative wave' />
                        </div>
                        
                        <div className='dent-section--intro--text'>
                            <h4>Ne place să vedem zâmbete fericite.</h4>
                            <h2>Hai să-ți facem sănătatea dentară
o prioritate! <br /> a priority!</h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className='dent-section--doctors' id='services'>
                <h2>Servicii</h2>

                <div className='dent--cards'>
                    
                    <div className='dent--card-element'>
                        <div className='dent-circle-placeholder' />
                        <img src={doctor3} className='dent-card-img' />
                        <div className='dent-services-card'>
                            <h5>Tratamentul cariei</h5>
                            <h6>Oferim următoarele servicii:</h6>
                            <ul>
                                <li>Consultaţie</li>
                                <li>Anestezie</li>
                                <li>Înălbirea dinţilor</li>
                                <li>Tratamentul paradontitei</li>
                                <li>Restauraţie cu ceramica</li>
                                </ul>
                        </div>
                    </div>

                    <div className='dent--card-element'>
                        <div className='dent-circle-placeholder' />
                        <img src={doctor2} className='dent-card-img' />
                        <div className='dent-services-card'>
                            <h5>Ortopedie</h5>
                            <h6>Oferim următoarele servicii:</h6>
                            <ul>
                            <li>Coroniţă metaloceramică</li>
                            <li>Coroniţă ceramică</li>
                            <li>Coroniţă presată</li>
                            <li>Coroniţă implant</li>
                            <li>Coroniţă ceramică implant</li>
                            </ul>
                        </div>
                    </div>

                    <div className='dent--card-element'>
                        <div className='dent-circle-placeholder' />
                        <img src={doctor1} className='dent-card-img' />
                        <div className='dent-services-card'>
                            <h5>Chirurgie</h5>
                            <h6>Oferim următoarele servicii:</h6>
                            <ul>
                                <li>Extracţia obişnuită</li>
                                <li>Extracţia dintelui minte</li>
                                <li>Extracţia atipică dintelui</li>
                                <li>Extracţia dintelui retinat</li>
                                <li>Suturarea (o sutură)</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </section>

            <section className='dent-section--commited'>
                <img src={sdLogo} alt='logo face' className='sd-logo' />
                <h2>Bun venit în clinica noastra</h2>
                <p>
                Bine ați venit în clinica noastră stomatologică, unde facem dinții sănătoși 
să devină realitate.
Personalul nostru medical experimentat și echipamentele moderne vă asigură tratament de înaltă calitate și confort pe tot parcursul îngrijirii stomatologice.

                </p>
            </section>
            
            <section className='dent-section--lady-doc'>
                <div className='dent-section--lady-doc--inner'>
                    <img src={ladyDoc} className='dent-section--lady-doc--lady' />

                    <div className='dent-section--lady-doc--content'>
                        <img src={sdLogo} alt='decorative wave' className='sd-logo' />
                        <h2>Avem o multime de servicii.</h2>
                        <h3>Descărca lista de prețuri a serviciilor noastre</h3>
                    </div>
                </div>
            </section>

            <section className='dent-section--footer'>
                <img src={footerPic} />
                <div className='dent-section--footer--content'>
                    <div className='working-hours'>
                        <h3>Program de lucru</h3>
                        <b><p>Luni - Duminica
                                9:00 - 20:00
                        </p></b>
                       
                        <b><p>TProgramare prealabilă 
                            Tel: 022 52 52 50</p></b>               
                    </div>

                    <div className='contact-info' id='contacts'>
                        <h3>Adresa</h3>
                        <p>mun. Chisinau, bd. Dacia 60/5, of. 90 <br/>Tel. 022 52 66 47<br/> Mob +373 78 52 66 </p>                 
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
