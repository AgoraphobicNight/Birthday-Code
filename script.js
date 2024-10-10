function showMessage() {
    const message = document.getElementById('message');
    const music = document.getElementById('birthday-music');

    message.classList.toggle('visible');
    message.classList.toggle('hidden', !message.classList.contains('visible'));

    // Play the music
    music.currentTime = 0; // Reset to the start
    music.play(); // Play the music
}
