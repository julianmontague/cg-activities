export function sortMatrix(matrix: number[][][]): number[][][] {    
    let vector = matrix.flat();
    vector.sort(arrayCompare);
    return createMatrix(vector);
}

function sumArray(array: number[]): number {
    return array[0] + array[1] + array[2];
}

function arrayCompare(a: number[], b: number[]): number {
    return sumArray(a) - sumArray(b);
}

function createMatrix(array: number[][]): number[][][] {
    // turn the vector of arrays into a matrix of arrays,
    // according to the exercise description
    return [
        [array[0], array[1], array[2]],
        [array[3], array[4], array[5]],
        [array[6], array[7], array[8]]
    ];
}
