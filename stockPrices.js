const best = (arr) => {

    let bestBuy = 0

    for (let i = 0; i<arr.length; i++){
        for(let k = i+1; k<arr.length; k++){

            if(arr[k] - arr[i] > bestBuy){
                bestBuy = arr[k] - arr[i]
            }
        }
    }
    console.log(bestBuy)
}



best([1, 2, 3, 4, 5])
// 4 - buy at $1, sell at $5

best([2, 3, 10, 6, 4, 8, 1])
// 8 - buy at $2, sell at $10

best([7, 9, 5, 6, 3, 2])
// 2 - buy at $7, sell at $9

best([0, 100])
// 100 - buy at $0, sell at $100