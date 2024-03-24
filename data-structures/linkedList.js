class ListNode {
    constructor(val = null) {
        this.val = val;
        this.next = null;
    }
    // get size of linked list
    size() {
        let count = 0;
        let node = this.val;
        while (node) {
            count++;
            node = node.next;
        }

        return count;
    }

    // empty linked list
    clear() {
        this.val = null;
    }

    //get first item
    getFirst() {
        return this.val;
    }

    //get next item
    getNext() {
        return this.next;
    }

    //get last item
    getLast() {
        let last = this.val;
        if (last) {
            while (last.next) {
                last = last.next;
            }
        }
        return last;
    }

    //set next item
    setNext(node) {
        this.next = node;
    }
}

module.exports = ListNode;
