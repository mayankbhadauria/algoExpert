function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {

    let MaxSum=0, MinSum=0;
    
    if(fastest) {

        redShirtSpeeds.sort((a,b) =>  {return a - b}); // desc
        blueShirtSpeeds.sort((a,b) =>  {return b - a}); // asc

        for(i=0; i<redShirtSpeeds.length; i++) {
            if(redShirtSpeeds[i]>blueShirtSpeeds[i]) {
                MaxSum = MaxSum + redShirtSpeeds[i];
            }
            else {
                MaxSum = MaxSum + blueShirtSpeeds[i];
            }
        }
        return MaxSum;
    }
    else {

        redShirtSpeeds.sort((a,b) =>  {return a - b}); // asc
        blueShirtSpeeds.sort((a,b) =>  {return a - b}); // asc

        for(i=0; i<redShirtSpeeds.length; i++) {

            if(redShirtSpeeds[i]>blueShirtSpeeds[i]) {
                MinSum = MinSum + redShirtSpeeds[i];
            }
            else {
                MinSum = MinSum + blueShirtSpeeds[i];
            }
            
        }
        return MinSum;
    }
  }

red = [5,5,3,9,2]
blue = [3,6,7,2,1]
fastest = false

console.log(tandemBicycle(red, blue, fastest));

// didn't understood question well 
// failed in case of minimum speed , I was taking a minimum number out of pair e.g. [1,2] take 1 , [9,7] take 7
// instead tandem bicycle speed determine by faster rider which mean even in case of minimum speed i need to get max speed of pair after pairing them with another fastest rider from another group e.g. [1,2] take 2 , [9,7] take 9  