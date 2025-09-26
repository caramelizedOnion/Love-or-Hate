const loveBtn = document.getElementById('loveBtn');
const hateBtn = document.getElementById('hateBtn');
const messageDiv = document.getElementById('message');
const title = document.querySelector('.title');
let emojiInterval = null;

function hideButtons() {
    loveBtn.style.display = 'none';
    hateBtn.style.display = 'none';
}

title.remove();

loveBtn.onclick = function() {
    messageDiv.innerHTML = 'Yay, Happy birthday NANA! 🎉🎂🎈<br>Enjoy your candy! 🍬🍭';
    messageDiv.style.color = '#e75480';
    clearInterval(emojiInterval);
    emojiInterval = setInterval(spawnEmoji, 300);
    hideButtons();
};

hateBtn.onclick = function() {
    messageDiv.textContent = 'No candy for you 😢';
    messageDiv.style.color = '#e75480';
    clearInterval(emojiInterval);
    hideButtons();

    if (title && title.parentNode) {
        title.remove();
    }
};

function spawnEmoji() {
    const emojis = ['🎉','🎂','🥳','💖','😊','💕','🍰','🎈','😄','😻','🍬','🍭'];
    const emoji = document.createElement('div');
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.position = 'fixed';
    emoji.style.left = Math.random() * 90 + 'vw';
    emoji.style.top = '100vh';
    emoji.style.fontSize = (Math.random() * 2 + 2) + 'em';
    emoji.style.zIndex = 9999;
    emoji.style.pointerEvents = 'none';
    emoji.style.transition = 'transform 2.5s linear, opacity 2.5s linear';
    document.body.appendChild(emoji);
    setTimeout(() => {
        emoji.style.transform = `translateY(-110vh) rotate(${Math.random() * 360}deg)`;
        emoji.style.opacity = '0';
    }, 50);
    setTimeout(() => {
        emoji.remove();
    }, 2600);
}
