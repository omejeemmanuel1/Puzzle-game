function drag_image(e) {
	e.dataTransfer.setData('imageId', e.target.id);
}

function allowDrop(e) {
	e.preventDefault();
}

function dropImage(e) {
	let imageId = e.dataTransfer.getData('imageId');
	e.target.appendChild(document.getElementById(imageId));
}