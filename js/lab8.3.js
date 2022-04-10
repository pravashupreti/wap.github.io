// Q3.
"use strict";

Array.prototype.sort = function() {
    let sortedArr = this
    for (let i = 0; i < sortedArr.length; i++) {
        for (let j = 0; j < sortedArr.length - i - 1; j++) {

            if (sortedArr[j] > sortedArr[j + 1]) {
                let tmp = sortedArr[j + 1]
                sortedArr[j + 1] = sortedArr[j]
                sortedArr[j] = tmp
            }
        }
    }
    return sortedArr
}

console.log([5, 6, 8, 9, 7, 4, 1].sort())