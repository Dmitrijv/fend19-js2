
$(document).ready(function () {

    const url = 'https://api.namnapi.se/v2/names.json?limit=10';

    let loadJsonBtn = document.getElementById('loadJsonBtn');
    loadJsonBtn.addEventListener('click', function () {
        loadJson(url, drawJsonList);
    });

    function loadJson(url, callback) {
        fetch(url).then(resp => resp.json()).then(json => callback(json)).catch(err => console.error(err));
    }

    function drawJsonList(json) {

        // console.log(json);
        console.log(json.names);

        const container = document.getElementById('demoJson');
        container.innerHTML = '';

        const hot = new Handsontable(container, {
            licenseKey: 'non-commercial-and-evaluation',
            data: json.names,
            rowHeaders: true,
            colHeaders: true,
            filters: true,
            stretchH: 'all',
            colHeaders: ['firstname', 'surname', 'gender'],
            columns: [
                { data: "firstname", renderer: "html" },
                { data: "surname", renderer: "html" },
                { data: "gender", renderer: "html" },
            ],
            dropdownMenu: true
        });

    }

});










