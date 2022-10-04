// Your application should meet the requirements listed below:
// 1. Selects from a pool of at least ten names of your classmates.
// 2. A 'Generate Random Names' button that initiates the selection of 4 random names.
// 3. The selected random names are displayed to the browser.
// 4. Each time the Generate Random Names button is pressed, a new set of names appears
//    (replacing the previous set of 4 random names)
// 5. A button named 'Clear' that removes the populated list from the screen
// 6. The application should be designed to be visually pleasing.
// Note: Do not spend too much time on design. Focus primarily on functionality(i.e. steps 1-5).

const firstNames = ["Amanda", "Christ", "LeRoy", "Mariana"];

const secondNames = ["Mimi", "Giovanni", "Michael", "Ahmad"];

const getRandomName = () => `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${secondNames[Math.floor(Math.random() * secondNames.length)]}`;

console.log(getRandomName());


const setRandomName = () => {
    document.getElementById('random-name').innerText = getRandomName();
}
document.getElementById('generate')
    .addEventListener('click', setRandomName);

setRandomName();
