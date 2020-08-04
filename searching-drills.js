'use strict';

const BinarySearchTree = require('./BinarySearchTree');
const Queue = require('./Queue');

// Find a Book
function bookSearch(deweyDec, title, start, end) {
    start = start === undefined ? 0 : start;
    end = end === undefined ? deweyDec.length : end; 

    if (start > end) {
        return - 1;
    }

    const index = Math.floor((start + end) / 2);
    const middle = deweyDec[index];

    for (let i = 0; i < deweyDec.length; i++) {
        if (deweyDec[i] === title) {
            return `Book found: ${title}`
        }

        if (middle < deweyDec) {
            return bookSearch(deweyDec, title, index + 1, end);
        }
        else if (middle > deweyDec) {
            return bookSearch(deweyDec, title, index - 1);
        }
    }
}

console.log(bookSearch(['The Last Wish', 'The Lord of the Rings', 'A Game of Thrones', 'D&D 5th Edition'], 'A Game of Thrones'));

// Searching in a BST 
/*
    Binary-Search-Tree #1: 14 15 19 25 27 35 79 89 90 91 
    Post-Order Traversal? => Left Branch, Right Branch, Root Nodes 

    Post-Order Traversal: 14, 15, 19, 27, 25, 79, 90, 89, 35

                    35
                   /   \
                  25   89
                 / \    / \
               15  27  79  91
              / \         /  
            14  19       90

    Binary-Search-Tree #2: 5 7 6 9 11 10 8.
    Pre-Order Traversal? => Roots, Left Branch, Right Branch

    Pre-Order Traversal: 8, 6, 5, 7, 10, 9, 11

                    8
                  /  \
                 6   10
                / \  /  \
               5  7  9  11
*/

// Implement Tree Traversals 
const BST = new BinarySearchTree();
const treeData = [24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];

function dataFill(arr, bst) {
    let tree = bst;

    for (let i = 0; i < arr.length; i++) {
        tree.insert(arr[i], arr[i]);
    }
    return tree;
}

dataFill(treeData, BST);

function preOrder(bst) {
    let node = bst; 

    console.log(`Searching at node: ${node.key}`);

    if (node.left) {
        preOrder(node.left);
    }
    if (node.right) {
        preOrder(node.right);
    }
}

// preOrder(BST);

function postOrder(bst) {
    let node = bst;

    if (node.left) {
        postOrder(node.left);
    }

    if (node.right) {
        postOrder(node.right);
    }

    console.log(`Searching at node: ${node.key}`);
}

// postOrder(BST);

function inOrder(bst) {
    let node = bst;

    if (node.left) {
        inOrder(node.left);
    }

    console.log(`Searching at node: ${node.key}`);

    if (node.right) {
        postOrder(node.right);
    }
}

// inOrder(BST);

// Next Commanding Officer
function queueOfficers(tree, result = []) {
    const CommanderQueue = new Queue();

    CommanderQueue.enqueue(tree);

    while (CommanderQueue.first !== null) {
        const node = CommanderQueue.dequeue();
        result.push(node.value);

        if (node.left) {
            CommanderQueue.enqueue(node.left);
        }

        if (node.right) {
            CommanderQueue.enqueue(node.right);
        }
    }

    result.forEach(officers => console.log(officers));
}

function nextInCommand() {
    const StarCommandTree = new BinarySearchTree();

    StarCommandTree.insert(5, "Captain Picard");
    StarCommandTree.insert(3, "Commander Riker");
    StarCommandTree.insert(6, "Commander Data");
    StarCommandTree.insert(8, "Lt. Cmdr. Crusher");
    StarCommandTree.insert(7, "Lieutenant Selar");
    StarCommandTree.insert(2, "Lt. Cmdr. Worf");
    StarCommandTree.insert(4, "Lt. Cmdr. LaForge");
    StarCommandTree.insert(1, "Lt. Security-Officer");

    queueOfficers(StarCommandTree);
}

nextInCommand();

// Max Profit
function maxProfit(array) {
    let maxProfit = array[0] - array[1];
    let buyInDay = 0;

    for (let i = 0; i < array.length; i++) {
        let dayProfit = array[i - 1] - array[i];

        if (dayProfit > maxProfit) {
            maxProfit = dayProfit;
            buyInDay = i - 1;
        }
    }
    return `If you buy in on Day ${buyInDay}, you will make a profit of ${maxProfit}`;
}

function profitPredictor() {
    let weekOne = [128, 97, 121, 123, 98, 97, 105];
    
    console.log(maxProfit(weekOne));

    let weekTwo = [128, 97, 121, 123, 98, 97, 105];

    console.log(maxProfit(weekTwo));

    let weekThree = [200, 300, 500, 100, 200, 98, 105];

    console.log(maxProfit(weekThree));
}

profitPredictor();

