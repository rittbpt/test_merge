function merge(arr1: number[], arr2: number[]) :number[] {
    let res: number[] = []
    let i: number = 0
    let j: number = 0
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            res.push(arr1[i])
            i++
        } else {
            res.push(arr2[j])
            j++
        }
    }
    if (i < arr1.length) {
        while (i<arr1.length) {
            res.push(arr1[i])
            i++
        }
    } else {
        while (j<arr2.length) {
            res.push(arr2[j])
            j++
        }
    }
    return res
}

module.exports = merge


