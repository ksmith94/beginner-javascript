// Named export
// eslint-disable-next-line import/prefer-default-export
export function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  if (item === not) {
    console.log('Ahhh! We used that one last time, look again');
    return randomItemFromArray(arr, not);
  }
  return item;
}
