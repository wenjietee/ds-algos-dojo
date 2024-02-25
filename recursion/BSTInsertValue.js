const insertNodeBinarySearchTree = (head, data) => {
    //base case
    if (head === null) {
        head = new Node();

        head.data = data;
        return head;
    }

    //recursion
    if (head.data < data) {
        head.right = insertNodeBinarySearchTree(head.right.data);
    } else {
        head.left = insertNodeBinarySearchTree(head.left.data);
    }
    return head;
};
