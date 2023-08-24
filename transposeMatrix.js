function transposeMatrix(matrix) {

    let columns = matrix.length-1; // no of height
    let row = matrix[0].length-1; // no of rows considering R*C

    let newMatrics = []
    let x = []
    
    // As we need to reverse the order R*C => C*R 
    //Travers new matrics in reverse So now row => columns and columns => row 

    for(i=0; i<=row; i++) { //columns
        x=[];
        for(j=0; j<=columns; j++) { // row
            //console.log(matrix[i][j]);
            x.push(matrix[j][i]);
        }
        newMatrics.push(x);
    }
    return newMatrics;
  }

  let mat = [
    [1,2],
    [3,4],
    [5,6]
  ]

  console.log(transposeMatrix(mat))

  // issue faced 1
  // I tried to do in place operation , reversing existng matrixs 
  // you should not do it as new matrics orfere will be different

  // issue faced 2
  // I was traversing R*C of existing matrics while I should be traversing according to new matrics as C*R
  
  // issue faced 3
  // Wasnt clear about how to define JS matrics was dong [i,j] but it was [i][j]