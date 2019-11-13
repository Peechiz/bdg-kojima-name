import React, { useState } from 'react'

const DieRoller = ({ die, tableText, diceBag, prompt, subPrompt }) => {
  const [rollOutcome, setRollOutcome] = useState(null);
  const [rollResult, setRollResult] = useState();
  const [showTable, setShowTable] = useState(false)
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
      { rollOutcome === null && 
        <button
          className="m-3 max-w-xs"
          onClick={ () => {
            const [result, outcome] = diceBag.outcome()
            setRollOutcome(outcome);
            setRollResult(result);
          }}>
            Roll a {die}
        </button>
      }
      {
        rollOutcome !== null &&
        <div className="mt-3">
          <p className="font-bold text-lg">You rolled a { rollResult }</p>
          <p>
            <span className="font-bold">Result</span>
            : { rollOutcome }
          </p>
        </div>
      }
    </>
  )
}

export default DieRoller;
