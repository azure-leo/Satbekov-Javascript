function processQuery() {
    const prompt = require("prompt-sync")()
    const inputNumber = prompt('Введите число: ')
    if (Number(inputNumber) > 7) {
        console.log('Привет')
    }

    const inputName = prompt('Введите имя: ')
    if (inputName === 'Вячеслав') {
        console.log('Привет, ' + inputName)
    } else {
        console.log('Нет такого имени')
    }

    // Формат: строка, где значения вводятся через запятую(15,2,5,200,5...)
    let inputArray = prompt('Введите массив чмсел: ')
    const myArray = inputArray.split(',').map((el) => parseInt(el, 10))
    const filteredArray = myArray.filter(item => item % 3 == 0)
    console.log('Отфильтрованный массив: ', filteredArray)
}

processQuery()