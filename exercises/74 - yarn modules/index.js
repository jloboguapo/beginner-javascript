import wait from 'waait';
import { faker } from '@faker-js/faker';
import { formatDistance, format } from 'date-fns';
import axios from 'axios';
import { isEmpty, isEqual, uniq } from 'lodash';
import to from 'await-to-js';

async function go() {
  console.log('Going!');
  await wait(400);
  console.log('Ending');
}

go();

const fakeBear = faker.animal.bear;
const numberOfBears = 20;
const fakeBears = Array.from({ length: numberOfBears }, fakeBear);

function noDuplicates(arr, arrLength = 10) {
  const uniqueBears = arr.filter((bear, index) => arr.indexOf(bear) === index);
  if (uniqueBears.length < 8) {
    const newFakeBears = Array.from({ length: arrLength }, fakeBear);
    uniqueBears.push(...newFakeBears);
    noDuplicates(uniqueBears);
  } else {
    uniqueBears.length = 8;
    console.log(uniqueBears);
  }
}

function noDuplicatesUsingLodash(arr) {
  console.log(uniq(arr).splice(0, 8));
}

noDuplicates(fakeBears, numberOfBears);
noDuplicatesUsingLodash(fakeBears);

const diff = formatDistance(
  new Date(2003, 3, 4, 11, 32, 0),
  new Date(2022, 3, 4, 11, 32, 0),
  { addSuffix: true }
);
console.log(diff);

const date = new Date();
const formatted = format(date, `LLLL 'the' do y`);
console.log(formatted);

async function getJoke() {
  const { data } = await axios.get('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    },
  });
  console.log(data.joke);
}

getJoke();

const a = [];
const b = [0, 1, 2, 3, 4, 5];

!isEmpty(a) && console.log(a);
!isEmpty(b) && console.log(b);

const person1 = { name: 'juice' };
const person2 = { name: 'juice' };

console.log(isEqual(person1, person2));

function checkIfNameIsCool(name) {
  return new Promise((resolve, reject) => {
    if (name === 'Wes') {
      resolve('Cool name');
      return;
    }
    reject(new Error('Bad name'));
  });
}

async function checkName() {
  const [err, successValue] = await to(checkIfNameIsCool('chs'));
  err ? console.log(err) : console.log(successValue);
}

checkName();
