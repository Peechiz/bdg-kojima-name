import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Section from '../section';
import { data } from './data';
import s4dice from './dice/section4.dice';
import s5dice from './dice/section5.dice';


const Section2 = () => {
  return (
    <Section
      json={data.s2}
      next={(
        <Link to={`/worksheet/3`}>
          <button>Next</button>
        </Link>
      )}
    />
  )
}

const Section3 = () => (
  <Section
    json={data.s3}
    next={(
      <Link to={`/worksheet/4`}>
        <button>Next</button>
      </Link>
    )}
  />
)

const Section4 = () => (
  <Section
    json={data.s4}
    dice={s4dice}
    next={(
      <Link to={`/worksheet/5`}>
        <button>Next</button>
      </Link>
    )}
  />
)

const Section5 = () => {
  const [nextPage, setNextPage] = useState();
  return (
    <Section
      json={data.s5}
      dice={s5dice}
      setNextPage={setNextPage}
      next={(
        <Link to={`/worksheet/${nextPage}`}>
          <button>Next</button>
        </Link>
      )}
    />
  )
}

export default {
  "2": Section2,
  "3": Section3,
  "4": Section4,
  "5": Section5
}