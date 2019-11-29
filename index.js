const characterSpeed = 10;

let characterHitBox = document.getElementById('character-hitbox');
let coinHitBox = document.getElementById('coin-hitbox');

console.log(characterHitBox);

document.addEventListener('keydown', (e) => {
	switch (e.key) {
		case 'w':
			characterHitBox.style.top = parseInt(characterHitBox.style.top, 10) - characterSpeed + 'px';
			doesObjectsIntersect(characterHitBox, coinHitBox);
			break;
		case 's':
			characterHitBox.style.top = parseInt(characterHitBox.style.top, 10) + characterSpeed + 'px';
			doesObjectsIntersect(characterHitBox, coinHitBox);
			break;
		case 'a':
			characterHitBox.style.left = parseInt(characterHitBox.style.left, 10) - characterSpeed + 'px';
			doesObjectsIntersect(characterHitBox, coinHitBox);
			break;
		case 'd':
			characterHitBox.style.left = parseInt(characterHitBox.style.left, 10) + characterSpeed + 'px';
			doesObjectsIntersect(characterHitBox, coinHitBox);
			break;
	}
});

function doesObjectsIntersect(charObj, coinObj) {
	let charXPos = parseInt(charObj.style.left, 10);
	let charYPos = parseInt(charObj.style.top, 10);
	let charWidth = charObj.offsetWidth;
	let charHeight = charObj.offsetHeight;

	let coinXPos = parseInt(coinObj.style.left, 10);
	let coinYPos = parseInt(coinObj.style.top, 10);
	let coinWidth = coinObj.offsetWidth;
	let coinHeight = coinObj.offsetHeight;

	if (
		charXPos < coinXPos + coinWidth &&
		charXPos + charWidth > coinXPos &&
		charYPos < coinYPos + coinHeight &&
		charHeight + charYPos > coinYPos
	) {
		// collision detected!
		let score = document.getElementById('numOfCoinsCollected');
		let screenWidth = window.innerWidth;
		let screenHeight = window.innerHeight;

		score.innerText = parseInt(score.innerText) + 1;
		coinObj.style.left = Math.floor(Math.random() * (screenWidth - 100)) + 'px';
		coinObj.style.top = Math.floor(Math.random() * (screenHeight - 100) + 100) + 'px';
	}
}
