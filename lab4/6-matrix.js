function max2D(matrix) {
    let max = -Infinity;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > max) {
                max = matrix[i][j];
            }
        }
    }
    console.log ("Maximum value is: " + max)
}
max2D([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
max2D([[-1, -2, -3], [-4, -5, -6], [-7, -8, -9]]);
max2D([[-1, -2, -3], [-4, -5, -6], [-7, -8, -9], [-3, 3, -5]]);