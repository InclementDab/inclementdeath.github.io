const debugMediaObjects = [{
    Name: "Twitter",
    Icon: "icons/twitter.png",
    OnClick: function() {
        window.open('https://www.twitter.com/InclementDeath', '_blank');
    }
}, {
    Name: "Instagram",
    Icon: "https://www.test.com/favicon.ico",
    OnClick: function() {
        window.open('https://www.google.com/', '_blank');
    }
}];

const createNewItem = {
    Name: "Add New Item",
    Icon: "icons/new-item.svg",
    OnClick: function() {
        $('#add-item-prompt').css('display') = true;
    }
};






function onContainerLoad() {
    let id = 0;
    debugMediaObjects.forEach(item => {
        $('#mediaList').append(createListItem(id, item));
        $(`#item-${id}`).click(item.OnClick);
        id++;
    });

    $('#mediaList').append(createListItem(id++, createNewItem))
    $(`#item-${id}`).click(item.OnClick);
}

function createListItem(id, item) {
    //console.log(item.OnClick);
    return `
        <li class="list-item" id="item-${id}" draggable="true">
            <img class="list-icon" src="${item.Icon}">
            <p class="list-text">${item.Name}</p>
        </li>
        `;
}