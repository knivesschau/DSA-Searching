'use strict';
const BinarySearchTree = require("./BinarySearchTree");

// Linear Search
function indexOf(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == value){
            return i;
        }
    }
    return -1;
}

// Binary Search
function binarySearch(array, value, start, end) {
    let start = start === undefined ? 0 : start;
    let end = end === undefined ? array.length : end;

    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(start, end);

    if (item == value) {
        return index;
    }
    else if (item < value) {
        return binarySearch(array, value, index + 1, end);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index - 1);
    }
} 

module.exports = {
    indexOf,
    binarySearch,
};

/* How long will it take to find 8 with binary search? 
   [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
   
   start at index [0]. length of array is 10, therefore, starting middle index is index[5].

   + first check => go to middle of array => index[5] = [12]
        - 8 < 12, so we went too high! now we have to go lower. 
        - range was from index[0] - index[5].

   + second check => move below and make new middle index => index[2] = [6]
        - 8 > 6, so we know that it is within range from this midpoint! need to move up since search value is higher.
        - range was from index[0] - index[4];
    
    + third check => move up slightly => index[3] = [8]
        - 8 === 8, we did it! 
        - 8 was found at array index[3]. 
*/

/* How long will it take to find 16 with binary search? 
    [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]

    start at index [0]. length of array is 10. therefore, starting middle index is index[5].

    + first check => go to middle of array => index[5] = [12]
        - 16 > 12. we are searching too low, so need to move up length of array. 
        - first range was from index[0] - index[5]
    
    + second check => move up and make new middle index => index[8] = [17]
        - 16 < 17, now we are too high! need to move lower again. 
        - range was from index[6] - index[9].

    + third check => move down and make new middle index => index[6] = [14]
        - 16 > 14, now we are too low again. move up! 
        - range was from index[4] - index[8]. 
    
    + fourth check => move up and make new middle index => index[7] = [15]
        - 16 > 15, still too low. 
    
    + fifth check = compare start of search to end of search. start > end, therefore - 
        - return -1, meaning number was not found. 
*/