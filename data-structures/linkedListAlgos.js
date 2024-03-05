const linkedListReversal = (head) => {
    //base case
    if (head === null || head.next === null) {
        return head;
    }

    //recursion
    const pointer = linkedListReversal(head.next);

    head.next.next = head;
    head.next = null;

    return pointer;
};

const mergeTwoSortedLinkedList = (nodeA, nodeB) => {
    // base case
    if (nodeA === null) return nodeB;
    if (nodeB === null) return nodeA;

    // recursion
    if (nodeA.head < nodeB.head) {
        nodeA.next = mergeTwoSortedLinkedList(nodeA.next, nodeB);
        return nodeA;
    } else {
        nodeB.next = mergeTwoSortedLinkedList(nodeA, nodeB.next);
        return nodeB;
    }
};

module.exports = { linkedListReversal, mergeTwoSortedLinkedList };
