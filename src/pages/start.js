import React, { useState, useContext } from 'react';
import { Link   } from 'react-router-dom';
import { d6 } from '../util/dice'
import { Store } from '../state/store'

const Start = () => {
  const [die, setDie] = useState(null)
  const [yolo, setYolo] = useState(false)
  const { dispatch } = useContext(Store);

  const numberOfNames = (roll) => roll < 6 ? 1 : 6;

  return (
  <div className="bg-teal-500 h-screen w-screen p-6">
    <h4 className="text-center w-screen">Welcome to</h4>
    <h1 className="text-center w-screen font-sans">BDG's Kojima-Name Generator</h1>
    {
      die === null ?
      <div className="flex flex-col align-center">
        <p className="text-center">Roll a die to see how many names you have</p>
        <ul className="text-center">
          <li>1-5: You have 1 name</li>
          <li>6: You have 6 names</li>
        </ul>
        <button
          className="px-8 text-3xl my-3"
          onClick={ () => {
            setDie(d6())
            dispatch({
              type: "SET_NUMBER_NAMES",
              number: numberOfNames(die)
            })
          }}
        >Roll</button>
      </div>
      :
      <div className="flex flex-col align-center">
        <h1 className="text-center">You rolled a {yolo && "\""}{die}{yolo && "\""}, you have { numberOfNames(die) } Kojima-names.</h1>
        { die < 6 && 
          <button
            className="text-3xl my-3"
            onClick={() => {
              setDie(6);
              setYolo(true);
              dispatch({
                type: "SET_NUMBER_NAMES",
                number: numberOfNames(die)
              })
            }}
          >Fuck that, I totally have 6 names</button>
        }
        { yolo &&
          <p className="text-center">ok whatever</p>
        }
        <Link 
          className="flex justify-center text-3xl my-3"
          to={`/worksheet/2?names=${numberOfNames(die)}`}
        >
          <button>Let's do this</button>
        </Link>
      </div>
    }

  </div>
  )
}

export default Start;