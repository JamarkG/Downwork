import './Footer.css'
import linkedIn from '../../images/LinkedInLogo.png'
import github from '../../images/GithubLogo.png'

function Footer (){

    return (
        <div className='FooterDiv'>
            <div className={'ListContainer'}>
                <div className={'ListDiv'}>
                    <p className={'ListTitle'}>FOR CLIENTS</p>
                    <ul className={'UnList'}>
                        <li className={'ListItem'}>How to Hire</li>
                        <li className={'ListItem'}>Talent Marketplace</li>
                        <li className={'ListItem'}>Project Catalog</li>
                        <li className={'ListItem'}>Talent Scout</li>
                        <li className={'ListItem'}>Enterprise</li>
                        <li className={'ListItem'}>Payroll Services</li>
                        <li className={'ListItem'}>Direct Contracts</li>
                        <li className={'ListItem'}>Hire Worldwide</li>
                        <li className={'ListItem'}>Hire in the USA</li>
                    </ul>
                </div>
                <div className={'ListDiv'}>
                    <p className={'ListTitle'}>FOR TALENT</p>
                    <ul className={'UnList'}>
                        <li className={'ListItem'}>How to Find Work</li>
                        <li className={'ListItem'}>Direct Contracts</li>
                        <li className={'ListItem'}>Find Freelance Jobs Worldwide</li>
                        <li className={'ListItem'}>Find Freelance Jobs in the USA</li>
                    </ul>
                </div>
                <div className={'ListDiv'}>
                    <p className={'ListTitle'}>RESOURCES</p>
                    <ul className={'UnList'}>
                        <li className={'ListItem'}>Help and Support</li>
                        <li className={'ListItem'}>Success Stories</li>
                        <li className={'ListItem'}>Downwork Reviews</li>
                        <li className={'ListItem'}>Resources</li>
                        <li className={'ListItem'}>Blog</li>
                        <li className={'ListItem'}>Community</li>
                    </ul>
                </div>
                <div className={'ListDiv'}>
                    <p className={'ListTitle'}>COMPANY</p>
                    <ul className={'UnList'}>
                        <li className={'ListItem'}><a href="https://youtu.be/dQw4w9WgXcQ" id="aboutUs">About Us</a></li>
                        <li className={'ListItem'}>Leadership</li>
                        <li className={'ListItem'}>Investor Relations</li>
                        <li className={'ListItem'}>Careers</li>
                        <li className={'ListItem'}>Downwork Foundation</li>
                        <li className={'ListItem'}>Press</li>
                        <li className={'ListItem'}>Contact Us</li>
                        <li className={'ListItem'}>Trust, Safety, and Privacy</li>
                    </ul>
                </div>
            </div>
            <div className={'InnerFooterBottomDiv'}>
                <p className={'ListItem'}>Follow us on:  Facebook  Twitter  LinkedIn</p>
            </div>
            <div className={'IFBBottomDiv'}>
                <p className={'IFBItem'}>© 2015 - 2021 Downwork® Global Inc.</p>
                <p className={'IFBItem'}>Terms of Service</p>
                <p className={'IFBItem'}>Privacy Policy</p>
                <p className={'IFBItem'}>Accessibility</p>
            </div>
            <div>
                <span className={'SpanDiv'}>...</span>
            </div>
            <div id="devProfile">
                <h3 id='infoTitle'>
                    Meet the Developer
                </h3>
                <div id="myInfo">
                    {/* <div id='email' className='infoBox'>
                        MarkGregory19@Gmail.com
                    </div> */}
                    <div id='linkedIn' className='infoBox'>
                        <a href='https://www.linkedin.com/in/markgregory19' target="_blank" rel="noreferrer">
                            <img
                                alt="LinkedIn"
                                src={linkedIn}
                                width="70"
                                height="70"
                            />
                            </a>
                    </div>
                    <div id='github' className='infoBox'>
                        <a href='https://github.com/JamarkG' target="_blank" rel="noreferrer">
                            <img
                                alt="Github"
                                src={github}
                                width="90"
                                height="50"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer;
