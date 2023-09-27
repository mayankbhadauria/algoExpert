
function runLengthEncoding(string) {

    let count = 1; newStr = [];

    for(i=0; i<string.length; i++) {
        if(string[i] == string[i+1]){

            count++;
            if(count>9){
                newStr.push(`9${string[i]}`)
                count = 1;
            }
        }
        else {
            newStr.push(`${count}${string[i]}`)
            count = 1;
        }
    }

    return newStr.join('');
    
}

let str = 'AAAAAAAAAAAAABBCCCCDD';

console.log(runLengthEncoding(str));