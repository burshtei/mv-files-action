const core = require('@actions/core');
const fs = require('fs');

const src = core.getInput('src', {required: true})
const dest = core.getInput('dest', {required: true})

if (existsSync(src)) {

    fs.rename(src, dest, function (err) {
        if (err) throw err
        console.log('Successfully renamed - AKA moved!')
    })
} else {
    console.log('Src files not exists - no move is needed.')
}
