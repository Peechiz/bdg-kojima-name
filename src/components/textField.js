import React, { useState, useCallback, useEffect } from 'react'
import { Store, answerQuestionAction } from '../state/store'
import debounce from 'lodash.debounce'

const TextField = ({ q, index, json }) => {
  const { state, dispatch } = React.useContext(Store);
  const sectionState = state.sections.find(section => section.order === json.step)
  const [inputVal, setInputVal] = useState(sectionState.answers[index].answer)

  useEffect(() => {
    if (sectionState.answers.every(q => q.answer !== '')) {
      dispatch({
        type: 'SECTION_DONE',
        section: json.step
      })
    }
  }, [...sectionState.answers.map(q => q.answer)])

  const answerTextQuestion = (val, input) => {
    answerQuestionAction({
      dispatch,
      index: input.index,
      section: json.step,
      answer: {
        type: input.type,
        role: null,
        answer: val
      }
    })
  }

  const answerActionDebounced = useCallback(debounce((val,input) => answerTextQuestion(val,input), 150), [])

  const onChange = (e, input) => {
    setInputVal(e.target.value)
    answerActionDebounced(e.target.value, input)
  }

  return (
    <>
      <label htmlFor={q.order}>{q.prompt}</label>
      {
        q.type === 'text' && (
          <input
            id={q.order}
            type="text"
            value={ inputVal }
            onChange={e => onChange(e, { index, type: 'text' })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:w-1/2 mt-2"
          />
        )
      }
      {
        q.type === 'long' && (
          <textarea
            value={ inputVal }
            onChange={e => onChange(e, { index, type: 'long' })}
            id={q.order}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
          />
        )
      }
      
    </>
  )
}

export default TextField