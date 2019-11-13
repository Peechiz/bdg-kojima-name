import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Section2,
  Section3,
  Section4
} from '../components/steps'

export const stepData = [
  {
    section: 2,
    text: "Personal Information"
  },
  {
    section: 3,
    text: "Kojima Information"
  },
  {
    section: 4,
    text: "Determining Your Name Conditions"
  },
  {
    section: 5,
    text: "Determining Your Name Category"
  },
  {
    section: 6,
    text: "NORMAL NAME"
  },
  {
    section: 7,
    text: "OCCUPATIONAL NAME"
  },
]

const Steps = () => {
  let { step } = useParams();

  switch (step) {
    case '2':
      return <Section2 />;
    case '3':
      return <Section3 />;
    case '4':
      return <Section4 />;
  }
}

export default Steps;