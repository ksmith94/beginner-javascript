const last = 'bos';
const middle = 'slam dunk';

// eslint-disable-next-line import/prefer-default-export
export function returnHi(name) {
  return `hi ${name} ${last}`;
}

const first = 'wes';
// NAMED exports -- We can have as many as we want!
export { last, middle };
export default first;
