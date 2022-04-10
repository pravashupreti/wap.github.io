// Q1.
"use strict";
class LinkedList {
    constructor(arr) {
        if (arr) {
            arr.forEach(elem => this.add(elem));
        }
    }
    add(element) {
        if (this.value === undefined) {
            this.value = element;
            this.next = null;
        } else {
            let current = this;
            while (current.next) {
                current = current.next;
            }
            current.next = { value: element, next: null };
        }
    }
    remove(element) {
        var current = this;
        var prev = null;
        while (current) {
            if (current.value === element) {
                if (prev == null) {
                    this.value = current.next.value;
                    this.next = current.next.next;
                } else {
                    prev.next = current.next;
                }
                return true;
            }
            prev = current;
            current = current.next;
        }
        return false;
    }
    printHelper(list, result) {
        if (list.next == null) {
            result += list.value;
            return result;
        }
        result += list.value + ',';
        return this.printHelper(list.next, result);
    }
    print() {
        let result = 'LinkedList{';
        result = this.printHelper(this, result);
        result += '}';
        console.log(result);
    }
}
let linkedlist = new LinkedList();
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print(); //in the console, you should see: LinkedList{1,2,3}
linkedlist.remove(3);
linkedlist.print(); //in the console, you should see: LinkedList{1,3}