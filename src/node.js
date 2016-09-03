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

	remove() {
		// √ does nothing if node does not have parent
		// 23) calls child.parent.removeChild with child as arg
    if (!this.parent) {
      return null;
    } else {
    Node.prototype.removeChild(this.parent.left===this? this.parent.left  : this.parent.right);
		return this;
  }

}



	swapWithParent() {
		if (!this.parent) {
			return null;
		}
		else {
			var myParent = this.parent;
			 var myParentLeft = this.parent.left;
			 var myParentRight = this.parent.right;
			 var myLeft = this.left;
			 var myRight = this.right;
			 //set this level above of this.parent to left or right child of parent's parent
			 this.parent=myParent.parent;
       if (this.parent){
         if (myParent.parent.left===myParent){			//is myParent left child of his parent
           myParent.parent.left=this;					//now I'm a left child of my parent
         } else if (myParent.parent.right===myParent){	//is myParent right child of his parent
           myParent.parent.right=this;					//now I'm a right child of my parent
         }
       }
       //move level down this.parent - to this
       if (this===myParentLeft){				//I'm a left child
        if (myParent.right) {
          myParent.right.parent=this;
        }
         this.left=myParent;					//now my parent is my left child
         this.right=myParent.right;			//and my right is my parent's right
       } else if (this===myParentRight){ 		//I'm a right child
         myParent.left.parent=this;
         this.right=myParent;				//now my parent is my right child
         this.left=myParent.left				////and my left is my parent's left
       }
       //set up my parent
       myParent.left=myLeft;
       myParent.right=myRight;
       myParent.parent=this;
	   		return this;
		}
	}


}

module.exports = Node;
