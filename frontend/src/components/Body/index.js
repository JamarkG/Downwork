import FindButton from "../FindButton";
import TrustedBy from '../TrustedBy'
import './Body.css'

function Body(){


    return (
        <div>
            <p id='MainTitle'>Join the world's work marketplace</p>
            <p id='SecondaryTitle'>Find great talent. Build your business. Take your career to the next level.</p>
            <FindButton />
            <TrustedBy />
        </div>
    )
}

export default Body;
