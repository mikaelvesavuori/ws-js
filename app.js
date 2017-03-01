document.addEventListener("click", (e) => {
	let object = "Mikael bor härinne i denna låda";
	console.log(`Inside ${object}`);

	e.stopPropagation();

	//e.target.classList.toggle("pimped");

	if (e.target.classList.contains("box")) {
		e.target.classList.add("pimped");
	}
}, false);


console.log(`Outside ${object}`);
