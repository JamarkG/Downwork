import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import './FindButton.css'

function FindButton(){
    const history = useHistory();

    const handleClick = (e) => {
        if (e.target.name === 'createclass'){
            history.push('/classes/createclass')
        } else {
            history.push('/classes')
        }
    }

    return (
        <div>
            <button onClick={handleClick} name='viewclasses' className='FindButton' id='FindButton1'>
                View Classes
            </button>
            <button onClick={handleClick} name='createclass' className='FindButton' id='FindButton2'>
                Post a Class
            </button>
        </div>
    )
}

export default FindButton;
