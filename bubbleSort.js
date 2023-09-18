
function bubbleSort(array = []) {
    
    if(array.length<2) return array;

    for(i=0; i<=array.length-1; i++) {

        for(j=0; j<=array.length-i-1; j++) {
            
            if(array[j] > array[j+1]) {
                temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
            
        }
    }

    return array;
}

let unsortedArray = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];

console.log(bubbleSort(unsortedArray))