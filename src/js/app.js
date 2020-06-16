const divParent = document.createElement('div');
function getRandomInt() {
  return Math.floor(Math.random() * 16);
}
let i;
let rand;
const classParent = 'hole-game';
const c = 'hole';
divParent.classList.add(classParent);
document.body.appendChild(divParent);
for (let index = 0; index < 16; index++) {
  const divEl = document.createElement('div');
  divEl.classList.add(c);
  divEl.setAttribute('id', index);
  divParent.appendChild(divEl);
}
console.log(document.querySelectorAll('.hole'));
const but = document.querySelectorAll('.hole');
setInterval(() => {
  for (let index = 0; index < but.length; index++) {
    const element = but[index];
    if (element.classList.contains('hole_has-mole')) {
      element.classList.remove('hole_has-mole');
      i = index;
    }
  }
}, 1000);

setInterval(() => {
  rand = getRandomInt();
  while (i === rand) {
    rand = getRandomInt();
  }
  but[rand].className = 'hole hole_has-mole';
}, 1000);
