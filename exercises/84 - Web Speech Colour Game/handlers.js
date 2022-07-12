import { isValidColor } from './colors.js';

export function handleResult({ results }) {
  const words = results[results.length - 1][0].transcript;
  let color = words.toLowerCase();
  color = color.replaceAll(' ', '');
  if (!isValidColor(color)) return;
  const colorSpan = document.querySelector(`.${color}`);
  colorSpan.classList.add('got');
  document.body.style.background = color;
}
