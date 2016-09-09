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
        if (this.root === null) {
            this.root = node;
            this.parentNodes[0] = node;
        } else {
          this.parentNodes.push(node);
          node.parent=this.parentNodes[0];
          (this.parentNodes[0].left===null) ? node.parent.left=node :  node.parent.right=node;
          if (this.parentNodes[0].right) {
            this.parentNodes.splice(0,1);
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
