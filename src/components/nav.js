import React, { useContext } from 'react'
import { stepData } from '../pages/step'
import { CheckBoxOutlined, CheckBoxOutlineBlank } from '@material-ui/icons'
import { Link, useParams } from 'react-router-dom';
import { Store } from '../state/store'

const Nav = () => {
  const { step: currentStep } = useParams();
  const { state } = useContext(Store);


  return (
    <ul className="text-gray-300">
      <li className="p-3 flex">
        <div className="flex items-center justify-center pr-5">
          <CheckBoxOutlined className="text-green-500" fontSize="large" />
        </div>
        <div className="w-2/3">
          <h3>Section 1</h3>
          <p>Determining how many names you have</p>
        </div>
      </li>
      {
        stepData.map((step, i) => {
          const { section, text } = step;
          const sectionState = state.sections.find(s => s.order === section);

          return (  
            <Link
              key={i}
              to={`/worksheet/${section}`}>
              <li className={`p-3 flex ${section === parseInt(currentStep) ? 'bg-purple-500' : ''}`}>
                <div className="flex items-center justify-center pr-5">
                  {
                    sectionState.done ? 
                      <CheckBoxOutlined className="text-green-500" fontSize="large" /> :
                      <CheckBoxOutlineBlank className="text-grey-300" fontSize="large" />
                  }
                </div>
                <div className="w-2/3">
                  <h3>Section {section}</h3>
                  <p>{text}</p>
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