const dieMaker = size => {
  return () => Math.ceil(Math.random() * size);
}

export const d6 = dieMaker(6);
export const d4 = dieMaker(4);
export const d8 = dieMaker(8);
export const d12 = dieMaker(12);
export const d20 = dieMaker(20);
export const d100 = dieMaker(100);

const Dice = {
  d6,
  d4,
  d8,
  d12,
  d20,
  d100
}

export default Dice;