import './footer.css'

import fb from '../../assets/fb.svg';
import ig from '../../assets/ig.svg';
import tw from '../../assets/tw.svg'
const Footer = () => {
    return(
        <div>
            <footer className="footer"> 
                <p>&copy; 2023 Website Name. All rights reserved.</p>
                <ul>
                    <li><a href="#">Terms of Use</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
                <div className="social-media">
                    <a href="#" target="_blank"><img src={fb} alt="" /><i className="fab fa-facebook-f"></i></a>
                    <a href="#" target="_blank"><img src={ig} alt="" /><i className="fab fa-twitter"></i></a>
                    <a href="#" target="_blank"><img src={tw} alt="" /><i className="fab fa-instagram"></i></a>
                </div>
            </footer>
        </div>
    )
}

export default Footer