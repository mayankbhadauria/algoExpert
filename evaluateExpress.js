

function evaluateExpressionTree(tree) {

    if(tree.value>=0) return tree.value;
    
    let leftTree = evaluateExpressionTree(tree.left);
    let rightTree = evaluateExpressionTree(tree.right);

    if(tree.value = -1) return (leftTree + rightTree);
    if(tree.value = -2) return (leftTree - rightTree);
    if(tree.value = -3) return parseInt(leftTree / rightTree);
    if(tree.value = -4) return (leftTree * rightTree);
}


let tree = {
    value: -1,
    left: {
        value: -2,
        left: { value: -4, left: { value: 2, left: null, right: null }, right: { value: 3, left: null, right: null } },
        right: { value: 2, left: null, right: null }
    },
    right: {
        value: -3,
        left: { value: 8, left: null, right: null },
        right: { value: 3, left: null, right: null }
    }
}

console.log(evaluateExpressionTree(tree));