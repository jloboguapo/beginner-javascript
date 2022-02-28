const div = document.createElement('div');

div.classList.add('wrapper');

document.body.appendChild(div);

const ul = `<ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
</ul>`;

div.innerHTML = ul;

const img = document.createElement('img');

img.src = 'https://picsum.photos/500';

img.width = 250;
img.height = 250;

img.classList.add('cute');

img.alt = 'Cute Puppy!';

div.appendChild(img);

const myHTML = `
    <div>
        <p>Paragraph One</p>
        <p>Paragraph Two</p> 
    </div>
`;

const ulElement = div.querySelector('ul');

ulElement.insertAdjacentHTML('beforebegin', myHTML);

const myDiv = div.querySelector('div');
myDiv.classList.add('myDiv');

myDiv.lastElementChild.classList.add('warning');

myDiv.firstElementChild.remove();

const cards = document.createElement('div');
cards.classList.add('cards');

function generatePlayerCard(name, age, height) {
  const html = `
    <div class='playerCard'>
    <h2>${name} - ${age}</h2>
    <p>Their height is ${height} and they are ${age} years old.In dog  years this person would be ${
    age * 7
  }.  That would be a tall dog!
    </p>
    <button class='delete' type='button'>&times; Delete</button>
    </div>
    `;

  return html;
}

let cardsHTML = generatePlayerCard('Jon', 22, 70);
cardsHTML += generatePlayerCard('Ron', 32, 78);
cardsHTML += generatePlayerCard('Jan', 26, 72);
cardsHTML += generatePlayerCard('Ran', 13, 59);

cards.innerHTML = cardsHTML;

div.insertAdjacentElement('beforebegin', cards);

const buttons = cards.querySelectorAll('.delete');

function deleteCard(event) {
  const buttonThatGotClicked = event.currentTarget;
  buttonThatGotClicked.closest('.playerCard').remove();
}

buttons.forEach(button => button.addEventListener('click', deleteCard));
