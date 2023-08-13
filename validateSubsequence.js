
// O(n) T O(1) S
function isValidSubsequence(array, sequence) {

    let matchlen = 0;
    let subIndex = 0;
    
    for(i=0; i<sequence.length; i++) {
        for(j=subIndex; j<array.length; j++) {
            if(sequence[i] === array[j]) {
                matchlen++;
                subIndex = j+1;
                break;
            }
        }
    }
    return (matchlen === sequence.length);
}

// O(n) T O(1) S
function isValidSubsequenceV1(array, sequence) {
    let j = 0;
    for(i=0; i<array.length; i++) {
     if(array[i] === sequence[j]){
         j++;
     }
    }
    return (j === sequence.length)
 }
 