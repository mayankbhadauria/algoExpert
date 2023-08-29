

function minimumWaitingTime(queries) {

    let waitTime = [];
    let sum = 0;

    queries.sort(function(a, b){return a - b});

    console.log(queries)
    
    for(let i=0; i< queries.length; i++) {

        if(i==0) {
            waitTime.push(0)
        }
        else {
            let lastSum = waitTime[i-1] || 0
            waitTime.push(lastSum+queries[i-1]);
        }
        sum = sum + waitTime[i];
    }

    return sum;
  }


  console.log(minimumWaitingTime([3,2,1,2,6]));