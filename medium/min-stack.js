class Node {
    constructor(val, next, minValue) {
        this.val = val;
        this.next = next;
        this.minValue = minValue;
    }
}

const createNode = (val, next, minValue) => {
    return new Node(val, next, minValue);
};

class MinStack {
    constructor() {
        this.minValue = Number.MAX_SAFE_INTEGER;
        this.head = createNode(null, null, this.minValue);
    }

    push(val) {
        const node = createNode(val, this.head, Math.min(val, this.minValue));
        this.head = node;
        this.minValue = Math.min(val, this.minValue);
    }

    pop() {
        let next = this.head.next;
        this.head = next;
        this.minValue = this.head.minValue;
    }

    top() {
        return this.head.val;
    }

    getMin() {
        return this.minValue;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
