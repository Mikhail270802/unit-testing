// Это вспомогательный объект, поведение которого задаётся заранее. 
//Он используется для того, что имитировать интерфейс зависимого компонента и проверить в ходе теста, правильно ли он используется.
function map(array, callback) {
    const result = []
    for(let i = 0; i < array.length; i++) {
        result.push(callback(array[i]))
    }
    return result
}

module.exports = {map}




