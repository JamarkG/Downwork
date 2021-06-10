// import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './FindButton.css'

function FindButton(){
    const history = useHistory();

    const userId = useSelector((state) => state?.session?.user?.id);

    const handleClick = (e) => {
        if (!userId){
            history.push('/login')
            return
        }
        if (e.target.name === 'createclass'){
            history.push('/classes/createclass')
        } else {
            history.push('/classes')
        }
    }

    return (
        <div className={'FindButtonTopDiv'}>
            <div className={'FindButtonMediumDiv'}>
                <p className={'FindButtonTitleText'}>View All Classes or Create a New Class</p>
            </div>
            <div className={'FindButtonSmallDiv'}>
                <button onClick={handleClick} name='viewclasses' className='FindButton' id='FindButton1'>
                    View Classes
                </button>
                <button onClick={handleClick} name='createclass' className='FindButton' id='FindButton2'>
                    Post a Class
                </button>
            </div>
        </div>
    )
}

export default FindButton;
