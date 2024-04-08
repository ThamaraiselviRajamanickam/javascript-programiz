//JavaScript Program to Implement a Queue
class Queue {
    constructor() {
        this.items = [];
    }

    // Add element to the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Remove element from the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift();
    }

    // Get the front element of the queue without removing it
    front() {
        if (this.isEmpty()) {
            return "No elements in Queue";
        }
        return this.items[0];
    }

    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the size of the queue
    size() {
        return this.items.length;
    }

    // Print the queue elements
    printQueue() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str;
    }
}

// Example usage:
let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log("Queue elements:", queue.printQueue()); // Output: 10 20 30
console.log("Front element:", queue.front()); // Output: 10
console.log("Dequeued element:", queue.dequeue()); // Output: 10
console.log("Queue elements after dequeue:", queue.printQueue()); // Output: 20 30
console.log("Is Queue empty?", queue.isEmpty()); // Output: false
console.log("Size of Queue:", queue.size()); // Output: 2



/*We define a Queue class with methods enqueue, dequeue, front, isEmpty, size, and printQueue.
The enqueue method adds an element to the end of the queue.
The dequeue method removes and returns the first element from the queue.
The front method returns the front element of the queue without removing it.
The isEmpty method checks if the queue is empty.
The size method returns the number of elements in the queue.
The printQueue method returns a string representation of the queue elements.
We demonstrate the usage of these methods with example operations on a queue instance. */