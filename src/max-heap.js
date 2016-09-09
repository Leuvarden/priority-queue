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
        if (this.root === null) {
            return 0;
        } else if (this.root.left === null) {
            return 1;
        } else {
            var len = this.parentNodes.length,
                size = len * 2;
            return size = (this.parentNodes[len - 1].parent.right) ? size - 1 : size - 2;
        }
    }

    isEmpty() {
        if (this.root === null) {
            return true;
        }
    }

    clear() {
        this.root = null;
        this.parentNodes = [];

    }

    insertNode(node) {
        if (this.root === null) {
            this.root = node;
            this.parentNodes[0] = node;
        } else {
            this.parentNodes.push(node);
            node.parent = this.parentNodes[0];
            (this.parentNodes[0].left === null) ? node.parent.left = node: node.parent.right = node;
            if (this.parentNodes[0].right !== null) {
                this.parentNodes.splice(0, 1);
            }
        }
        return this;
    }

    shiftNodeUp(node) {

    }

    shiftNodeDown(node) {

    }
}

module.exports = MaxHeap;
