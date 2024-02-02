"use strict";
function isLegal(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
const hehe = isLegal(15);
console.log(hehe);
