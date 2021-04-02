import { getClasses } from '../../store/classes';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import './ClassList.css'


function ClassList(){
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(getClasses())
    }, [dispatch])

    const allClasses = useSelector(state => Object.values(state.classes))

    return (
        <>
            <div className='TitleContainer'>
                <h1 className='Title'>Classes</h1>
            </div>
            <div className='ClassListContainer'>
                {allClasses?.map((oneClass, index) => (
                <div className='ClassContainer' key={index}>
                    <p className='Label'>{oneClass.title}</p>
                    <p className='Info'>${oneClass.price} - {oneClass.requiredTime} minutes - {oneClass.availableTimes}</p>
                    <p className='Info'>{oneClass.body}</p>
                </div>
                ))}
            </div>
        </>
    )
}

export default ClassList;
