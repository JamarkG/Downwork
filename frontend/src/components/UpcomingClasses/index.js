import './UpcomingClasses.css'
import { useSelector, useDispatch } from 'react-redux';
import { getBoughtClasses } from '../../store/classes';
import { useEffect, useState } from "react";
import BoughtClassReviews from '../BoughtClassReviews';

function UpcomingClasses(){
    const dispatch = useDispatch();
    // const [body, setBody] = useState('');

    useEffect(() => {
        dispatch(getBoughtClasses())
    }, [])

    // const sessionUser = useSelector(state => state.session.user);
    // const reviewerId = sessionUser.id
    // const title = `Review by ${sessionUser.fullName}`
    const Booot = useSelector(state => state);
    const BoughtClassList = useSelector(state => state.classes.list);
    console.log('upcoming CLASSES component', BoughtClassList);
    console.log('upcoming STATE component', Booot);


    return (
        <div className='UpcomingClassesDiv'>
            <div className='h3Div'>
                <h3 className='MyUpClasses'>My Bought Classes</h3>
            </div>
            {BoughtClassList?.map((oneClass, index) => (
                <div key={`${index}.2`}>
                    <div className='UpcomingClass' key={`${index}.3`}>
                        <p className='Label'>{`${oneClass.title}`}</p>
                        <p className='Info'>{`$${oneClass.price} - ${oneClass.requiredTime} minutes - ${oneClass.availableTimes}`}</p>
                        <p className='Info'>{`${oneClass.body}`}</p>
                    </div>
                    <BoughtClassReviews key={`${index}.1`} BoughtClassList={oneClass} />
                </div>
            ))}
        </div>
    )
}
 export default UpcomingClasses;
