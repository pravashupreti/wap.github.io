// Q4.
"use strict";

function Node(val) {
    this.val = val
    this.next = null

}

function LinkedList() {

    this.head = null


    this.add = function(val) {
        if (this.head) {
            let lastnode = this.head
            while (lastnode.next) {
                lastnode = lastnode.next
            }
            lastnode.next = new Node(val)

        } else {
            this.head = new Node(val)
        }
    }

    this.print = function() {
        let node = this.head
        if (!this.head) {
            console.log("LinkedList: {}")
            return
        }
        let str = "LinkedList: {"
        while (node.next) {
            str += node.val + ","
            node = node.next
        }

        str += node.val
        str += "}"
            // print last node
        console.log(str)
    }

    this.remove = function(val) {
        let node = this.head
        let prev = null

        while (node) {

            if (node.val === val) {
                if (prev == null) {
                    this.head = this.head.next
                } else {
                    prev.next = node.next
                }
                return
            }
            prev = node
            node = node.next

        }

    }

}

let linkedlist = new LinkedList()

linkedlist.add(1)
linkedlist.add(2)
linkedlist.add(3)

linkedlist.print()

linkedlist.remove(2)

linkedlist.print()

linkedlist.remove(3)
linkedlist.print()