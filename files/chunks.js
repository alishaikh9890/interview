let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let str = ["a", "b", "c", "d", "e", "f", "g", "h"]

function getChunks(arr, size) {
    while ( arr.length > 0) {
        let chunk = arr.splice(0, size)
        console.log(chunk)
    }
}

getChunks(array, 4)
getChunks(str, 2)
