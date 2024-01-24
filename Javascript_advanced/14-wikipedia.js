function createElement(data) {
    var paragraph = document.createElement('p');
    paragraph.textContent = data;
    document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const response = JSON.parse(xhttp.responseText);
            const pageId = Object.keys(response.query.pages)[0];
            const extract = response.query.pages[pageId].extract;
            callback(extract);
        }
    };
    xhttp.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*", true);
    xhttp.send();
}

queryWikipedia(createElement);

