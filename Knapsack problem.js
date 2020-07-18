function knapsack(itemsNumber, capacity, weights, values) {

    var finalResult;

    if (itemsNumber === 0 || �apac�ya === 0) {
        finalResult = 0;
    } else if (weights[itemsNumber] > capacity) {
        finalResult = knapsack(itemsNumber - 1, capacity, weights, values);
    } else {
        var dontPutInKnapsack = knapsack(itemsNumber - 1, capacity, weights, values);
        var putInSack = values[itemsNumber] + knapsack(itemsNumber - 1, capacity - weights[itemsNumber], weights, values);
        finalResult = Math.max(dontPutInKnapsack, putInSack);
    }
    //nihai sonucu d�nd�r
    return finalResult;
}

var itemWeights = [null, 1, 3, 2, 5, 4],
    itemValues = [null, 2, 4, 6, 8, 5],
    numberOfItemsToConsider = 10,
    totalNumberOfItems = 5;

var maximizeTotal = knapsack(totalNumberOfItems,
    numberOfItemsToConsider,
    itemWeights,
    itemValues);

console.log('Recursion Maximum is : ', maximizeTotal); //18 d�nd�r�r

/*
*   D�NAM�K PROGRAMLAMAYI KULLANMA:
*       bu yakla��mda ��e say�s�n� (n) saklamak i�in              
       yap�yoruz 
*         iki boyutlu bir dizide kapasite
*        dpArr = [ [a, b], [c, d], [e, f] ]
*        therefore dpArr[0][0] => a; or dpArr[0][1] =>     
   b;
*/

var dpArr = [
    [undefined, undefined],
    [undefined, undefined],
    [undefined, undefined],
    [undefined, undefined],
    [undefined, undefined],
    [undefined, undefined]
];

function knapsackDP(itemsNumber, capacity, weights, values) {

    var finalResult;

    // sonucun dizide �nceden saklan�p saklanmad���n� kontrol edin. 
    if (dpArr[itemsNumber][capacity] !== undefined) {
        return dpArr[itemsNumber][capacity];
    }

    // taban taban�n� tan�mlar. kapasite veya ��e say�s� s�f�rsa, nihai sonu� s�f�rd�r    
    if (itemsNumber === 0 || capacity === 0) {
        finalResult = 0;
    } else if (weights[itemsNumber] > capacity) {
        finalResult = knapsackDP(itemsNumber - 1, capacity, weights, values);
    } else {
        var dontPutInKnapsack = knapsackDP(itemsNumber - 1, capacity, weights, values);
        var putInSack = values[itemsNumber] + knapsackDP(itemsNumber - 1, capacity - weights[itemsNumber], weights, values);
        finalResult = Math.max(dontPutInKnapsack, putInSack);
    }

    // sonucu diziye kaydet
    dpArr[itemsNumber][capacity] = finalResult;

    // nihai sonucu d�nd�r
    return finalResult;
}

var maximizeTotalDP = knapsackDP(totalNumberOfItems,
    numberOfItemsToConsider,
    itemWeights,
    itemValues);

console.log('Dynamic Programming Maximum is : ', maximizeTotalDP); // 18 d�nd�r�r
