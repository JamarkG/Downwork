import { csrfFetch } from './csrf';

const LOAD = 'class/LOAD';
const ADD_ONE = 'class/ADD_ONE';
const BOUGHT_CLASS = 'class/BOUGHT_CLASS';

const load = list => ({
  type: LOAD,
  list,
});

const addOneClass = oneClass => ({
  type: ADD_ONE,
  oneClass,
});

// const addBoughtClass = classId => ({
//   type: BOUGHT_CLASS,
//   classId,
// });

export const getBoughtClasses = () => async dispatch => {
  const response = await csrfFetch(`/api/classes/bought`, {
    method: 'GET',
    headers: {"Content-Type": 'application/json'}
  });

  if (response.ok) {
    const UsersBoughtClasses = await response.json();
    dispatch(load(UsersBoughtClasses));
    // return UsersBoughtClasses;
  }
};

export const createBoughtClass = (oneClass, userId) => async dispatch => {
  const expertId = oneClass.userId;
  const classId = oneClass.id

  const response = await csrfFetch(`/api/classes/bought`, {
    method: 'POST',
    headers: {"Content-Type": 'application/json'},
    body: JSON.stringify({ expertId, classId, userId })
  });

  if (response.ok) {
    const CreatedBoughtClass = await response.json();
    dispatch(addOneClass(CreatedBoughtClass));

    return CreatedBoughtClass;
  }
}

export const getClasses = () => async dispatch => {
  const response = await csrfFetch(`/api/classes`);

  if (response.ok) {
    const {classList} = await response.json();
    dispatch(load(classList));
    return classList;
  }
};

export const getSearchedClasses = (searchQ) => async dispatch => {
  // let searchedString = searchQuery.searchQ;

  const response = await csrfFetch(`/api/search/${searchQ}`);

  if (response.ok) {
    const classList = await response.json();
    dispatch(load(classList));
    return classList;
  }
};

export const fetchOneClass = (id) => async dispatch => {
  const response = await fetch(`/api/classes/${id}`)

  if (response.ok) {
    const classToAdd = await response.json();
    dispatch(addOneClass(classToAdd));
  }
}

export const createOneClass = (oneClass) => async dispatch => {
  const response = await csrfFetch('/api/classes/', {
    method: 'POST',
    headers: {"Content-Type": 'application/json'},
    body: JSON.stringify(oneClass)
  });

  if (response.ok) {
    const createdClass = await response.json();
    // dispatch(addOneClass(createdClass));
    return createdClass;
  }
}

const initialState = {
  list: [],
  types: []
};


const classesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {

      return {
        ...state,
        list: action.list,
      };
    }

    case BOUGHT_CLASS:{
      return {
      ...state,
      list: action.list,
    }}
    case ADD_ONE: {
        const newState = {
          ...state,
          list: state.list.concat({[action.oneClass.id]: action.oneClass})
        };

        return newState;
      // }
      // return {
      //   ...state,
      //   [action.oneClass.id]: {
      //     ...state[action.oneClass.id],
      //     ...action.oneClass,
      //   }
      // };
    }
    // case LOAD_CLASSES: {
    //   return {
    //     ...state,
    //     [action.classId]: {
    //       ...state[action.classId],
    //       classes: action.classes.map(oneClass => oneClass.id),
    //     }
    //   };
    // }
    // case REMOVE_CLASS: {
    //   return {
    //     ...state,
    //     [action.classId]: {
    //       ...state[action.classId],
    //       classes: state[action.classId].filter(
    //         (oneClass) => oneClass.id !== action.classId
    //       ),
    //     },
    //   };
    // }
    // case ADD_CLASS: {
    //   return {
    //     ...state,
    //     [action.oneClass.classId]: {
    //       ...state[action.oneClass.classId],
    //       classes: [...state[action.oneClass.classId], action.oneClass.id],
    //     },
    //   };
    // }
    default:
      return state;
  }
}

export default classesReducer;
