
function caesarCipherEncryptor(string, key) {

    let currentIndex = -1; newString='', alpha = 'abcdefghijklmnopqrstuvwxyz';

    for(i=0; i<string.length; i++) {
        currentIndex = alpha.indexOf(string[i]);
        let newIndex = currentIndex+key;
        newIndex = newIndex % 26;
        newString += alpha[newIndex];
    }
    return newString;
}

str = 'xyz';
key = 2;

console.log(caesarCipherEncryptor(str, key));