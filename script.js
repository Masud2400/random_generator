const text = document.getElementById('randJoke');
const button = document.getElementById('button');

const jokes = [
    "Skeletons don’t fight. No guts.",
    "My suitcase is mad. Emotional baggage.",
    "Parallel lines? Never meet.",
    "Scarecrow won. Outstanding in his field.",
    "Played piano by ear. Now hands.",
    "Told wife to embrace mistakes. She hugged me.",
    "Eggs avoid jokes. They’d crack up.",
    "Told my dog a joke. He rolled over.",
    "Tomato turned red. Saw salad dressing.",
    "Fear speed bumps. Slowly getting over it."
];

button.addEventListener('click', function () {
    const randNum = Math.floor(Math.random() * jokes.length);
    text.innerHTML = jokes[randNum];
})