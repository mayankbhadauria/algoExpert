

function tournamentWinner(competitions, results) {
    
    let hashFn = {}; winner = {0: "no winner", 1: "0"};

    for(let i = 0; i<= results.length-1; i++){
        let currentCompetition = competitions[i];
        let currentResult = results[i];

        if(currentResult === 0) { // away team won
            hashFn[currentCompetition[0]] = (!hashFn[currentCompetition[0]]? 0:hashFn[currentCompetition[0]]) + 0
            hashFn[currentCompetition[1]] = (!hashFn[currentCompetition[1]]? 0:hashFn[currentCompetition[1]]) + 3
        }
        else { // home team won
            hashFn[currentCompetition[0]] = (!hashFn[currentCompetition[0]]? 0:hashFn[currentCompetition[0]]) + 3
            hashFn[currentCompetition[1]] = (!hashFn[currentCompetition[1]]? 0:hashFn[currentCompetition[1]]) + 0
        }

      console.log(hashFn)
      console.log(" hash " + hashFn[currentCompetition[1]] + " winner " + winner[0])
      
      if(hashFn[currentCompetition[1]]>=winner[1]){
          winner[0]=currentCompetition[1];
          winner[1]=hashFn[currentCompetition[1]];
      }
      if(hashFn[currentCompetition[0]]>=winner[1]){
          winner[0]=currentCompetition[0];
          winner[1]=hashFn[currentCompetition[0]];
      }
    }

    return winner[0];
}


let competitions = [
    ["HTML", "Java"],
    ["Java", "Python"],
    ["Python", "HTML"]
  ];

let results = [0,1,1];

console.log(tournamentWinner(competitions, results));


//Notes 

// I Strugged to find winner 
// did create an object but logic to find winner on run time 
// i messed up, finally cteated object winner = {0: "no winner", 1: "0"}; and also took help of actual solution


