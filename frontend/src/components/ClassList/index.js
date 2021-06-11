import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom';
import { createBoughtClass } from '../../store/classes';
import { getClasses } from '../../store/classes';
import './ClassList.css'


function ClassList(){
    const dispatch = useDispatch();
    const history = useHistory();
    const {searchQ} = useParams();

    const userId = useSelector((state) => state.session.user.id);

    useEffect(() => {
        dispatch(getClasses())
    }, [dispatch])

    function handleClick (oneClass){

        let CreatedBoughtClass = dispatch(createBoughtClass(oneClass, userId));
        if (CreatedBoughtClass) {
            history.push(`/`);
        };
    }

    let allClasses = useSelector(state => state.classes.list)

    let searchedClasses
    if(searchQ){
        searchedClasses = allClasses.filter(filtClass => {
            let searchTerm = searchQ.toLowerCase()
            return filtClass.title.toLowerCase().includes(searchTerm)
        })
    }


    return (
    <>
        {searchQ && <>
            <div className='TitleContainer'>
                <h1 className='Title'>Classes</h1>
            </div>
            <div className='ClassListContainer'>
                {searchedClasses && searchedClasses.map((oneClass, index) => (
                <div className='ClassContainer' id={oneClass.id} key={index}>
                    <p className='Label'>{oneClass.title}</p>
                    <p className='Info'>${oneClass.price} - {oneClass.requiredTime} minutes - {oneClass.availableTimes}</p>
                    <p className='Info'>{oneClass.body}</p>
                    <button className='BuyButton'
                    onClick={(e)=>{handleClick(oneClass)}}>Buy</button>
                </div>
                ))}
            </div>
        </>}
        {!searchQ && <>
            <div className='TitleContainer'>
                <h1 className='Title'>Classes</h1>
            </div>
            <div className='ClassListContainer'>
                {allClasses && allClasses.map((oneClass, index) => (
                <div className='ClassContainer' id={oneClass.id} key={index}>
                    <p className='Label'>{oneClass.title}</p>
                    <p className='Info'>${oneClass.price}</p>
                    <p className='Info'>{oneClass.requiredTime} minutes</p>
                    <p className='Info'>Available: {oneClass.availableTimes}</p>
                    <p className='Info'>{oneClass.body}</p>
                    {/* <input hidden='true' onChange={handleChange} value={oneClass.userId}></input>
                    <input hidden='true' onChange={handleChange} value={oneClass.classId}></input> */}
                    <button className='BuyButton'
                    onClick={(e)=>{handleClick(oneClass)}}>Buy</button>
                </div>
                ))}
            </div>
        </>}
    </>
    )

}

export default ClassList;
