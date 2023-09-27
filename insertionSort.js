
function insertionSort(array) {

let temp;

for(i=1; i<array.length; i++) {
    
    let key = array[i];
    
    for(j=i; j>=0; j--) {
        if(key<array[j-1]) {
            temp = array[j-1];
            array[j-1] = key;
            array[j] = temp;
        }
        // array before index j is already sorted , 
        // If jth element is less then j+1 which mean we don't have to test it for rest of array until index 0
        else break 
    }

}

return array;

}

let array = [7,2,4,1,5,3];

console.log(insertionSort(array))