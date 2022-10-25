document.addEventListener("DOMContentLoaded", on_ready);

function on_ready() {
	if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
		toggle_theme();
	}
}

function toggle_theme() {
	document.body.classList.toggle("dark-theme");
}
