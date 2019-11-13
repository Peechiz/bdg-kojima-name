import React from 'react'
import ListItem from '../util/list-item'
import DieRoller from './die-roller'

const Section = ({ json, next, dice }) => {
  return (
    <div style={{ minWidth: 400}} className="overflow-auto py-6">
      <h2>{ json.heading }</h2>
      <h4 className="italic">{ json.subheading }</h4>
      <form className="p-3">
        { json.data.map(q => (
          <ListItem
            key={q.order}
            order={q.order}>
            <div className="flex flex-col w-full">
              { !q.die && (
                q.long === true ?
                <>
                  <label htmlFor={q.order}>{q.prompt}</label>
                  <textarea id={q.order} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"/>
                </>
                :
                <>
                  <label htmlFor={q.order}>{q.prompt}</label>
                  <input id={q.order} type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:w-1/2 mt-2"/>
                </>
               )
              }
              {
                q.die &&
                <DieRoller
                  prompt={q.prompt}
                  subPrompt={q.subPrompt}
                  die={q.die}
                  tableText={q.table}
                  diceBag={dice[q.order]}/>
              }
            </div>
          </ListItem>
        )) }
      </form>
      { next }
    </div>
  )
}

export default Section;