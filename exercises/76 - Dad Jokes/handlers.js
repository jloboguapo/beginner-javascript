import { buttonText, jokeHolder, jokeButtonSpan } from './elements.js';
import { fetchJoke } from './lib.js';
import { randomItemFromArray } from './utils.js';

export async function handleClick() {
  const { joke } = await fetchJoke();
  jokeHolder.textContent = joke;
  jokeButtonSpan.textContent = randomItemFromArray(
    buttonText,
    jokeButtonSpan.textContent
  );
}
