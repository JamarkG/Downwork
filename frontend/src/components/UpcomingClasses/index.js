import './UpcomingClasses.css'
import { useSelector, useDispatch } from 'react-redux';
import { getBoughtClasses } from '../../store/classes';
import { useEffect, useState } from "react";


function UpcomingClasses(){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBoughtClasses())
    }, [dispatch])

    const BoughtClassList = useSelector(state => state.classes.list);
    console.log('upcoming classes component', BoughtClassList);
    // const boughtClassListArray = [...BoughtClassList];
    // console.log(BoughtClassList)

    // const sessionUser = useSelector(state => state.session.user);

    return (
        <div className='UpcomingClassesDiv'>
            <div className='h3Div'>
                <h3 className='MyUpClasses'>My Upcoming Classes</h3>
            </div>
            {BoughtClassList?.map((oneClass, index) => (
                <div className='UpcomingClass' key={index}>
                    <p className='Label'>{`${oneClass.title}`}</p>
                    <p className='Info'>{`$${oneClass.price} - ${oneClass.requiredTime} minutes - ${oneClass.availableTimes}`}</p>
                    <p className='Info'>{`${oneClass.body}`}</p>
                </div>
            ))}
        </div>
    )
}
 export default UpcomingClasses;
