'use strict';
const getUserStore = require('./common/userstore');
var Evernote = require('evernote');


getUserStore().getUser().then(
    user => console.log(JSON.stringify(user)),
    rej => console.log(JSON.stringify(rej))
);
