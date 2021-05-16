import { csrfFetch } from './csrf';

const LOAD = 'review/LOAD';
const ADD_ONE = 'review/ADD_ONE';
// const BOUGHT_CLASS = 'class/BOUGHT_CLASS';

const load = list => ({
  type: LOAD,
  list
});

const addoneReview = oneReview => ({
  type: ADD_ONE,
  oneReview,
});

export const getReviews = () => async dispatch => {
  // console.log(classId)
  const response = await csrfFetch(`/api/reviews/`);

  if (response.ok) {
    const {reviewList} = await response.json();
    // console.log('RESPONSE ON 23 OF STORE=-=-', reviewList)
    // console.log(reviewList1)
    dispatch(load(reviewList));
    return reviewList;
  }
};

export const createOneReview = ({reviewFull}) => async dispatch => {
  // console.log('THIS IS THE RESPONSE ON 31 OF STORE CREATE1REVIEW', reviewFull)

  const response = await csrfFetch('/api/reviews/', {
    method: 'POST',
    headers: {"Content-Type": 'application/json'},
    body: JSON.stringify(reviewFull)
  });

  if (response.ok) {
    const createdClass = await response.json();
    // console.log(`CREATED REVIEW HERE:,`, createdClass);
    // dispatch(addoneReview(createdClass));
    return dispatch(addoneReview(createdClass));
  }
}


const initialState = {
  list: [],
  types: []
};


const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
        console.log('action list on 157!!', action.list)

      return {
        ...state,
        list: action.list,
      };
    }
    case ADD_ONE: {
      if (!state[action.oneReview.id]) {
        const newState = {
          ...state,
          [action.oneReview.id]: action.oneReview
        };
        const reviewList1 = newState.list.map(id => newState[id]);
        reviewList1.push(action.oneReview);
        newState.list = reviewList1;
        return newState;
      }
      return {
        ...state,
        [action.oneReview.id]: {
          ...state[action.oneReview.id],
          ...action.oneReview,
        }
      };
    }
    default:
      return state;
  }
}

export default reviewsReducer;
