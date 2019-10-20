class Stack {
    constructor() {
        this.item = []
    }
    push(element) {
        this.item.push(element)
    }
    pop() {
        return this.item.push()
    }
    peak() {
        return this.item[this.item.length - 1]
    }
    isEmpty() {
        return this.item.length === 0
    }
    clear() {
        this.item = []
    }
    size() {
        return this.item.length
    }
}

