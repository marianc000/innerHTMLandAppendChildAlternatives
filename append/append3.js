
function li(text) {
    const li = document.createElement('li');
    li.append(text);
    return li;
}

function items() {
    return [...Array(5)].map((e, i) => li('Item '+i));
}

document.querySelector('ul').append(...items());