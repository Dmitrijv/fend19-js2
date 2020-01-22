/*
    Övning i små grupper –Skapa en enkel inköpslista
*/


const submitButton = $('#newItemSubmit');
submitButton.bind('click', addItemToBasket);

const inputField = $('#newItemInput');
function addItemToBasket() {

    const itemName = inputField.val();
    if (itemName === "" || !itemName)
        return;

    const payload = " <tr> <td> " + itemName + "</td> </tr >";
    shoppingBasket.append(payload);
    inputField.val('');
}


let shoppingBasket = $('#basket-table-body');

$(document).ready(function () {
    console.log("Hello World");
});






