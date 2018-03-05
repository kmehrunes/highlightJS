# highlightJS
Manage selected text on a web page and highlight them

**This is an Afternoon Project -quick small projects that make life a bit easier-**

**Note: requires jQuery**

### A callback whenever a selection is made or changed, handles mouse and keyboard events which can change the selection
```js
textSelection.onTextSelected("text", console.log); // this will log the selection whenever it changes
```

### Get the selected text and highlight it
```js
let divName = "text";
let selectedText = textSelection.getWindowSelectedText(divName);
let color = "yellow"; // any CSS color value
textSelection.highlightText(selectedText, color, divName);
textSelection.clearWindowSelection(); // clear the selection
```
