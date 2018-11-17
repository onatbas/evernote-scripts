const getNoteStore = require('./common/notestore');

const fs = require('fs');

const noteStore = getNoteStore();
const spec = { includeContent: true, includeResourcesData: true };
const id = '';

noteStore.getNoteWithResultSpec(id, spec).then((result) => {
    fs.writeFile(result.title + ".enex", result.content);

    if (result.resources)
    result.resources.forEach(pdf => {
        const pdfname = pdf.attributes.fileName;
        const pdfbody = pdf.data.body;
    
        fs.writeFile(pdfname, pdfbody);    
    });
    }
);
