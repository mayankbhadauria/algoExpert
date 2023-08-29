
function branchSums(node, currentSum=0, sum=[]) {

    if(!node) return

    currentSum = node.value + currentSum;
    
    // if leaf node consolidate branch sum and push
    if(!node.left && !node.right) sum.push(currentSum);

    branchSums(node.left, currentSum, sum);
    branchSums(node.right, currentSum, sum);

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

  console.log(branchSums(tree));
