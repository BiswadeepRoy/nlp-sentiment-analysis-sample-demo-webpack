import 'regenerator-runtime/runtime'
const fetch = require('node-fetch');

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8082/getAPIkey')
        .then(res => res.json())
        .then(function(res) {
            return callAPI(res.applicationkey);
        }).then(function(data) {
            return updateUI(data);
        })

}
const callAPI = async(key = '') => {
    const res = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${key}&of=json&txt=Main%20dishes%20were%20quite%20good%2C%20but%20desserts%20were%20too%20sweet%20for%20me.&model=general&lang=en`);
    try {
        const data = await res.json();
        //console.log(JSON.stringify(data));
        return JSON.stringify(data);
    } catch (error) {
        return console.log('error', error);
    }
}

const updateUI = async(data = '') => {
    //console.log(data);
    document.getElementById('results').textContent = data;
    return data;
}

export { handleSubmit }

export { callAPI }