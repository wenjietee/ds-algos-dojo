const printLinkedList = (head) => {
    let current = head;

    while (current !== null) {
        console.log(current.val);
        current = current.next;
    }
};

const printLinkedListRecursive = (head) => {
    if (head === null) return;
    console.log(head.val);
    printLinkedListRecursive(head.next);
};

const linkedListValues = (head) => {
    let current = head;
    const values = [];
    while (current !== null) {
        values.push(current.val);
        current = current.next;
    }
};

const linkedListValuesRecursive = (head) => {
    const fillValues = (head, values) => {
        if (head === null) return;
        values.push(head.val);
        fillValues(head.next);
    };

    const values = [];
    fillValues(head, values);

    return values;
};

const linkedListSum = (head) => {
    let current = head;
    let sum = 0;
    while (current !== null) {
        sum += current.val;
        current = current.next;
    }
    return sum;
};

const linkedListSumRecursive = (head) => {
    if (head === null) return 0;
    return head.val + linkedListSumRecursive(head.next);
};

const linkedListFindTarget = (head, target) => {
    let current = head;
    while (current !== null) {
        if (current.val === target) return true;
        current = current.next;
    }
    return false;
};

const linkedListFindTargetRecursive = (head, target) => {
    if (head === null) return false;
    if (head.val === target) return true;
    linkedListFindTargetRecursive(head.next, target);
};

const getNodeValue = (head, index) => {
    let current = head;
    let count = 0;

    while (current !== null) {
        if (count === index) return current.val;
        count++;
        current = current.next;
    }
    return null;
};

const getNodeValueRecursive = (head, index) => {
    if (head === null) return null;
    if (index === 0) return head.val;
    getNodeValueRecursive(head.next, index - 1);
};

const linkedListReversal = (head) => {
    let prev = null;
    let current = head;
    while (current !== null) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
};

const linkedListReversalRecursive = (head, prev = null) => {
    if (head === null) return prev;
    const next = head.next;
    head.next = prev;
    return linkedListFindTarget(next, head);
};

const zipperLists = (head1, head2) => {
    let tail = head1;
    let count = 0;
    let current1 = head1.next;
    let current2 = head2;

    while (current1 !== null && current2 !== null) {
        if (count % 2 === 0) {
            tail.next = current2;
            current2 = current2.next;
        } else {
            tail.next = current1;
            current1 = current1.next;
        }
        count++;
    }

    if (current1 !== null) tail.next = current1;
    if (current2 !== null) tail.next = current2;

    return head;
};

const zipperListsRecursive = (head1, head2) => {
    if (head1 === null && head2 === null) return null;
    if (head1 === null) return head2;
    if (head2 === null) return head1;

    const next1 = head1.next;
    const next2 = head2.next;
    head1.next = head2;
    head2.next = zipperListsRecursive(next1, next2);

    return head1;
};
const mergeTwoSortedLinkedList = (nodeA, nodeB) => {
    // base case
    if (nodeA === null) return nodeB;
    if (nodeB === null) return nodeA;

    // recursion
    if (nodeA.val < nodeB.val) {
        nodeA.next = mergeTwoSortedLinkedList(nodeA.next, nodeB);
        return nodeA;
    } else {
        nodeB.next = mergeTwoSortedLinkedList(nodeA, nodeB.next);
        return nodeB;
    }
};

module.exports = {
    printLinkedList,
    printLinkedListRecursive,
    linkedListValues,
    linkedListValuesRecursive,
    linkedListSum,
    linkedListSumRecursive,
    linkedListReversal,
    linkedListReversalRecursive,
    linkedListFindTarget,
    linkedListFindTargetRecursive,
    getNodeValue,
    getNodeValueRecursive,
    mergeTwoSortedLinkedList,
};
