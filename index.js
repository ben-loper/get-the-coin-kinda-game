const characterSpeed = 5;

let characterHitBox = document.getElementById('character-hitbox');

console.log(characterHitBox);

document.addEventListener('keydown', (e) => {
	switch (e.key) {
		case 'w':
			characterHitBox.style.top = parseInt(characterHitBox.style.top, 10) - characterSpeed + 'px';
			break;
		case 's':
			characterHitBox.style.top = parseInt(characterHitBox.style.top, 10) + characterSpeed + 'px';
			break;
		case 'a':
			characterHitBox.style.left = parseInt(characterHitBox.style.left, 10) - characterSpeed + 'px';
			break;
		case 'd':
			characterHitBox.style.left = parseInt(characterHitBox.style.left, 10) + characterSpeed + 'px';
			break;
		default:
			console.log("I don't know what to do with that key!");
	}
});
