// import { LOAD_ITEMS, REMOVE_ITEM, ADD_ITEM } from './items';
import { csrfFetch } from './csrf';

const LOAD = 'class/LOAD';
// const LOAD_TYPES = 'pokemon/LOAD_TYPES';
const ADD_ONE = 'class/ADD_ONE';

const load = list => ({
  type: LOAD,
  list,
});

// const loadTypes = types => ({
//   type: LOAD_TYPES,
//   types,
// });

const addOneClass = oneClass => ({
  type: ADD_ONE,
  oneClass,
});

export const getClasses = () => async dispatch => {
  const response = await csrfFetch(`/api/classes`);
//   console.log(response)

  if (response.ok) {
    const {classList} = await response.json();
    console.log(classList)
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
    console.log(`create one class thunk ${createdClass}`);
    dispatch(addOneClass(createdClass));
    return createdClass;
  }
}

// export const editOnePokemon = (id, pokemon) => async dispatch => {
//   const response = await fetch(`/api/pokemon/${id}`, {
//     method: 'PUT',
//     headers: { "Content-Type": 'application/json' },
//     body: JSON.stringify(pokemon)
//   });

//   if (response.ok) {
//     const editedPokemon = await response.json();
//     dispatch(addOnePokemon(editedPokemon));
//     return editedPokemon;
//   }
// }

// export const getPokemonTypes = () => async dispatch => {
//   const response = await fetch(`/api/pokemon/types`);

//   if (response.ok) {
//     const types = await response.json();
//     dispatch(loadTypes(types));
//   }
// };

const initialState = {
  list: [],
  types: []
};

const sortList = (list) => {
  return list.sort((classA, classB) => {
    return classA.userId - classB.userId;
  }).map((oneClass) => oneClass.userId);
};

const classesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
        // console.log(action)
      const allClasses = {};
      action.list.forEach(oneClass => {
        allClasses[oneClass.id] = oneClass;
      });
      return {
        ...allClasses,
        ...state,
        list: sortList(action.list),
      };
    }
    // case LOAD_TYPES: {
    //   return {
    //     ...state,
    //     types: action.types,
    //   };
    // }
    case ADD_ONE: {
      if (!state[action.oneClass.id]) {
        const newState = {
          ...state,
          [action.oneClass.id]: action.oneClass
        };
        const classList = newState.list.map(id => newState[id]);
        classList.push(action.oneClass);
        newState.list = sortList(classList);
        return newState;
      }
      return {
        ...state,
        [action.oneClass.id]: {
          ...state[action.oneClass.id],
          ...action.oneClass,
        }
      };
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
    //   console.log(action.oneClass);
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
