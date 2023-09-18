
function getNthFib(n) {
    let fn = [0, 1], i=1;

    if(n>2) {
        
        while(n-2) {
            fn[i+1] = fn[i] + fn[i-1];
            i++;n--;
        }
        return fn[i];
    }
    else {
        if(n>0) return fn[n-1];
        else return 0
    }

  }

  console.log(getNthFib(8));
  