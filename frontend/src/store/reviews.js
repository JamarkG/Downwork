import { csrfFetch } from './csrf';

const LOAD = 'review/LOAD';
const ADD_ONE = 'review/ADD_ONE';

const load = list => ({
  type: LOAD,
  list
});

const addoneReview = oneReview => ({
  type: ADD_ONE,
  oneReview,
});

export const getReviews = () => async dispatch => {
  const response = await csrfFetch(`/api/reviews/`);

  if (response.ok) {
    const {reviewList} = await response.json();

    dispatch(load(reviewList));
    return reviewList;
  }
};

export const createOneReview = (reviewFull) => async dispatch => {

  const response = await csrfFetch('/api/reviews/', {
    method: 'POST',
    headers: {"Content-Type": 'application/json'},
    body: JSON.stringify({reviewFull})
  });

  if (response.ok) {
    const createdReview = await response.json();

    return dispatch(addoneReview(createdReview));
  }
}


const initialState = {
  list: [],
  types: []
};


const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      return {
        ...state,
        list: action.list,
      };
    }
    case ADD_ONE: {
        state.list.push(action.oneReview)
        return state;
    }
    default:
      return state;
  }
}

export default reviewsReducer;
