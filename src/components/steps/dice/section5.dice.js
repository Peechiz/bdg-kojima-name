import Dice from '../../../util/dice'
import json from '../data/section5.json'

const getTable = (order) => json.data.find(q => q.order === order).table;

const dice = {
  "5.": {
    outcome: () => {
      const roll = Dice.d20()
      const table = getTable("5.")
      const outcome = roll === 4 ? table[1][1] : table[0][1];

      return [roll, outcome];
    }
  },
}

export default dice;