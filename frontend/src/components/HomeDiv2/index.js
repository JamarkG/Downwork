import './HomeDiv2.css'
import { useHistory } from 'react-router-dom';

function HomeDiv2(){

    const history = useHistory();

    const handleClick = () => {
        return history.push('/login')
    }

    return (
        <div className={'HoldsGuyPhotoDiv'}>
            <div className='HomeDiv2'>
                <div>
                    <p className={'ForClasses'}>For classes</p>
                    <p id='HomeDiv2Text'>Find talent your way</p>
                    <p id='HomeDivSmallText'>Work with the largest network of independent professionals and get things done—from quick turnarounds to big transformations.</p>
                </div>
                <div id="greenBlocks">
                    <div className={'greenBlock'} onClick={handleClick}>
                        <h3>Post a class and get customers</h3>
                        <p className={'IntroText'}>Teacher Marketplace ➡</p>
                    </div>
                    <div className={'greenBlock'} onClick={handleClick}>
                        <h3>Browse and buy your favorite classes</h3>
                        <p className={'IntroText'}>Class Catalog ➡</p>
                    </div>
                    <div className={'greenBlock'} onClick={handleClick}>
                        <h3>Let us help you find the right teacher</h3>
                        <p className={'IntroText'}>Talent Scout ➡</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeDiv2;
