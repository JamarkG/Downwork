import './UpcomingClasses.css'
import { useSelector, useDispatch } from 'react-redux';
import { getBoughtClasses } from '../../store/classes';
import { useEffect, useState } from "react";
import { getReviews } from '../../store/reviews';
import { createOneReview } from '../../store/reviews';
import Collapsible from 'react-collapsible';

function UpcomingClasses(){
    const dispatch = useDispatch();

    const [reviews, setReviews] = useState('');

    const sessionUser = useSelector(state => state.session.user);
    const reviewerId = sessionUser.id
    const title = `Review by ${sessionUser.fullName}`


    useEffect(() => {
        dispatch(getBoughtClasses())
        dispatch(getReviews())
    }, []);

    useEffect(() => {
        dispatch(getReviews())
    }, [reviews]);

    const BoughtClassList = useSelector(state => state.classes.list);
    const allReviews = useSelector(state => state.reviews.list)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const classId = parseInt(e.target.oneClassId.value);
        const reviewedId = parseInt(e.target.oneClassExpertId.value);
        const body = e.target.reviewBody.value

        const reviewFull = {
            body,
            reviewedId,
            reviewerId,
            classId,
            title
        };

        dispatch(createOneReview(reviewFull));

        setReviews(body)
        e.target.reviewBody.value = '';
    };


    return (
        <div className='UpcomingClassesDiv'>
            <p id='boughtTitle'>My Bought Classes</p>
            {BoughtClassList?.map((oneClass, index) => (
                <div className='UpcomingClass' key={`${index}.3`}>
                    <p className='Label'>{`${oneClass.title}`}</p>
                    <p className='Info'>{`$${oneClass.price} - ${oneClass.requiredTime} minutes - ${oneClass.availableTimes}`}</p>
                    <p className='Info'>{`${oneClass.body}`}</p>
                    <div className='ReviewsTopDiv' key={`${index}.5`}>
                        <Collapsible trigger="Expand Class Reviews" triggerWhenOpen="Hide Class Reviews" openedClassName="ReviewUnList" triggerClassName={'ReviewUnList'}>
                            <div  key={`${index}.4`}>
                            {allReviews?.map((oneReview, index) => (
                                <div className={`ReviewDiv`}  key={`${index}.41`}>
                                    {oneClass.classId === oneReview.classId && <div className="oneReview" key={`${index}.42`}>
                                        <p className={`ReviewTitleText`}>{`${oneReview.title}`}</p>
                                        <p className={`ReviewBody`}>{`${oneReview.body}`}</p>
                                    </div>}
                                </div>
                            ))}
                            </div>
                            <div className='ReviewFormDiv'>
                                <form key={`${oneClass.id}.5`} className={'CreateReviewForm'} onSubmit={handleSubmit}>
                                    <textarea
                                        // value={body}
                                        // onChange={changeReview}
                                        name="reviewBody"
                                        min="5"
                                        max="450"
                                        placeholder="Write a review"
                                        />
                                    <input
                                        value={oneClass.classId}
                                        name='oneClassId'
                                        type="hidden"
                                        />
                                    <input
                                        value={oneClass.expertId}
                                        name='oneClassExpertId'
                                        type="hidden"
                                        />
                                    <button type="submit" id="submitReview">Submit Review</button>
                                </form>
                            </div>
                        </Collapsible>
                    </div>
                </div>
            ))}
        </div>
    )
}
 export default UpcomingClasses;
