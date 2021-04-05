import './Footer.css'

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
                        <li className={'ListItem'}>About Us</li>
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
        </div>

    )
}

export default Footer;
