
function replace() {
    const div = document.createElement('div');
    div.append('TEST');
    div.style.color = 'red';
    root.replaceChildren(new Date(), [1, 2, 3], div);
}

document.querySelector('button').onclick=replace;