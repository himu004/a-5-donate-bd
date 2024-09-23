function getElementsInINT(element) {
    const stringElement = document.getElementById(element).innerText;
    const intElement  = parseInt(stringElement);
    return intElement;
}

function getElementsId(element) {
    return document.getElementById(element)
}

function getInputValue(element) {
    element = getElementsId(element);
    return parseInt(element.value)
}

function historyCreation(inputAmount, locationTitle){
    const div = document.createElement('div');
    const now = new Date()
    const dateTimeString = now.toString();
    const title = document.getElementById(locationTitle).innerText
    div.classList.add( 'flex', 'flex-col', 'gap-4', 'md:p-8', 'p-4', 'border-2', 'border-gray-400', 'rounded-xl', 'm-5');
    div.innerHTML = `
        <h3 class="md:text-xl font-extrabold text-black">
            ${inputAmount} Taka donated to: ${title}
        </h3>
        <p class="text-[#111111B3] bg-[#f9f7f3] rounded-lg px-4 py-2">Date : 
            ${dateTimeString}
        </p>   
    `;
    document.getElementById('history').appendChild(div);
}