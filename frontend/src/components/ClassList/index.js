import { getClasses } from '../../store/classes';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { createBoughtClass } from '../../store/classes';

import './ClassList.css'


function ClassList(){
    // const [chosenClass, setChosenClass] = useState({});
    const dispatch = useDispatch();
    const history = useHistory();

    // const userId = useSelector((state) => {
    //         return state.session.user.id;
    // });

    useEffect(() => {
    dispatch(getClasses())
    }, [dispatch])

    function handleClick (oneClass){
        // e.preventDefault();
        // const thisClass = e.target.value
        // setChosenClass(oneClass);
        // console.log('oneClass on 29 is: ', oneClass);
        // console.log(userId);

        const payload = {
            oneClass
        };

        let CreatedBoughtClass = dispatch(createBoughtClass(payload));
        // console.log('YO YOU THIS IS THE CBC', CreatedBoughtClass)
        if (CreatedBoughtClass) {
            history.push(`/`);
        };
    }

    // function handleChange(){}

    const allClasses = useSelector(state => Object.values(state.classes))
    // console.log(allClasses[0]);

    return (
        <>
            <div className='TitleContainer'>
                <h1 className='Title'>Classes</h1>
            </div>
            <div className='ClassListContainer'>
                {allClasses[0]?.map((oneClass, index) => (
                <div className='ClassContainer' id={oneClass.id} key={index}>
                    <p className='Label'>{oneClass.title}</p>
                    <p className='Info'>${oneClass.price} - {oneClass.requiredTime} minutes - {oneClass.availableTimes}</p>
                    <p className='Info'>{oneClass.body}</p>
                    {/* <input hidden='true' onChange={handleChange} value={oneClass.userId}></input>
                    <input hidden='true' onChange={handleChange} value={oneClass.classId}></input> */}
                    <button className='BuyButton'
                    onClick={(e)=>{handleClick(oneClass)}}>Buy</button>
                </div>
                ))}
            </div>
        </>
    )
}

export default ClassList;
