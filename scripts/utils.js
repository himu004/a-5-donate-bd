function getElementsId(element) {
    return document.getElementById(element);
}

function getInputValue(element) {
    element = getElementsId(element);
    return element.value
}