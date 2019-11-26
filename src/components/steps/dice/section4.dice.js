import Dice from '../../../util/dice'
import json from '../data/section4.json'
import {  } from '../../../state/store'

const getTable = (order) => json.data.find(q => q.order === order).table;

const dice = {
  "1.": {
    outcome: () => {
      const roll = Dice.d4()
      const table = getTable("1.")
      const outcome = roll === 4 ? table[1][1] : table[0][1];

      return [roll, outcome];
    }
  },
  "2.": {
    outcome: () => {
      const roll = Dice.d8()
      const table = getTable("2.")
      let outcome;

      if (roll < 6) {
        outcome = table[0][1];
      } else if (roll === 6) {
        outcome = table[1][1];
      } else if (roll === 7) {
        outcome = table[2][1];
      } else if (roll === 8) {
        outcome = table[3][1];
      }
      return [roll, outcome];
    }
  },
  "3.": {
    outcome: () => {
      const roll = Dice.d12()
      const table = getTable("3.");
      const outcome = roll === 12 ? table[1][1] : table[0][1];

      return [roll, outcome];
    }
  },
  "4.": {
    outcome: () => {
      const roll = Dice.d100()
      const table = getTable('4.');
      const outcome = roll === 69 ? table[1][0] : table[0][1];

      return [roll, outcome];
    }
  }
}

export default dice;