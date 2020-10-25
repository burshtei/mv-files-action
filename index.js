const core = require('@actions/core');
const fs = require('fs-extra');

const src = core.getInput('src', {required: true})
const dest = core.getInput('dest', {required: true})

if (fs.existsSync(src)) {

    fs.move(src, dest, function (err) {
        if (err) throw err
        console.log('Successfully renamed - AKA moved!')
    })
} else {
    console.log('Src files not exists - no move is needed.')
}
