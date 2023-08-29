
function findClosestValueInBst(tree, target) {

    let closest = Number('Infinity');

    return traversBST(tree, target, closest);
}

function traversBST(tree, target, closest) {

    if(!tree) return closest;

    closest = findClosest(tree, target, closest);
    
    if(target > tree.value) {
        return traversBST(tree.right, target, closest);
    }
    else if(target < tree.value) {
        return traversBST(tree.left, target, closest);
    }
    else return closest;
}

function findClosest(node, target, closest) {
    if(Math.abs(closest - target) > Math.abs(target - node.value)) return node.value;
    else return closest;
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

  console.log(findClosestValueInBst(tree, 41));

  // learning 
  // I was not Returning recursive calls and initial call

