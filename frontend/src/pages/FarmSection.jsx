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
                <div className='farm-section--header-inner'>
                    <img src={headerMan} className='header-man' style={{marginLeft: `${sideMargins}%`}} />
                    <div className='farm-section--header--logo'>
                        <h2 className='farm-text'>Farm</h2>
                        <img src={pharmLogo} className='dent-logo' />
                        <div className='farm-postfix'>
                            <p className='farm-ru'>Сохрани то, что тебе дорого</p>
                            <p className='farm-ro'>Păstrează ce ți-e mai scump</p>
                        </div>
                    </div>
                    <img src={headerPills} className='header-pills' style={{marginRight: `${sideMargins}%`}} />
                </div>
                
            </section>

            <section className='farm-section--intro'>
                <div className='farm-section--intro--inner'>
                    <div className='farm-section--intro--content'>
                        <div className='farm-section--intro--logo'>
                            <h3>Home</h3>
                            <img src={wave} alt='decorative wave' />
                        </div>
                        
                        <div className='farm-section--intro--text'>
                            <h4>We love seeing happy smiles.</h4>
                            <h2>Let's make your dental health <br /> a priority!</h2>
                        </div>
                    </div>

                    <div className='farm-section--intro--lady'>
                        <img src={introGirl} />
                    </div>
                </div>
            </section>

            <section className='farm-section--services' id='services'>

                <h2>Meet our Doctors</h2>

                <div className='farm--cards'>
                    
                    <div className='farm--card-element'>
                        <div className='farm-circle-placeholder' />
                        <img src={doctor3} className='farm-card-img' />
                        <div className='farm-services-card'>
                            <h5>Dr. Samira Hadid, M.D.</h5>
                            <h6>Gynecologist</h6>
                            <p>With over a decade of experience, Dr. Hadid is the resident expert on general gynecology and women's health.</p>
                        </div>
                    </div>

                    <div className='farm--card-element'>
                        <div className='farm-circle-placeholder' />
                        <img src={doctor2} className='farm-card-img' />
                        <div className='farm-services-card'>
                            <h5>Dr. Aryan Patel, M.D.</h5>
                            <h6>Gynecologist & Obstetrician</h6>
                            <p>As the senior doctor in East Forge, Dr. Patel specializes in gynecologic surgery and obstetric care.</p>
                        </div>
                    </div>

                    <div className='farm--card-element'>
                        <div className='farm-circle-placeholder' />
                        <img src={doctor1} className='farm-card-img' />
                        <div className='farm-services-card'>
                            <h5>Dr. Yuqin Feng, M.D.</h5>
                            <h6>Gynecologist & Obstetrician</h6>
                            <p>Dr. Feng has over 15 years of experience as a fertility expert and obstetrician.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='farm-section--commited'>
                <img src={logoPill} alt='logo face' />
                <h2>Commited to You</h2>
                <p>
                    East Forge Medical is the region's most trusted provider of women's healthcare. We have a highly trained team of medical experts, advanced facilities, and unwavering commitment to the welfare of our patients.
                </p>
            </section>

            <section className='farm-section--footer'>
                <video src={video} autoPlay muted loop className='farm-bgVideo' />
                {/* <img src={bgVideo} id='myVideo' /> */}
                {/* <object data={bgVideo} /> */}
                {/* <embed src={bgVideo} /> */}

                <div className='farm-section--footer--content'>
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
