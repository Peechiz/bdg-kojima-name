import React, { useState, useEffect } from 'react'
import { answerQuestionAction } from '../state/store'
import { Store } from '../state/store'

const DieRoller = ({
  section,
  qID,
  die,
  tableText,
  diceBag,
  prompt,
  subPrompt
}) => {
  const { state, dispatch } = React.useContext(Store);

  const sectionState = state.sections.find(s => s.order === section)
  const { answer, roll} = sectionState.answers[qID]
  const [showTable, setShowTable] = useState(false)

  useEffect(() => {
    if (sectionState.answers.every(q => q.answer !== '')) {
      dispatch({
        type: 'SECTION_DONE',
        section: section
      })
    }
  }, [...sectionState.answers.map(q => q.answer)])

  return (
    <>
      <p>
        <span className="font-bold">{prompt}</span>: {subPrompt} <span 
        className="cursor-pointer text-purple-800"
        onClick={() => setShowTable(!showTable)}>
          {showTable ? 'Hide' : 'Show'}{' '}Table
        </span>
      </p>
      { showTable &&
        <table className="table-auto mt-1">
          <tbody>
            {tableText.map((row, ri) => (
              <tr key={ri}>
                {row.map((col, ci) => (
                  <td
                    key={ci}
                    className={`border px-4 py-2 ${ci === 0 ? 'w-1/6' : ''}`}>
                    {col}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      }
      { answer === '' && 
        <button
          className="m-3 max-w-xs"
          onClick={ () => {
            const [dieRoll, outcome] = diceBag.outcome()
            answerQuestionAction({
              section,
              dispatch,
              index: qID,
              answer: {
                type: 'die',
                roll: dieRoll,
                answer: outcome
              },
            })
          }}>
            Roll a {die}
        </button>
      }
      {
        answer !== '' &&
        <div className="mt-3">
          <p className="font-bold text-lg">You rolled a { roll }</p>
          <p>
            <span className="font-bold">Result</span>
            : { answer }
          </p>
        </div>
      }
    </>
  )
}

export default DieRoller;
