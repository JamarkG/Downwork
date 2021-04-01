import FindButton from "../FindButton";
import TrustedBy from '../TrustedBy'
import Images from '../Images'
import HomeDiv2 from '../HomeDiv2'
import './Body.css'

function Body(){


    return (
        <>
            <div className='TopHomeDiv'>
                <div>
                    <p id='MainTitle'>Join the world's work marketplace</p>
                    <p id='SecondaryTitle'>Find great talent. Build your business. Take your career to the next level.</p>
                    <FindButton />
                    <TrustedBy />
                </div>
                <Images />
            </div>
                <div>
                    <HomeDiv2 />
                </div>
        </>
    )
}

export default Body;
