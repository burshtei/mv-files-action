const core = require('@actions/core');
const fs = require('fs');

const src = core.getInput('src', {required: true})
const dest = core.getInput('dest', {required: true})

if (fs.existsSync(src)) {

   exec(`move ${src} ${dest}`, (error, stdout, stderr) => {
    if (error) {
        throw(error.message);
    }
    if (stderr) {
       throw(error.message);
    }
    console.log(`stdout: ${stdout}`);
});

}
