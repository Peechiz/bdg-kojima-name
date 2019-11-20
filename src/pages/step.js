import { useParams } from 'react-router-dom';
import Sections from '../components/steps'

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
  // {
  //   section: 6,
  //   text: "NORMAL NAME"
  // },
  // {
  //   section: 7,
  //   text: "OCCUPATIONAL NAME"
  // },
]

const Steps = () => {
  let { step } = useParams();

  return Sections[step]();
}

export default Steps;