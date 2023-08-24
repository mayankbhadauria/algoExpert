
function findClosestValueInBst(tree, target) {

    let closest = Number('Infinity');

    return traversBST(tree, target, closest);
}

function traversBST(tree, target, closest) {

    if(tree) {

        closest = findClosest(closest, target, tree);
        
        if(target > tree.value) {
            if(tree.right) {
              tree = tree.right;
              traversBST(tree.right, target, closest);
            }
        }
        else if(target < tree.value) {
            if(tree.left) {
              tree = tree.left;
              traversBST(tree.left, target, closest);
            }
        }
        
        else return tree.value;
    }
   
    return closest;
}

function findClosest(closest, target, node) {
    if(Math.abs(closest - target) > Math.abs(target - node.value)) return node.value;
}
  
// This is the class of the input tree. Do not edit.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


