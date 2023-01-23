const inputElement = document.querySelector(".search");
const liElements = document.querySelectorAll("li");

const searchEngine = e => {
	const text = e.target.value.toLowerCase();
	

	liElements.forEach(el => {
		if (el.textContent.toLocaleLowerCase().indexOf(text) !== -1) {
			el.style.display = "block";
		} else {
			el.style.display = "none";
		}
	});
};
inputElement.addEventListener("keyup", searchEngine);
