function classPhotos(redShirtHeights, blueShirtHeights) {

    let canArrange = false; blueCount=0; redCount=0;

    redShirtHeights.sort((a,b) => {{return a - b}});
    blueShirtHeights.sort((a,b) => {{return a - b}});
    
    for(i=0; i<redShirtHeights.length; i++) {
        if(redShirtHeights[i]>blueShirtHeights[i]){
            redCount++
        }
        if(blueShirtHeights[i]>redShirtHeights[i]){
            blueCount++
        }
    }

    if(redCount === redShirtHeights.length || blueCount === blueShirtHeights.length) {
        canArrange = true;
    }

    return canArrange;
  }

// red = [5,8,1,3,4];
// blue = [5,8,1,3,4];

red = [6,9,2,4,5]
blue = [5,8,1,3,4]

console.log(classPhotos(red, blue));
