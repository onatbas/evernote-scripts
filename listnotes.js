'use strict';

const getNoteStore = require('./common/notestore');

function printOutnotes(noteStore, start, count) {
    return new Promise((res, rej) => {
    console.log("print out notes : " + start + " " + count);

        noteStore.findNotesMetadata({}, start, 250, { includeTitle: true, includeAttributes: true}).then((notes) => {
            var count = notes.totalNotes;

            for (var index in notes.notes) {
                console.log(notes.notes[index].title);
                console.log(notes.notes[index].guid);                
            }

            if (count - start > 250)
                printOutnotes(noteStore, start + 250, 250).then((resolve) => res(resolve), (reject) => rej(reject));
            else
                res("Bitti");
        }, (rejection)=>console.log(JSON.stringify(rejection)));
    });
}


function printAllNotes(noteStore) {
    console.log("printAllNotes");
    return printOutnotes(noteStore, 0, 250);
}

function findTagByName(name) {
    var noteStore = getNoteStore();
    return printAllNotes(noteStore);
}


findTagByName('readonly').then((res)=>{
    console.log(res);
}, (rej)=>{console.log(rej);});
