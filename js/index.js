
function analyzeChatBackup(file) {
	$("#dropzone").addClass("hidden");

	checkFileFormat(file)
	// computeStatistics(file)
	// drawPlots(file)
}

function handleFileSelect(evt) {
	evt.stopPropagation();
	evt.preventDefault();

	$("#dropzone").css("background-color", "transparent");

	var holder = evt.dataTransfer || evt.target;
	var file = holder.files[0]; // FileList object.

	if (!file.type.match('text.*')) {
		$(".warning").removeClass("hidden");
		return;
	}

	analyzeChatBackup(file);
}

function handleDragOver(evt) {
	evt.stopPropagation();
	evt.preventDefault();
	evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
	$("#dropzone").css("background-color", "#F2FAF3")
}

function handleDragLeave(evt) {
	$("#dropzone").css("background-color", "transparent");
}

window.onload = function() {
	// Check for the various File API support.
	if (window.File && window.FileReader && window.FileList && window.Blob) {
		// Great success! All the File APIs are supported.
	} else {
		alert('The File APIs are not fully supported in this browser.');
	}

	// Setup the dnd listeners.
	var dropZone = document.getElementById('dropzone');
	dropZone.addEventListener('dragleave', handleDragLeave, false);
	dropZone.addEventListener('dragover', handleDragOver, false);
	dropZone.addEventListener('drop', handleFileSelect, false);

	var manualSelect = document.getElementById('manual-select');
	manualSelect.addEventListener('change', handleFileSelect, false);

	// $(".tags-element").tagsInput({
	// 	'height':'58px',
	// 	'width': '100%',
	// 	'defaultText': 'Add a nickname',
	// 	'min-height': '58px'
	// });
}