


function sortedSquaredArray1(array) {
    // this work if elemet of array are positive not when it is negative
    return array.map(element => element*element).sort();
}

// T O(nlogn) ==> (n + nlogn) ==> nlogn
// S O(n)
function sortedSquaredArray(array) {
    let sqArray = [], sortedArray = []
    sqArray = array.map(element => element*element);
    sortedArray = sqArray.sort(function (a,b) {
        return a - b; // Ascending
    });
    return sortedArray;
}

//console.log(sortedSquaredArray([1,2,3,4,5,6,7,8]));

// As problem hints that array are sorted 
// So the biggest number would be either at begening or at the end e.g. [-7, -3, -1, 2, 6, 8]
// Two pointer approach 

// T O(n) S O(n)
function sortedSquaredArray2(array) {
    
    
    let newArray = new Array(array.length),
    i=0, //left pointer  
    j=array.length-1, // right pointer
    k=array.length-1; // new array pointer from right as filling array from right to left

    for(i=0; i<=j;){

        let rightSquare = array[j]**2
        let leftSquare = array[i]**2
      
        if(rightSquare < leftSquare){
            newArray[k] = leftSquare;
            i++;
        }
        else {
            newArray[k] = rightSquare;
            j--;
        }
        k--;
    }
    
    return newArray;
}

console.log(sortedSquaredArray2([-7, -3, 2,4,8]));

// PTR
// code issue 
// I was using "j" as pointer to fill new array from right to left 
// "j" pointer is not conssistenly reducing when new array element enters it reduces only when rightSquare < leftSquare , else case so when its not true "j" wont decrese.
// We need to new pointer to track newArray with filled values "k" which move every tiem new element added to array.



