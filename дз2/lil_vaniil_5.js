function getRootProperty(object, val) {


    let result = { flag : false };
    let answer = null;
    let found = false;
    Object.keys(object).forEach(key => {
        dfs(object[key], val, result);

        if (result.flag && !found) {
            found = true;
            answer = key;
        }
    });

    return answer;
}

function dfs(object, val, result) {
    if (Array.isArray(object)) {

        if (object.find(el => el === val) != undefined && !result.flag) {
            result.flag = true;
        }

        return;
    } 

    Object.keys(object).forEach(key => {
        dfs(object[key], val, result);
    });
}

console.log(getRootProperty(object, 111));
console.log(getRootProperty(object, 116));
console.log(getRootProperty(object, 250));