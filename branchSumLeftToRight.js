
  
  function branchSums(root) {
    if(!root) return 0

    let queue = [];
    let hashFn = {};
    let sum = 0;

    queue.push(root);

    hashFn[node.value] = node.value;
    sum = node.value;

    while(queue) {
        
        let node = queue.pop();

        branchSums(node, hashFn, sum);

        if(node){
            if(node.right) {
                queue.push(node.right);
            }
            else if(node.left) {
                queue.push(node.left);
            }
        }

    }

  }

  function branchSums(node, hashFn, sum) {
    let key = node.value;
    if(hashFn[node]) {

        delete hashFn.key
    }
    
  }