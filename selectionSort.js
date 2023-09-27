
function selectionSort(array) {

    let temp, minIndex, min, i, j, foundNewMin = false;

    for(i=0; i<array.length-1; i++) {
        
        minIndex = i;
        min = array[i];
        
        for(j=i+1; j<array.length; j++) {

            // find minimum element
            if(min>array[j]) {
                minIndex = j
                min = array[j];
                foundNewMin = true
            }
        
        }
        
        // Swap if there is new minimum element found other then ith
        if(foundNewMin) {
            temp = array[minIndex];
            array[minIndex] = array[i];
            array[i] = temp;
        }
        
    }

    return array;

}

let array = [7,2,4,1,5,3];

console.log(selectionSort(array));