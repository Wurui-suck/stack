class Stack {
    constructor() {
        this.count = 0
        this.item = {}
    }
    push(element) {
        this.item[this.count] = element
        this.count += 1
    }
    size() {
        return this.count
    }
    isEmpty() {
        return this.count === 0
    }
    pop() {
        if (this.isEmpty()) { return undefined }
        else {
            let result = this.item[(this.count - 1)]
            delete this.item[(this.count - 1)]
            this.count -= 1
            return result
        }
    }
    peak() {
        if (this.count === 0) { return undefined }
        else {
            return this.item[(this.count - 1)]
        }
    }
    clear() {
        while (!this.isEmpty()) {
            this.pop()
        }
    }
    toString() {
        if (this.isEmpty()) { return '' }
        let array = []
        for (let i = 0; i < this.count; i++) {
            array.push(this.item[i])
        }
        return array.toString()
    }
}


//10进制转化为2进制

function decimalToBinary(decNumber) {
    const remStack = new Stack
    let number = decNumber
    let rem
    let obj = ''
    if (number === 0) { return 0 }
    while (number !== 0) {
        rem = Math.floor(number % 2)
        remStack.push(rem)
        number = Math.floor(number / 2)
    }
    while (!remStack.isEmpty()) {
        obj += remStack.pop()
    }
    return obj
}



//10进制转化为任意进制
function baseConverter(decNumber, base) {
    const remStack = new Stack
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let number = decNumber
    let rem
    let obj = ''
    if (!(base >= 2 && base <= 36)) {
        return ''
    }
    if (decNumber === 0) {
        return 0
    }
    while (number !== 0) {
        let rem = Math.floor(number % base)
        remStack.push(rem)
        number = Math.floor(number / base)
    }
    while (!remStack.isEmpty()) {
        obj += digits[remStack.pop()]
    }
    return obj
}

//2进制转换为10进制
function binaryToDecimal(BinNumber) {
    const string = String(BinNumber)
    let array = Array.from(string)
    let number = 0
    for (i = 0; i < array.length; i++) {
        number += array[i] * (2 ** i)
    }
    return number
}

//任意进制转换为10进制
function toDecimal(string, base) {
    if (!(base >= 2 && base <= 36)) {
        alert('只能转换2-36进制')
    }
    let array = Array.from(string.split(''))
    let result = 0
    let newArray = array.map(function (item) {
        let hash = {
            0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12,
            D: 13, E: 14, F: 15, G: 16, H: 17, I: 18, J: 19, K: 20, L: 21, M: 22, N: 23, O: 24,
            P: 25, Q: 26, R: 27, S: 28, T: 29, U: 30, V: 31, W: 32, X: 33, Y: 34, Z: 35
        }
        return item = hash[item]
    })
    let judge = true
    for (i = 0; i < newArray.length; i++) {
        if (newArray[i] > base - 1) {
            judge = false
            alert('输入的数字错误')
        }
    }
    if (judge) {
        for (i = 0; i < array.length; i++) {
            result += newArray[i] * (base ** i)
        }
    }
    return result
}

//任意进制的转换
function casualBaseConverter(fromBase, string, toBase) {
    if (!((fromBase || toBase) >= 2 && (fromBase || toBase) <= 36)) {
        alert('只能转换2-36进制')
    }
    let array = Array.from(string.split('')).reverse()
    let decNumber = 0
    let result
    let newArray = array.map(function (item) {
        let hash = {
            0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12,
            D: 13, E: 14, F: 15, G: 16, H: 17, I: 18, J: 19, K: 20, L: 21, M: 22, N: 23, O: 24,
            P: 25, Q: 26, R: 27, S: 28, T: 29, U: 30, V: 31, W: 32, X: 33, Y: 34, Z: 35
        }
        return item = hash[item]
    })
    let judge = true
    for (i = 0; i < newArray.length; i++) {
        if (newArray[i] > fromBase - 1) {
            judge = false
            alert('输入的数字错误')
        }
    }
    if (judge) {
        for (i = 0; i < newArray.length; i++) {
            decNumber += newArray[i] * (fromBase ** i)
        }
        result = decNumber
    }
    const remStack = new Stack
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let rem
    let obj = ''
    if (result === 0) {
        return 0
    }
    while (result !== 0) {
        rem = Math.floor(result % toBase)
        remStack.push(rem)
        result = Math.floor(result / toBase)
    }
    while (!remStack.isEmpty()) {
        obj += digits[remStack.pop()]
    }
    return obj

}
