import './UpcomingClasses.css'
import { useSelector, useDispatch } from 'react-redux';
import { getBoughtClasses } from '../../store/classes';
import { useEffect, useState } from "react";
import { getReviews } from '../../store/reviews';
import { createOneReview } from '../../store/reviews';
import Collapsible from 'react-collapsible';
// import { csrfFetch } from '../../store/csrf';

function UpcomingClasses(){
    const dispatch = useDispatch();
    const [body, setBody] = useState('');

    useEffect(() => {
        dispatch(getBoughtClasses())
        dispatch(getReviews())
    }, []);

    const sessionUser = useSelector(state => state.session.user);
    const BoughtClassList = useSelector(state => state.classes.list);
    console.log("Bought Class List Right Here:", BoughtClassList)
    const allReviews = useSelector(state => state.reviews.list)

    const reviewerId = sessionUser.id
    const title = `Review by ${sessionUser.fullName}`


    const changeReview = (e) => setBody(e.target.value)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const classId = e.target.oneClassClassId.value
        const reviewedId = e.target.oneClassExpertId.value
        const reviewFull = {
            body,
            reviewedId,
            reviewerId,
            classId,
            title
        };

        dispatch(createOneReview({reviewFull}));
        setBody('');
    };


    return (
        <Collapsible trigger="See My Bought Classes" triggerWhenOpen="Hide My Bought Classes" className='UpcomingClassesDiv' openedClassName='UpcomingClassesDiv'>
            {BoughtClassList.map((oneClass, index) => (
                <div className='UpcomingClass' key={`${index}.3`}>
                    <p className='Label'>{`${oneClass.title}`}</p>
                    <p className='Info'>{`$${oneClass.price} - ${oneClass.requiredTime} minutes - ${oneClass.availableTimes}`}</p>
                    <p className='Info'>{`${oneClass.body}`}</p>
                    <div className='ReviewsTopDiv'>
                        <Collapsible trigger="Expand Class Reviews" triggerWhenOpen="Hide Class Reviews" openedClassName="ReviewUnList" triggerClassName={'ReviewUnList'}>
                            <div>
                            {allReviews?.map((oneReview, index) => (
                                <ul className={`ReviewDiv`}>
                                    {oneClass.classId === oneReview.classId && <li key={`${index}.4`}>
                                        <p className={`ReviewTitleText`}>{`${oneReview.title}`}</p>
                                        <p className={`ReviewBody`}>{`${oneReview.body}`}</p>
                                    </li>}
                                </ul>
                            ))}
                            </div>
                            <div className='ReviewFormDiv'>
                                <form key={`${oneClass.id}.5`} className={'CreateReviewForm'} onSubmit={handleSubmit}>
                                    <textarea
                                        value={body}
                                        onChange={changeReview}
                                        min="5"
                                        max="450"
                                        placeholder="Write a review"
                                        />
                                    <input
                                        value={oneClass.id}
                                        name='oneClassClassId'
                                        type="hidden"
                                        />
                                    <input
                                        value={BoughtClassList.expertId}
                                        name='oneClassExpertId'
                                        type="hidden"
                                        />
                                    <button type="submit">Submit Review</button>
                                </form>
                            </div>
                        </Collapsible>
                    </div>
                </div>
            ))}
        </Collapsible>
    )
}
 export default UpcomingClasses;
