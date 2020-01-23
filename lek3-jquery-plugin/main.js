

const API_URL = 'https://api.returnofreckoning.com/stats/online_list_new.php?realm_id=1';

axios.get(API_URL).then(function (response) {

    const data = [
        ['CharacterId', 'CareerLine', 'Name', 'Level', 'RenownRank'],
    ];

    const apiData = response.data;

    /*
    
    CharacterId: "702322"    
    CareerLine: "<img src='https://www.returnofreckoning.com/forum/styles/dawar/theme/images/careers/23.png' alt='Disciple of Khaine' title='Disciple of Khaine' height='32' width='32' />"
    Name: "<a href='https://www.returnofreckoning.com/armory.php?character_id=702322&character_name=Yliana'>Yliana</a>"
    Level: "40"
    RenownRank: "44"

    Race: "<img src='https://www.returnofreckoning.com/forum/styles/dawar/theme/images/races/5.png' alt='Dark Elf' title='Dark Elf' height='32' width='32' />"
    RealmId: "1"
    Sex: "1"
    
    */

    Object.keys(apiData).forEach(function (key) {

        const player = apiData[key];
        const dataRow = {};

        dataRow.CharacterId = player.CharacterId;
        dataRow.CareerLine = player.CareerLine;
        dataRow.Name = player.Name;
        dataRow.Level = player.Level;
        dataRow.RenownRank = player.RenownRank;

        data.push(dataRow);

    });

    data.shift(); // remove first blank row 

    const container = document.getElementById('example');
    const hot = new Handsontable(container, {
        licenseKey: 'non-commercial-and-evaluation',
        data: data,
        rowHeaders: true,
        colHeaders: true,
        filters: true,
        stretchH: 'all',
        colHeaders: ['CharacterId', 'CareerLine', 'Name', 'Level', 'RenownRank'],
        columns: [
            { data: "CharacterId", renderer: "html" },
            { data: "CareerLine", renderer: "html" },
            { data: "Name", renderer: "html" },
            { data: "Level", renderer: "html" },
            { data: "RenownRank", renderer: "html" },
        ],
        dropdownMenu: true
    });

});

