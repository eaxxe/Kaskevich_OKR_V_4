const output = document.getElementById('output');
const keyCounts = {};
const displayedKeys = new Set();

document.addEventListener("keydown", function (event) {
	if (event.key.length === 1) {
		const key = event.key;

		keyCounts[key] = (keyCounts[key] || 0) + 1;

		if (keyCounts[key] > 1 && !displayedKeys.has(key)) {
			output.textContent += key;
			displayedKeys.add(key);
		}
	}
});