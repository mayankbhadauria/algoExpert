
function nodeDepths(root) {
    let depthArray = [], depthSum = 0;
    depthArray = calculateDepth(root);
    //depthSum = depthArray.reduce((accumulator, currentValue) => accumulator+currentValue);
    return depthArray;
}

function calculateDepth(root, x=-1, sum=0) {
    if(!root) return;
    x++;
    sum = sum + x;
    console.log(sum);
    calculateDepth(root.left, x, sum);
    calculateDepth(root.right, x, sum);

    return sum;
}



let tree = {
    value: 50,
    left: {
      value: 30,
      left: { value: 20, left: null, right: null },
      right: { value: 40, left: null, right: null }
    },
    right: {
      value: 70,
      left: { value: 60, left: null, right: null },
      right: { value: 80, left: null, right: null }
    }
  }

  console.log(nodeDepths(tree));