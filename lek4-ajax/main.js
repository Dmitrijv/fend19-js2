
$(document).ready(function () {

    const select = document.querySelector('#categorySelector');

    let loadXmlBtn = document.getElementById('loadXmlBtn');
    loadXmlBtn.addEventListener('click', function () {
        const url = 'https://www.w3schools.com/js/cd_catalog.xml';
        load(url, drawXmlList);
    });

    let loadJsonBtn = document.getElementById('loadJsonBtn');
    loadJsonBtn.addEventListener('click', function () {
        const url = 'https://api.namnapi.se/v2/names.json?limit=10';
        load(url, drawJsonList);
    });

    function load(url, callback) {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                callback(this);
            }
        }; xhr.open('GET', url, true); xhr.send();
    }

    function drawJsonList(xhr) {
        let json = JSON.parse(xhr.responseText);
        let array = json.names;
        console.log(array);


        let list = '<ol>';
        for (let i = 0; i < array.length; i++) {
            let name = array[i];
            list += '<li>' + name.firstname + ' ' + name.surname + ' </li> ';

        }
        list += '</ol>';

        document.getElementById('demoJson').innerHTML = list;

        console.log(select);
        array.forEach(function (name) {
            const option = document.createElement("option");
            option.setAttribute("value", name.firstname);
            option.textContent = name.firstname;
            select.appendChild(option);
        });


    }


    function drawXmlList(xhr) {

        let xml = xhr.responseXML;
        let cds = xml.getElementsByTagName('CD');
        // console.log(cds);

        const cdsArray = [...cds]
        // console.log(arr);

        let xmlData = [
            // ['Artist', 'Title'],
        ];

        xmlData = cdsArray.reduce((data, cd) => {
            const dataRow = {};
            dataRow.Artist = cd.children[1].innerHTML;
            dataRow.Title = cd.children[0].innerHTML;
            return data.concat(dataRow);
        }, xmlData);


        // console.log(xmlData);

        const container = document.getElementById('demoXML');
        container.innerHTML = '';
        const hot = new Handsontable(container, {
            licenseKey: 'non-commercial-and-evaluation',
            data: xmlData,
            rowHeaders: true,
            colHeaders: true,
            filters: true,
            stretchH: 'all',
            colHeaders: ['Artist', 'Title'],
            columns: [
                { data: "Artist", renderer: "html" },
                { data: "Title", renderer: "html" },
            ],
            dropdownMenu: true
        });

    }




});










