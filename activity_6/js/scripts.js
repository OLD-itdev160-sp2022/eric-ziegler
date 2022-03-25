// Array to store msgs
var messages = [];

// message type lookup object, like an enum
var messageType = {
    out: 'out-message',
    in: 'in-message',
    unknown: 'unknown-message'
};

// Seed data
var data = [
    {
        type: messageType.out,
        user: 'Eric',
        message: 'Hello'
    },
    {
        type: messageType.in,
        user: 'Steve',
        message: 'Whats up?'
    },
    {
        type: messageType.out,
        user: 'Eric',
        message: 'Dunno'
    }
];

// message constructor
function Message(type, user, message){
    this.type = type;
    this.user = user;
    this.message = message;
}

// function to create and return elements for message
function createMessageElement(message){
    //create text element
    var messageText = document.createTextNode(message.user + ": " + message.message);

    // create element and add the text
    var messageEl = document.createElement('div');
    messageEl.appendChild(messageText);

    // add a class according to msg type
    messageEl.className = message.type;

    return messageEl;
}

// button event handler for new message
function addMessageHandler(event){
    var user, type;
    var messageInput = document.getElementById('message-input');
    var messageContainer = document.getElementById('message-container');

    // determine type and set variables accordingly
    switch (event.target.id) {
        case 'send-button':
            user = 'Eric';
            type = messageType.out;
            break;
        case 'reply-button':
            user = 'Steve';
            type = messageType.in;
            break;
        default:
            user = 'unknown';
            type = messageType.unknown;
            break;
    }

    // create message
    if(messageInput.value !== ''){
        var message = new Message(type, user, messageInput.value);
        messages.push(message);

        // create message element
        var el = createMessageElement(message);

        // add to the DOM
        messageContainer.appendChild(el);

        // clear input
        messageInput.value = '';
    }
}

// load seed data
function loadSeedData(){
    for (var i = 0; i < data.length; i++){
        var message = new Message(data[i].type, data[i].user, data[i].message);
        messages.push(message);
    }
    // load view with seeds
    var messageContainer = document.getElementById('message-container');
    for (var i = 0; i < messages.length; i++){
        messageContainer.appendChild(createMessageElement(messages[i]));
    }
}

var init = function(){
    //wire event handlers
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;

    // run load seed data function
    loadSeedData();
};

init();