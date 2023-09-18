
function findThreeLargestNumbers(array) {
    let ln = array.length-1;
    largestArray = binarySearch(array);
    return [array[ln-2], array[ln-1], array[ln]];
}

function binarySearch(array) {

    if(array.length<3) return false;

    for(i=0; i<=array.length-1; i++) {

        for(j=0; j<=array.length-i-1; j++) {
            
            if(array[j] > array[j+1]) {
                temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
            
        }

        if(i>3) break;
    }

    return array;
}

  let array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]

  console.log(findThreeLargestNumbers(array))