import { getClasses } from '../../store/classes';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";



function ClassList(){
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(getClasses())
    }, [dispatch])
    // const allClasses = (function () {
    //     return dispatch(getClasses())
    //   })();
    // console.log(allClasses);
    const allClasses = useSelector(state => Object.values(state.classes))

    return (
        <div>
            {allClasses?.map((oneClass, index) => (
            <div key={index}>
                <p>{oneClass.title}</p>
                <p>{oneClass.body}</p>
                <p>{oneClass.requiredTime}</p>
                <p>{oneClass.price}</p>
                <p>{oneClass.availableTimes}</p>
            </div>
            ))}
        </div>
    )
}

export default ClassList;
