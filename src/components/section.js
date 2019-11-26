import React, { useContext } from 'react'
import ListItem from '../util/list-item'
import DieRoller from './die-roller'
import TextField from './textField'
import { Store } from '../state/store'


const Section = (props) => {
  const { json, next, dice } = props;
  const { state, dispatch } = useContext(Store);
  const sectionState = state.sections.find(s => s.order === json.step)

  return (
    <div style={{ minWidth: 400}} className="overflow-auto py-6">
      <h2 className="font-bold">{ json.heading }</h2>
      <h4 className="italic">{ json.subheading }</h4>
      <form className="p-3">
        { json.data.map((q, index) => (
          <ListItem
            key={q.order}
            order={q.order}>
            <div className="flex flex-col w-full">
              {
                q.type !== 'die' && <TextField q={q} index={index} json={json} />
              }
              {
                q.type === 'die' &&
                <DieRoller
                  {...props}
                  qID={index}
                  dispatch={dispatch}
                  section={json.step}
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
      { sectionState.done && next }
    </div>
  )
}

export default Section;