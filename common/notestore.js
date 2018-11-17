'use strict';

var token = process.env.EVERNOTE_TOKEN;
var Evernote = require('evernote');

var noteStores = {};

function createNoteStore() {
    var authenticatedClient = new Evernote.Client({
        token: token,
        sandbox: false,
        china: false
    });

    noteStores[token] = authenticatedClient.getNoteStore();
    return noteStores[token];
}


function getNoteStore() {
    return noteStores[token] || createNoteStore(token);
}


module.exports = getNoteStore;