const getNoteStore = require('./common/notestore');
const fs = require('fs');
const noteStore = getNoteStore(token);


function createNoteFromFile(title, file) {
  return new Promise((res, rej) => {
    fs.readFile(file, function (err, data) {

      // File couldn't be read.
      if (err) rej(err);

      noteStore.createNote({
        title: title,
        content: String.fromCharCode.apply(null, data)
      }).then(res, rej);
    });
  });
}

createNoteFromFile('title', './test.enex').then(
  result => console.log('OK'),
  error => console.log(error + ' - NOT OK')
);