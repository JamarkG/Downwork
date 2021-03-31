import { Link } from "react-router-dom";
import './FindButton.css'

function FindButton(){

    return (
        <div>
            <Link to="/session/classes">
                <button className='FindButton' id='FindButton1'>
                    View Classes
                </button>
            </Link>
            <Link to="/session/createclass">
                <button className='FindButton' id='FindButton2'>
                    Post a Class
                </button>
            </Link>
        </div>
    )
}

export default FindButton;
