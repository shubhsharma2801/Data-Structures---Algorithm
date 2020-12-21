
var spiralOrder = function(matrix) {
    let top =0;
    let left = 0;
    let bottom = matrix.length -1;
    let right = matrix[0].length -1;
    
    let size = matrix.length * matrix[0].length;
    let result = [];
    if(!matrix || matrix.length ===0){
        return result;
    }
    while(result.length <size){
        //left to right
        for(let i = left;i<=right && result.length<size;i++){
            result.push(matrix[top][i])
        }
        top++;
        //top to bottom
        for(let i=top;i<=bottom && result.length<size;i++){
            result.push(matrix[i][right])
        }
        right--;
        //right to left
        for(let i = right;i>=left && result.length <size;i--){
            result.push(matrix[bottom][i]);
        }
        bottom--;
        //bottom to top
        for(let i=bottom;i>=top && result.length<size;i--){
            result.push(matrix[i][left])
        }
        left++;
    }
    return result;
}