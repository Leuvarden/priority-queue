function Node(data, priority) {
    this.data = data;
    this.priority = priority;

    this.parent = null;
    this.left = null;
    this.right = null;
}



Node.prototype.appendChild = function(node) {
    if (this.left && this.right) {
        return null;
    } else if (this.left === null) {
        this.left = node;
        this.left.parent = this;
    } else {
        this.right = node;
        this.right.parent = this;
    }
}

Node.prototype.removeChild = function(node) {

    if (this.left === node) {
        this.left.parent = null;
        this.left = null;
    } else if (this.right === node) {
        this.right.parent = null;
        this.right = null;
    } else {
        throw "error error no node here";
    }
}

Node.prototype.swapWithParent = function() {

    if (!this.parent) {
        return null;
    } else {
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

function MaxHeap() {
  		this.root = null;
  		this.parentNodes = [];
}

MaxHeap.prototype.insertNode = function(node) {
  if (this.root === null) {
      this.root = node;
      this.parentNodes[0] = node;
      return this;
  }
    else {
      var l = this.parentNodes.length;  
      node.parent = this.parentNodes[Math.floor(l/2)];
      this.parentNodes[l]=node;
      if ((this.parentNodes.length)%2!==0) {
        node.parent.left = node;
      } else {
        node.parent.right = node;
      }
      return this;
    }
}
