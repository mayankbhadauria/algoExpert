
function commonCharacters(strings) {
    let firstString = strings[0], strLength = strings.length, count = 0, commonChar = [];
    
    [...firstString].forEach(char => {
        strings.forEach(str => {
            if(str.indexOf(char) > -1) {
                count++;
            }
        });
        if(count == strLength) commonChar.push(char);
        count = 0;
    });
    
    return commonChar;
}

let strings = ['abc', 'bcd', 'cbaccd']

console.log(commonCharacters(strings));