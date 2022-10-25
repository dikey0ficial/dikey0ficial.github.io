document.addEventListener("DOMContentLoaded", on_ready);

function on_ready() {
	if (localStorage.getItem("is_dark") === null) {
		localStorage.setItem("is_dark", window.matchMedia("(prefers-color-scheme: dark)").matches.toString());
	}

	console.log("init: ", localStorage.getItem("is_dark"))
	
	//                                              idk why, but without `== true` it doesn't work  vvvv
	if (window.matchMedia("(prefers-color-scheme: dark)").matches && localStorage.getItem("is_dark") == "true") {
		toggle_theme();
	}
	
	console.log("inited: ", localStorage.getItem("is_dark"))
}

function toggle_theme() {
	document.body.classList.toggle("dark-theme");
	localStorage.setItem("is_dark", document.body.classList.contains("dark-theme"))
	
	console.log("toggled: ", localStorage.getItem("is_dark"))
}
