import React, { useContext } from 'react'
import { stepData } from '../pages/step'
import { CheckBoxOutlined, CheckBoxOutlineBlank, HelpOutline } from '@material-ui/icons'
import { Link, useParams, useLocation } from 'react-router-dom';
import { Store } from '../state/store'

const Nav = () => {
  const { step: currentStep } = useParams();
  const { state } = useContext(Store);
  const { search } = useLocation();
  const queryNumber = search.slice(1).split('=')[1];
  const plural = state.numberOfNames > 1;
  return (
    <ul className="text-gray-300">
      <li className="p-3 flex">
        <div className="flex items-center justify-center pr-5">
          <CheckBoxOutlined className="text-green-500" fontSize="large" />
        </div>
        <div className="w-2/3">
          <h3 className="line-through text-gray-500">Section 1</h3>
            {
              parseInt(queryNumber) === state.numberOfNames ?
              <p className="text-green-500 italic">You have {state.numberOfNames} name{plural && 's'}</p> :
              <p className="text-green-500 italic">No, you still have {state.numberOfNames} name{plural && 's'}</p>
            }
        </div>
      </li>
      {
        stepData.map((step, i) => {
          const { section, text } = step;
          const sectionState = state.sections.find(s => s.order === section);
          const isCurrentStep = section === parseInt(currentStep);

          return (  
            <Link
              key={i}
              to={`/worksheet/${section}`}>
              <li className={`p-3 flex ${isCurrentStep ? 'bg-purple-500' : ''}`}>
                <div className="flex items-center justify-center pr-5">
                  {
                    sectionState.done ? 
                      <CheckBoxOutlined className="text-green-500" fontSize="large" /> :
                      isCurrentStep ?
                        <HelpOutline className="text-yellow-500" fontSize="large" /> :
                        <CheckBoxOutlineBlank className="text-grey-300" fontSize="large" />
                  }
                </div>
                <div className="w-2/3">
                  <h3 className={`${isCurrentStep ? 'font-bold' : ''}`}>Section {section}</h3>
                  <p className={`${isCurrentStep ? 'font-bold' : ''}`}>{text}</p>
                </div>
              </li>
            </Link>
          )
        })
      }
    </ul>
  )
}

export default Nav;