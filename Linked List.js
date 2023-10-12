class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    append(data) {
        const newData = new Node(data);
        if(!this.head) {
            this.head = newData;
        }  else {
            let curr = this.head;
            while(curr.next) {
                curr = curr.next;
            }
            curr.next = newData;
        }
        this.size++;
    }

    prepend(data) {
        const newData = new Node(data);
        newData.next = this.head;
        this.head = newData;
        this.size++;
    }

    insert(data, index) {
        if (index < 0 || index > this.size) {
            return false;
        }

        if (index === 0) {
            this.prepend(data);
            return true;
        }

        const newNode = new Node(data);
        let curr = this.head;
        let previous = null;
        let count = 0;

        while (count < index) {
            previous = curr;
            curr = curr.next;
            count++;
        }

        newNode.next = curr;
        previous.next = newNode;
        this.size++;

        return true;
    }

    removeAt(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }

        if (index === 0) {
            const removedData = this.head.data;
            this.head = this.head.next;
            this.size--;
            return removedData;
        }

        let current = this.head;
        let previous = null;
        let count = 0;

        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }

        const removedData = current.data;
        previous.next = current.next;
        this.size--;

        return removedData;
    }
    
    remove(data) {
        let current = this.head;
        let previous = null;

        while (current) {
            if (current.data === data) {
                if (previous === null) {
                    this.head = current.next;
                } else {
                    previous.next = current.next;
                }
                this.size--;
                return true;
            }

            previous = current;
            current = current.next;
        }

        return false;
    }

    getSize() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }

    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}