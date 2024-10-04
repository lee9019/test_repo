var prompt = require('prompt')
prompt.start();

prompt.get(["value"], function (err, res) {
    const value = res.value;
    console.log(typeof (value).toLowerCase())
    switch (typeof (value).toLowerCase()) {
        case "string": console.log('you entered string');
        break;
        case "number": console.log('you entered number')
        break;
        default: console.log("invali value")

    }
});