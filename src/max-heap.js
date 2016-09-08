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
      node.parent = this.parentNodes[Math.floor((l-1)/2)];
      this.parentNodes[l]=node;
      if ((this.parentNodes.indexOf(node))%2===1) {
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
