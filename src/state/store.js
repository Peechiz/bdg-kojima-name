import React, { createContext, useEffect } from 'react'
import { data } from '../components/steps/data'

export const Store = createContext();

const initialState = {
  numberOfNames: null,
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
    case 'SET_NUMBER_NAMES':
      return {
        ...state,
        numberOfNames: action.number
      }
    default:
      break;
  }
}

export const StoreProvider = (props) => {

  const localStore = JSON.parse(localStorage.getItem('kojimaStore'));

  const [state, dispatch] = React.useReducer(reducer, localStore || initialState);

  useEffect(()=> {
    localStorage.setItem('kojimaStore', JSON.stringify(state))
  }, [state])

  return (
    <Store.Provider value={{state, dispatch}}>
      {console.log('state', state)}
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