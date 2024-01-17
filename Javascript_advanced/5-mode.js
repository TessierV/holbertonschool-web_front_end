function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };
}

function main() {
    var spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    var darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    var screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    // Add a paragraph to the body
    var welcomeParagraph = document.createElement('p');
    welcomeParagraph.innerText = 'Welcome Holberton!';
    document.body.appendChild(welcomeParagraph);

    // Create buttons
    function createButton(text, modeFunction) {
        var button = document.createElement('button');
        button.innerText = text;
        button.onclick = function() {
            modeFunction();
        };
        document.body.appendChild(button);
    }

    createButton('Spooky', spooky);
    createButton('Dark mode', darkMode);
    createButton('Scream mode', screamMode);
}

document.addEventListener('DOMContentLoaded', main);

