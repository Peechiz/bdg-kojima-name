import React, { createContext } from 'react'
import { data } from '../components/steps/data'

export const Store = createContext();

const initialState = {
  sections: Object.keys(data)
    .map(key => data[key])
    .map(section => ({
      order: section.step,
      done: false,
      answers: section.data.map(answer => ({
        type: answer.type,
        roll: null,
        answer: ''
      }))
    }))
}

/*
  {
    sections: [
      {
        order: 2,
        done: false,
        answers: [
          {
            type: 'short',
            roll: null,
            answer: 'some text'
          },
          {
            type: 'die',
            roll: 6,
            answer: 'some other text'
          }
        ]
      }
    ]
    
*/

function reducer(state, action) {
  switch (action.type) {
    case 'ANSWER_QUESTION':
      return {
        ...state,
        sections: state.sections.map(section => {
          if (section.order === action.section) {
            return {
              ...section,
              answers: section.answers.map((answer, index) => {
              if (index === action.index) {
                return action.answer
              }
              return answer
            })}
          }
          return section
        })
      }
    case 'SECTION_DONE':
      return {
        ...state,
        sections: state.sections.map(section => {
          if (section.order === action.section) {
            section.done = true;
          }
          return section;
        })
      }
    case 'SIX_FUCKING_NAMES':
      return {
        ...state,
        sections: state.sections.map(section => {
          section.available = true;
          return section;
        })
      }
    default:
      break;
  }
}

export const StoreProvider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <Store.Provider value={value}>
      { console.log('state', state)}
      {props.children}
    </Store.Provider>
  );
}

/**
 * 
 * @param {*} actionParams
 * answer: answerObj
 * section: number
 * state
 * dispatch 
 */
export const answerQuestionAction = ({ answer, section, dispatch, index }) => {
  let payload = {
    type: 'ANSWER_QUESTION',
    section,
    answer,
    index
  }
  return dispatch(payload);
}

// export const toggleFavAction = (episode, state, dispatch) => {
//   const episodeInFavourites = state.favourites.includes(episode);
//   let dispatchObj = {
//     type: 'ADD_FAV',
//     payload: episode
//   };
//   if (episodeInFavourites)
//     dispatchObj = {
//       type: 'REMOVE_FAV',
//       payload: state.favourites.filter(fav => fav.id !== episode.id)
//     };
//   return dispatch(dispatchObj);
// };
