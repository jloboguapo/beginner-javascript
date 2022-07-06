import { convert } from './lib.js';
import { fromInput, fromSelect, toInput, toSelect } from './elements.js';
import { formatCurrency } from './utils.js';

export async function handleInput(e) {
  const rawAmount = await convert(
    fromInput.value,
    fromSelect.value,
    toSelect.value
  );
  toInput.textContent = formatCurrency(rawAmount, toSelect.value);
}
