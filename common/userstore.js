'use strict';

var token = process.env.EVERNOTE_TOKEN; 
var Evernote = require('evernote');


var userStores = {};
function createUserStore() {
    var authenticatedClient = new Evernote.Client({
        token: token,
        sandbox: false,
        china: false
    });

    userStores[token] = authenticatedClient.getUserStore();
    return userStores[token];
}


function getUserStore() {
    return userStores[token] || createUserStore();
}


module.exports = getUserStore;
