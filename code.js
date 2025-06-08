function makeAudioWithButton(sound, audioTracker, stopAll) {
    const wrapper = document.createElement('div');
    const audio = new Audio(sound.src);
    audioTracker.push(audio);
;
    const button = document.createElement('div');
    button.classList.add('sound-button');
    button.innerText = sound.label || sound.src.split('.')[0];
    button.addEventListener('click', () => {
        stopAll && stopAll();
        audio.load();
        audio.play();
    });
    audio.addEventListener('playing', () => {
        button.classList.add('playing');
    });
    audio.addEventListener('pause', () => {
        button.classList.remove('playing');
    });
    wrapper.append(button);
    return wrapper;
    
}
const audioElements = []; // store references to turn all off
function stopAllAudio() {
    audioElements.forEach((audio) => {
        audio.pause();
    });
}
const soundRefs = [
    {src: 'Botschaft 1.m4a'},
    {src: 'Botschaft 2.m4a'},
    {src: 'Botschaft 3.m4a'},
    {src: 'Botschaft 4.m4a'},
    {src: 'Botschaft 5.m4a'}
];
const layout = document.createElement('div');
layout.classList.add('layout');
soundRefs.forEach((sound) => {
    layout.append(makeAudioWithButton(sound, audioElements, stopAllAudio));
});
document.body.append(layout);