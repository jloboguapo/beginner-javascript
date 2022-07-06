import { buttonText } from '../data/buttonText.js';
import { jokeButtonSpan, jokeHolder, loader } from './elements.js';
import { fetchJoke } from './index.js';
import { randomItemFromArray } from './utils.js';

export async function handleClick() {
  const { joke } = await fetchJoke(loader);
  jokeHolder.textContent = joke;
  jokeButtonSpan.textContent = randomItemFromArray(
    buttonText,
    jokeButtonSpan.textContent
  );
}
