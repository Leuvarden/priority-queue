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

		// 5) assings passed node to this.root if heap is empty
		// 6) inserts nodes to correct places
		// 7) maintains this.parentNodes in correct state

        if (this.root === null)
        {
            this.root = node;
        } else {
					var current = this.root;



				}
	}

	shiftNodeUp(node) {

	}

	shiftNodeDown(node) {

	}
}

module.exports = MaxHeap;
