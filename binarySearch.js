
function binarySearch(array, target) {

    return findElement(array, target, 0, array.length-1);
}

function findElement(array, target, first, last) {

    if(first>last) return -1

    let middle = Math.floor((first+last)/2);

    console.log(first, last, middle);

    if(target === array[middle]) return middle;

    if(target > array[middle]) return findElement(array, target, middle+1, last);

    if(target < array[middle]) return findElement(array, target, first, middle-1);

}


//[0, 1, 21, 33, 45, 45, 61, 71, 72, 73];
array = [1, 5, 23, 111];
target = 35

console.log(binarySearch(array, target));
