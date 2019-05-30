const express = require('express');

const app = express();

app.use(express.json()); // Middleware - for reading the BODY

const messages = [{
    "id" : "1",
    "message" : "test1",
    "id" : "2",
    "message" : "test2",
    "id" : "3",
    "message" : "test3",
    "id" : "14",
    "message" : "test4"
}];

// Read
app.get('/', (request, response) => {
    responseJson(response, messages);
});

 // Delete
app.delete('/', (request, response) => {
    // const messageyId = parseInt(request.query.id, 10);
    const messageId = Number(request.query.id);
    const messageIndex = getIndexById(messages, messageId);
    messages.splice(messageIndex, 1);
    responseJson(response, "ok");
});

// Update
app.put('/', (request, response) => {
    const messageId = Number(request.query.id);
    const messageIndex = getIndexById(messages, messageId);
    // console.log("request.body", request.body);
    messages[messageIndex].name = request.body.name;
    responseJson(response, "ok");
});

// Create
app.post('/', (request, response) => {
    const newMessageId = Math.floor(Math.random() * 10000);
    const newMessageName = request.body.name;
    messages.push({
        id: newMessageId,
        name: newMessageName
    });
    responseJson(response, "ok");
});

function getIndexById(arr, id) {
    return arr.findIndex( item => item.id === id);
}

function responseJson(response, result) {
    response.json({
        result
    });
}

app.listen(8000, () => console.log("server is running in port 8000"));
