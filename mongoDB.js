var fileName = '';

process.argv.forEach(function (val, index) {
    if(index === 2) {
        fileName = val;
    }
});

const jsonFile = require(fileName);
function func(obj) {
    let res = {}; 
    for (const i in obj) { 
        if((typeof obj[i]) === 'object') {
            let nestedObj = func(obj[i]);
            for (j in nestedObj) {
                res[i + '.' + j] = nestedObj[j];
            }
        } else {
            res[i] = obj[i];
        }
    } 
    return res;
}
console.log(func(jsonFile));