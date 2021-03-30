const stalk = document.querySelector('#stalk'); 
const leafs = document.querySelectorAll('.leaf');
const pot = document.querySelector('#pot');
const potDecoration = document.querySelectorAll('#pot-decoration');
const heart = document.querySelector('#heart');
const body = document.querySelector('body');
const header = document.querySelector('h1');
const input = document.querySelector('#name');
const btn = document.querySelector('#btn');
const svg = document.querySelector('svg');
const form = document.querySelector('.first-steps');

const tl = new TimelineMax();

tl
.fromTo(input, 1, { opacity: 0, x: -200 }, { opacity: 1, x: 0 })
.fromTo(btn,   1, { opacity: 0, x: 200 }, { opacity: 1, x: 0 }, '-=1');

const personalizeWishes = () => {
  input.value.length > 0
    ? (header.innerHTML = `${input.value} życzę Ci miłego dnia :)`)
    : (header.innerHTML = `Nie wiem jak Ci na imię, ale życzę Ci miłego dnia :)`);
};

const showAndHideElements = () => {
  body.style.backgroundImage = 'none';
  form.style.display = 'none';
  header.style.display = 'flex';
  svg.style.display = 'flex'; 
};

const myAnimation = () => {
  tl.set(body, { backgroundColor: '#f16359' });

  tl.from(pot, 1, { x: -900 })
    .addLabel('lightsOn')
    .to(body, 2, { backgroundColor: '#F5F2C9' })
    .addLabel('grow')
    .from(potDecoration, 1, { opacity: 0 })
    .from(stalk, 3, {
      ease: Power4.easeOut,
      scaleY: 0,
      transformOrigin: '50% 100%',
    })
    .staggerFromTo(leafs, 1,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1 },
      1
    )
    .fromTo(heart, 3, { opacity: 0 }, { opacity: 1 })
    .fromTo(header, 1, { y: -300, opacity: 0 }, { y: 0, opacity: 1 });
};


btn.addEventListener('click', () => {
  showAndHideElements();
  personalizeWishes();
  myAnimation();
});

input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    btn.click();
}
});
