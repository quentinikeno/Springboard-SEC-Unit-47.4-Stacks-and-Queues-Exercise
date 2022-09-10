/** Node: node for a stack. */

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	/** push(val): add new value to end of the stack. Returns undefined. */

	push(val) {
		const node = new Node(val);
		if (this.first !== null) node.next = this.first;
		if (this.last === null) this.last = node;
		this.first = node;
		this.size++;
	}

	/** pop(): remove the node from the top of the stack
	 * and return its value. Should throw an error if the stack is empty. */

	pop() {
		if (this.size === 0) throw new Error("Stack is empty.");

		const top = this.first;
		this.first = top.next;
		this.size--;
		return top.val;
	}

	/** peek(): return the value of the first node in the stack. */

	peek() {}

	/** isEmpty(): return true if the stack is empty, otherwise false */

	isEmpty() {}
}

module.exports = Stack;
