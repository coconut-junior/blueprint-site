const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
	cursor.setAttribute("style", "top: " + (e.pageY - 30) + "px;" + "left: " + (e.pageX - 30) + "px;")
})