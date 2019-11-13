import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../section';
import s2 from './section2.json';
import s3 from './section3.json';
import s4 from './section4.json';
import s4dice from './section4.dice';

export const Section2 = () => (
  <Section
    json={s2}
    next={(
      <Link to={`/worksheet/3`}>
        <button>Next</button>
      </Link>
    )}
  />
)

export const Section3 = () => (
  <Section
    json={s3}
    next={(
      <Link to={`/worksheet/4`}>
        <button>Next</button>
      </Link>
    )}
  />
)

export const Section4 = () => (
  <Section
    json={s4}
    dice={s4dice}
    next={(
      <Link to={`/worksheet/5`}>
        <button>Next</button>
      </Link>
    )}
  />
)