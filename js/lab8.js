// Q1.
"use strict";

function Node(val) {
    this.val = val
    this.next = null

}

function LinkedList() {

    this.head = null


    this.add = function(val) {
        if (this.head) {
            let tmp = this.head;
            this.head = new Node(val)
            this.head.next = tmp

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
        do {
            str += node.val + ","
            node = node.next
        } while (node.next)
        str += node.val
        str += "}"
            // print last node
        console.log(str)
    }

    this.remove = function(val) {
        let node = this.head
        let prev = this.head

        // handle first node 

        if (node.val === val) {
            this.head = this.head.next
            return
        }


        do {

            if (node.val === val) {
                prev.next = node.next
                return
            }
            prev = node
            node = node.next

        } while (node.next)

        // handle last node
        if (node.val === val) {
            prev.next = null

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