import './UserProfile.css'
import UpcomingClasses from '../UpcomingClasses'
import { useSelector } from 'react-redux';


function UserProfile(){
    const sessionUser = useSelector(state => state.session.user);

    if(!sessionUser){
        return null
    }
    return (
        <div className='UserProfileDiv'>
            <div className='UserProfile'>
                <p className='ProfileInfo'>{`${sessionUser.fullName}'s Profile`}</p>
                {/* <p className='ProfileInfo'>{sessionUser.emailAddress}</p> */}
                {/* <p>{sessionUser.Biography}</p> */}
            </div>
            <UpcomingClasses />
        </div>
    )
}
 export default UserProfile;
