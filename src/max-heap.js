const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {

	}

	pop() {

	}

	detachRoot() {

	}

	restoreRootFromLastInsertedNode(detached) {

	}

	size() {

	}

	isEmpty() {
		if (this.root === null) {
			return true;
		}

	}

	clear() {

	}

	insertNode(node) {
        if (this.root === null)
        {
            this.root = node;
						this.parentNodes[0] = node;
        }
				else {
					var l = this.parentNodes.length;
					this.parentNodes[l]=node;
					node.parent = this.parentNodes[Math.floor(l/2)];
					if ((l/2)%2===0) {
						node.parent.left = node;
					} else {
						node.parent.right = node;
					}
					return this;
				}
	}

	shiftNodeUp(node) {

	}

	shiftNodeDown(node) {

	}
}

module.exports = MaxHeap;
