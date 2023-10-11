// Styles
import '../styles/BeautySection.css';

// Images
import beautyLogo from '../assets/BeautySection/logo1.png';
import lady from '../assets/BeautySection/lady1.png';
import brush from '../assets/BeautySection/transitionBrush1.png';
import cardPic1 from '../assets/BeautySection/card-pic1.png';
import cardPic2 from '../assets/BeautySection/card-pic2.png';
import cardPic3 from '../assets/BeautySection/card-pic3.png';
import wave from '../assets/BeautySection/wave1.png';
import beautyLogoFace from '../assets/BeautySection/beauty-logo-face.png';
import bgVideo from '../assets/BeautySection/bgVideo.svg';
import video from '../assets/BeautySection/video1.mp4';

function BeautySection() {
    return (
        <>
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
                            <h4>We love seeing happy smiles.</h4>
                            <h2>Let's make your dental health <br /> a priority!</h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className='beauty-section--services' id='services'>
                <img src={brush} className='transition-brush' />

                <h2>Services</h2>

                <div className='beauty--cards'>
                    
                    <div className='beauty--card-element'>
                        <div className='beauty-circle-placeholder' />
                        <img src={cardPic1} className='beauty-card-img' />
                        <div className='beauty-services-card'>
                            <h5>Массаж</h5>
                            <h6>Gynecologist</h6>
                            <p>With over a decade of experience, Dr. Hadid is the resident expert on general gynecology and women's health.</p>
                        </div>
                    </div>

                    <div className='beauty--card-element'>
                        <div className='beauty-circle-placeholder' />
                        <img src={cardPic2} className='beauty-card-img' />
                        <div className='beauty-services-card'>
                            <h5>Массаж</h5>
                            <h6>Gynecologist</h6>
                            <p>With over a decade of experience, Dr. Hadid is the resident expert on general gynecology and women's health.</p>
                        </div>
                    </div>

                    <div className='beauty--card-element'>
                        <div className='beauty-circle-placeholder' />
                        <img src={cardPic3} className='beauty-card-img' />
                        <div className='beauty-services-card'>
                            <h5>Массаж</h5>
                            <h6>Gynecologist</h6>
                            <p>With over a decade of experience, Dr. Hadid is the resident expert on general gynecology and women's health.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='beauty-section--commited'>
                <img src={beautyLogoFace} alt='logo face' />
                <h2>Commited to You</h2>
                <p>
                    East Forge Medical is the region's most trusted provider of women's healthcare. We have a highly trained team of medical experts, advanced facilities, and unwavering commitment to the welfare of our patients.
                </p>
            </section>

            <section className='beauty-section--footer'>
                <video src={video} autoPlay muted loop id='myVideo' />
                {/* <img src={bgVideo} id='myVideo' /> */}
                {/* <object data={bgVideo} /> */}
                {/* <embed src={bgVideo} /> */}

                <div className='beauty-section--footer--content'>
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


export default BeautySection;