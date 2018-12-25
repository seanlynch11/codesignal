// https://app.codesignal.com/challenge/jPjWP6EAqKStosvve
function burningCandles(candleSizes, n) {
    let newCandleSizes = candleSizes.sort((a, b) => b - a);
    let total = 0;
    while (newCandleSizes.length > 0) {
        let currentTotal = newCandleSizes.slice(0, n).reduce((acc, val) => acc + val , 0);
        total += currentTotal;
        if (newCandleSizes.length >= n) {
            let nextVal = ~~(currentTotal / (n + 1));
            newCandleSizes = insertSorted(newCandleSizes.slice(n), nextVal);
        } else {
            break;
        }
    }
    return total;
}

const insertSorted = (list, item) => {
    let i = list.length - 1;
    while (i >= 0 && item > list[i]) {
        list[i + 1] = list[i];
        i--;
    }
    
    list[i + 1] = item;
    return list;
}
