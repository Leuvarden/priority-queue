class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;

    this.parent = null;
    this.left = null;
    this.right = null;

	}

	appendChild(node) {

    if (this.left && this.right) {
      return null;
    }
    else if (this.left===null) {
      this.left = node;
			this.left.parent=this;
    } else {
      this.right = node;
			this.right.parent=this;
    }

	}

	removeChild(node) {

    if (this.left === node) {
      this.left.parent = null;
			this.left = null;
    }
		else if (this.right === node) {
      this.right.parent = null;
			this.right = null;
    }
		else {
      throw "error error no node here";
    }
	}

	remove() { //calls child.parent.removeChild with child as arg

}



	swapWithParent() {

// 		√ does nothing if node does not have parent
// 24) updates parent.parent
// 25) updates child.parent
// 26) updates parent.child.parent
// 27) updates children of node and parent node
// 28) maintains correct state of parent.parent.left and parent.parent.right


	}
}

module.exports = Node;
