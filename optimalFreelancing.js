
function optimalFreelancing(jobs) {

    let sortArray = reverseSortObject(jobs);
    let jobTime = [0,0,0,0,0,0,0];
    let salary = 0;

    sortArray.forEach(element => {

        for(let i = element.deadline-1; i>=0; i--) {
            if(jobTime[i] === 0) {
                jobTime[i] = element.payment;
                salary += element.payment;
                break;
            }
        }
        
    });
    return salary;
}

//nlog(n)
function reverseSortObject(list) {
    return list.sort((a,b) => {return (b.payment-a.payment)});
}

// jobs = [
//     {"deadline":1, "payment": 1},
//     {"deadline":2, "payment": 2},
//     {"deadline":3, "payment": 1},
//     {"deadline":4, "payment": 3},
//     {"deadline":5, "payment": 4},
//     {"deadline":6, "payment": 1},
//     {"deadline":7, "payment": 2},
//     {"deadline":2, "payment": 3},
//     {"deadline":3, "payment": 2}
// ];

jobs = [
      {
        "deadline": 2,
        "payment": 1
      },
      {
        "deadline": 2,
        "payment": 2
      },
      {
        "deadline": 2,
        "payment": 3
      },
      {
        "deadline": 2,
        "payment": 4
      },
      {
        "deadline": 2,
        "payment": 5
      },
      {
        "deadline": 2,
        "payment": 6
      },
      {
        "deadline": 2,
        "payment": 7
      }
    ]

console.log(optimalFreelancing(jobs));