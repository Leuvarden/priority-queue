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

// #swapWithParent
//     √ does nothing if node does not have parent
//     25) updates parent.parent
//     26) updates child.parent
//     27) updates parent.child.parent
//     28) updates children of node and parent node
//     29) maintains correct state of parent.parent.left and parent.parent.right

Node.prototype.swapWithParent = function() {

    if (!this.parent) {
        return null;
    } else {
        var thpp = this.parent.parent,
            thp = this.parent;

            //если я правый потомок, то сменить родителя у левого потомка
            if (this.parent.right === this) {
              this.parent.left.parent = this;
            }
            //если я левый потомок и у меня есть брат, то его родитель теперь я
            else if (this.parent.left===this && this.parent.right) {
              this.parent.right.parent = this;
            }


            // if (this.left) {
            //   this.left.parent=thpp;
            // }
            //
            // if (this.right) {
            //   this.right.parent=thpp;
            // }

            if (this.parent.left === this && this.parent.right) {
              this.right = this.parent.right;
            }
            else if (this.parent.right === this) {
              this.left = this.parent.right;
            }


        //я теперь родитель родителя
        this.parent.parent = this;

        //мой родитель теперь родитель родителя
        this.parent = thpp;
        //мой ребенок теперь мой родитель
        // this.left = thp;

        //если у меня есть потомки, то их родитель уже не я

        if (this.parent.left === this && this.parent.right) {
          this.right = this.parent.right;
        }
        else if (this.parent.right === this) {
          this.left = this.parent.right;
        }


        return this;
    }
}
