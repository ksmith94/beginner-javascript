// Named export (we can have lots of these)
// eslint-disable-next-line import/prefer-default-export
export async function fetchJoke(loader) {
  // turn loader on
  loader.classList.remove('hidden');
  const response = await fetch('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    },
  });
  const data = await response.json();
  // turn the loader off
  loader.classList.add('hidden');
  return data;
}
