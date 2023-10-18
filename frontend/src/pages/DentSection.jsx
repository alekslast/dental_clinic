// Styles
import '../styles/DentSection.css';

// Images
import dentLogo         from '../assets/DentSection/logo.png';
import wave             from '../assets/DentSection/wave1.png';
import toothIntro       from '../assets/DentSection/tooth-intro.png';
import doctor1          from '../assets/DentSection/doctor1.png';
import doctor2          from '../assets/DentSection/doctor2.png';
import doctor3          from '../assets/DentSection/doctor3.png';
import sdLogo           from '../assets/DentSection/dent-logo-sd.png';
import ladyDoc          from '../assets/DentSection/lady-doc1.png';
import footerPic        from '../assets/DentSection/footer-pic.png';




export default function DentSection() {
    return (
        <>
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
                            <h3>Home</h3>
                            <img src={wave} alt='decorative wave' />
                        </div>
                        
                        <div className='dent-section--intro--text'>
                            <h4>We love seeing happy smiles.</h4>
                            <h2>Let's make your dental health <br /> a priority!</h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className='dent-section--doctors' id='services'>
                <h2>Meet our Doctors</h2>

                <div className='dent--cards'>
                    
                    <div className='dent--card-element'>
                        <div className='dent-circle-placeholder' />
                        <img src={doctor1} className='dent-card-img' />
                        <div className='dent-services-card'>
                            <h5>Dr. Samira Hadid, M.D.</h5>
                            <h6>Gynecologist</h6>
                            <p>With over a decade of experience, Dr. Hadid is the resident expert on general gynecology and women's health.</p>
                        </div>
                    </div>

                    <div className='dent--card-element'>
                        <div className='dent-circle-placeholder' />
                        <img src={doctor2} className='dent-card-img' />
                        <div className='dent-services-card'>
                            <h5>Dr. Aryan Patel, M.D.</h5>
                            <h6>Gynecologist & Obstetrician</h6>
                            <p>As the senior doctor in East Forge, Dr. Patel specializes in gynecologic surgery and obstetric care.</p>
                        </div>
                    </div>

                    <div className='dent--card-element'>
                        <div className='dent-circle-placeholder' />
                        <img src={doctor3} className='dent-card-img' />
                        <div className='dent-services-card'>
                            <h5>Dr. Yuqin Feng, M.D.</h5>
                            <h6>Gynecologist & Obstetrician</h6>
                            <p>Dr. Feng has over 15 years of experience as a fertility expert and obstetrician.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='dent-section--commited'>
                <img src={sdLogo} alt='logo face' className='sd-logo' />
                <h2>Commited to You</h2>
                <p>
                    East Forge Medical is the region's most trusted provider of women's healthcare. We have a highly trained team of medical experts, advanced facilities, and unwavering commitment to the welfare of our patients.
                </p>
            </section>
            
            <section className='dent-section--lady-doc'>
                <div className='dent-section--lady-doc--inner'>
                    <img src={ladyDoc} className='dent-section--lady-doc--lady' />

                    <div className='dent-section--lady-doc--content'>
                        <img src={sdLogo} alt='decorative wave' className='sd-logo' />
                        <h2>East Forge <br /> Medical</h2>
                        <h4>Where women's health comes first</h4>
                    </div>
                </div>
            </section>

            <section className='dent-section--footer'>
                <img src={footerPic} />
                <div className='dent-section--footer--content'>
                    <div className='working-hours'>
                        <h3>Clinic hours</h3>
                        <b><p>Monday, Wednesday & Friday</p></b>
                        <p>9:00 am to 5:00 pm</p>

                        <b><p>Tuesday, Thursday & Saturday</p></b>
                        <p>8:00 am to 4:00 pm</p>

                        <b><p>Closed on Sundays</p></b>
                    </div>

                    <div className='contact-info' id='contacts'>
                        <h3>Our Clinic</h3>
                        <p>123 Anywhere St.</p>
                        <p>Any City, ST 12345</p>

                        <p>(123) 456-7890</p>
                        <p>hello@reallygreatsite.com</p>
                    </div>
                </div>
            </section>

        </>
    )
}
