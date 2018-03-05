let textSelection = {
	getWindowSelectedText: (rootTextId) => {
		let selection = window.getSelection();

		if (!selection || selection.rangeCount < 1) {
			return null;
		}

		return selection.toString();
	},

	highlightText: (text, color, containerElementId) => {
		let regex = new RegExp('(' + text + ')', 'gi');
		let containerHtml = $("#" + containerElementId).html();

		let n = containerHtml.replace(regex, '<span style="background-color: ' + color +
								'">' + text + '</span>');

		$("#" + containerElementId).html(n);
	},

	clearWindowSelection: () => {
		window.getSelection().empty();
	},

	onTextSelected: (containerDivId, handler) => {
		$("#" + containerDivId).mouseup((e) => {
			if (e.which === 1) {
				let selectedText = textSelection.getWindowSelectedText(containerDivId);

				if (selectedText && selectedText.length > 0) {
					handler(selectedText);
				}
			}
		});

		let arrowKey = (keyCode) => keyCode >= 37 && keyCode <= 40;

		$(window).keyup((e) => {
			if (arrowKey(e.which)) {
				let selectedText = textSelection.getWindowSelectedText(containerDivId);

				if (selectedText && selectedText.toString().length > 0) {
					handler(selectedText.toString());
				}
			}
		});
	}
}
