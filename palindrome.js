
function palindrome(array) {

    let isPalindrome = true, j = array.length-1;

    midIndex = Math.floor(array.length/2)-1;

    for(i=0; i<=midIndex; i++) {

        
        console.log(i, j, array[i], array[j]);
        
        if(array[i] !== array[j]) {
            isPalindrome = false;
            break;
        }
        j--;
    }

    return isPalindrome;
}

array = 'abccba'

console.log(palindrome(array));