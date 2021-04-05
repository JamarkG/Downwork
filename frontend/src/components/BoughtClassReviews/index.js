import './BoughtClassReviews.css'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { getReviews } from '../../store/reviews';
import { createOneReview } from '../../store/reviews';


function BoughtClassReviews({ BoughtClassList }){
    const dispatch = useDispatch();
    const [body, setBody] = useState('');
    console.log('PROPS YOOOOO', BoughtClassList)

    const classId = BoughtClassList.classId
    const propsFull = BoughtClassList
    console.log('PROPS HERE', propsFull)
    console.log('THIS IS THE CLASSID', classId)

    useEffect(() => {
        dispatch(getReviews(classId))
    }, [])



    const sessionUser = useSelector(state => state.session.user);
    const reviewerId = sessionUser.id
    const title = `Review by ${sessionUser.fullName}`

    const changeReview = (e) => setBody(e.target.value)

    const reviewsList = useSelector(state => state.reviews.list);
    console.log('upcoming REVIEWS component', reviewsList);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const classId = e.target.oneClassClassId.value
        // console.log('THIS IS THE TARGET ONECLASSEXPERTID VALUE', e.target.oneClassExpertId.value)
        const reviewedId = e.target.oneClassExpertId.value
        console.log('989899899898989898989', classId, reviewedId)
        // const oneClass = e.target.oneClassObj.value;

        const reviewFull = {
          body,
          reviewedId,
          reviewerId,
          classId,
          title
        };

        let createdReview = await dispatch(createOneReview({reviewFull}));
        // if (createdClass) {
        //   history.push(`/classes`);
        // //   hideForm();
        // }

        setBody('');
    };

    return (
        <div className='ReviewsTopDiv'>
            <div className='h3Div'>
                <p className='ReviewsTitle'>Class Reviews</p>
            </div>
            <ul className={'ReviewUnList'}>
                {reviewsList.map((oneReview, index) => (
                <li key={`${index}.4`}>
                    <div className={`ReviewDiv`}>
                        <p className={`ReviewTitleText`}>{`${oneReview.title}`}</p>
                        <p className={`ReviewBody`}>{`${oneReview.body}`}</p>
                    </div>
                </li>
                ))}
                <div className='ReviewFormDiv'>
                    <form key={`${classId}.5`} className={'CreateReviewForm'} onSubmit={handleSubmit}>
                        <textarea
                            value={body}
                            onChange={changeReview}
                            min="5"
                            max="450"
                            placeholder="Write a review"
                        />
                        <input
                            value={classId}
                            name='oneClassClassId'
                            type="hidden"
                        />
                        {/* <input
                            value={reviewerId}
                            name='oneClassBody'
                            type="hidden"
                        /> */}
                        <input
                            value={propsFull.expertId}
                            name='oneClassExpertId'
                            type="hidden"
                        />
                        {/* <BoughtClassReviews props={oneClass.classId} /> */}
                        <button type="submit">Submit Review</button>
                    </form>
                </div>
            </ul>
        </div>
    )
}
 export default BoughtClassReviews;
