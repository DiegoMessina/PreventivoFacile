import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import preventivoIcon from '../assets/preventivoIcon.svg';
import '../styles/LandingPage.css'
function LandingPage() {
    const navigate = useNavigate();
    return (
        <div className="loginPage">
            <div className="svg">
                <img id="prev-svg" src={preventivoIcon} alt="Preventivo Icon"/>
            </div>
            <div className="landingText">
                <h1>Inizia subito a creare i tuoi <span> Preventivi</span>!</h1>
                <p>Crea in maniera facile e veloce un preventivo</p>
                <div className="buttonsLandingDiv">
                    <Button className="BtnLanding" onClick={()=>navigate('/login')} variant="outline-warning" id="loginButton">Login</Button>
                    <Button className="BtnLanding" onClick={()=>navigate('/register')} variant= "outline-warning" id="registerButton">Registrati</Button>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;