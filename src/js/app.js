let but = document.querySelectorAll(".hole");

function getRandomInt() {
    return Math.floor(Math.random() * 16);
}
let i;
let rand;
setInterval(() => {
    for (let index = 0; index < but.length; index++) {
        const element = but[index];
        element.classList.remove("hole_has-mole");
        i = index;
    }
}, 1000);

setInterval(() => {
        rand = getRandomInt();
        console.log(rand);
        while (i == rand) {
            rand = getRandomInt();
            console.log("ryyyyyyy"+rand);
        }
        but[rand].className = 'hole hole_has-mole'}, 1000);