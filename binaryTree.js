class Node {
    constructor(value) {
        this.key = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    // Create root not if not exist
    // if root exist put element into left if element smaller than root , right if greater that root

    constructor() {}

    insertNode(root, node) {

        if(root === null) return new Node(node);
        
        if(root.key > node) {
            root.left = this.insertNode(root.left, node);
        }
        if(root.key < node) {
            root.right = this.insertNode(root.right, node);
        }

        console.log(root);

        return root;
    };

   
    preOrderTraversal(node) {
        if(node !== null) {
            console.log(node.key);
            this.preOrderTraversal(node.left);
            this.preOrderTraversal(node.right);
        } 
    }

    inOrderTraversal(node) {
        if(node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.key);
            this.inOrderTraversal(node.right);
        } 
    }

    postOrderTraversal(node) {
        if(node !== null) {
            this.postOrderTraversal(node.left);
            this.postOrderTraversal(node.right);
            console.log(node.key);
        }
    }

    BFT(tree) {
        
        let queue = [], visited = [];
        
        if(!tree) return;
        
        queue.push(tree);

        while(queue.length>0) {
            let node = queue.shift();
            if(node){
                visited.push(node.key);
                queue.push(node.left);
                queue.push(node.right);
            }
        }

        console.log(visited);
        return visited;
    }

    DFS(node) {
        if(node) {
            console.log(node.key)
            this.DFS(node.left);
            this.DFS(node.right);
        }
    }

}

const BST = new BinaryTree();

// Uncomment to insert node into binary search tree

//let root = null
// root = BST.insertNode(root, 50);
// BST.insertNode(root, 30);
// BST.insertNode(root, 20);
// BST.insertNode(root, 40);
// BST.insertNode(root, 70);
// BST.insertNode(root, 60);
// BST.insertNode(root, 80);

let tree = {
    key: 50,
    left: {
      key: 30,
      left: { key: 20, left: null, right: null },
      right: { key: 40, left: null, right: null }
    },
    right: {
      key: 70,
      left: { key: 60, left: null, right: null },
      right: { key: 80, left: null, right: null }
    }
  }

//Uncomment to traverse pre-order, in-order, post-order

 BST.preOrderTraversal(tree);
// BST.inOrderTraversal(tree);
// BST.postOrderTraversal(tree);

//Uncomment to traverse tree , depth first search and breath first search

// BST.DFS(tree);
// BST.BFT(tree);
