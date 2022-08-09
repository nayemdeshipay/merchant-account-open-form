function converTwodArrayToSingle(twoDArr, row, col){
    let r = row;
    let c = col;

    let result = [];
    let rCount = 0;
    let cCount = 0;


    for(let i =0; i < r * c; i++){
        result.push(twoDArr[rCount][cCount]);
        cCount++
        if(cCount == c){
            cCount = 0;
            rCount++;
            continue;
        }
    }

    console.log(result.length);
}

const twoD = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

converTwodArrayToSingle(twoD, 3, 3)