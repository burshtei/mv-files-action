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


//
// try {
//     // `who-to-greet` input defined in action metadata file
//     const nameToGreet = core.getInput('who-to-greet');
//     console.log(`Hello ${nameToGreet}!`);
//     const time = (new Date()).toTimeString();
//     core.setOutput("time", time);
//     // Get the JSON webhook payload for the event that triggered the workflow
//     const payload = JSON.stringify(github.context.payload, undefined, 2)
//     console.log(`The event payload: ${payload}`);
// } catch (error) {
//     core.setFailed(error.message);
// }