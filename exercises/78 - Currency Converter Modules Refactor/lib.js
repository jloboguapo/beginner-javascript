const endpoint = 'https://api.exchangerate.host/latest';
const ratesByBase = {};

async function fetchRates(base = 'USD') {
  const res = await fetch(`${endpoint}?base=${base}`);
  const rates = await (await res).json();
  return rates;
}

export async function convert(amount, from, to) {
  if (!ratesByBase[from]) {
    console.log(
      `Oh no, we don't have ${from} to convert to ${to}. So lets go get it`
    );
    const rates = await fetchRates(from);
    ratesByBase[from] = rates;
  }
  const rate = ratesByBase[from].rates[to];
  const convertedAmount = rate * amount;
  return convertedAmount;
}
