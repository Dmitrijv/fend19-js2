

const API_URL = 'https://api.returnofreckoning.com/stats/online_list_new.php?realm_id=1';
const apiData = null;

axios.get(API_URL).then(function (response) {

    const data = [
        ['', 'Ford', 'Tesla', 'Toyota', 'Honda'],
        ['2017', 10, 11, 12, 13],
        ['2018', 20, 11, 14, 13],
        ['2017', 10, 11, 12, 13],
        ['2018', 20, 11, 14, 13],
        ['2017', 10, 11, 12, 53],
        ['2018', 20, 11, 14, 13],
        ['2017', 10, 11, 12, 33],
        ['2018', 20, 11, 14, 23],
        ['2017', 10, 11, 12, 73],
        ['2018', 20, 11, 14, 83],
        ['2019', 30, 15, 12, 13]
    ];


    const apiData = response.data;

    let onlinePlayers = {};
    Object.keys(apiData).forEach(function (key) {

        const player = apiData[key];
        const id = player.CharacterId;
        const rr = player.RenownRank;


    });


    const container = document.getElementById('example');
    const hot = new Handsontable(container, {
        licenseKey: 'non-commercial-and-evaluation',
        rowHeights: 30,
        colWidths: 150,
        data: data,
        rowHeaders: true,
        colHeaders: true,
        filters: true,
        // width: '100%',
        columns: [
            { data: "title", renderer: "html" },
            { data: "description", renderer: "html" },
            { data: "comments", renderer: "html" },
            { data: "cover", renderer: "html" },
        ],
        dropdownMenu: true
    });

});

