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
        var thpp = this.parent.parent,
            thp = this.parent;

        this.parent.parent = this;
        this.parent.child = this.parent;
        this.parent = thpp;
        this.left = thp;

        return this;
    }
}
