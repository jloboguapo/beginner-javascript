import { jokeButtonSpan } from './elements.js';

export async function fetchJoke(loader) {
  loader.classList.remove('hidden');
  jokeButtonSpan.classList.add('hidden');
  const response = await fetch('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    },
  });
  const data = await response.json();
  loader.classList.add('hidden');
  jokeButtonSpan.classList.remove('hidden');

  return data;
}
