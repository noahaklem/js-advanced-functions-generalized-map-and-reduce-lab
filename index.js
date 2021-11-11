// Add your functions here
function map(array, fn) {
    let results = [];

    for (let i = 0; i < array.length; i++) {
        results.push(fn(array[i]))
    }
    return results
}

function reduce(array, fn, start) {
    let total;
    if (start) {
        total = start;
        for (let i = 0; i < array.length; i++) {
            total = fn(array[i], total)
        }
        return total
    } else {
        total = array[0];
        for (let i = array[0]; i < array.length; i++) {
            total = fn(array[i], total)
        }
        return total
    }
}
//sourceArray = [1, 2, true, "razmatazz"] , function(a, memo){ return !!a && !!memo}
// sourceArray = [1,2,3]
//       startingPoint = 100