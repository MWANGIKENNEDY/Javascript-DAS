//Array short-comings
// is that arrays in JavaScript are
// implemented as objects, causing them to be less efficient than arrays built in languages
// such as C++ and Java (

//Linked lists are less suitable for random access
// A linked list is a collection of objects called nodes. Each node is linked to a successor
// node in the list using an object reference. The reference to another node is called a link.

// While array elements are referenced by their position, linked list elements are referenced
// by their relationship to the other elements of the linked list.

// Moving through a linked list involves following the links of the list from the 
// beginning node to the end node (not including the header node, which is sometimes used as 
// a hook for entry into a linked list). Something else to notice in the figure is that we 
// mark the end of a linked list by pointing to a null node.

// Marking the beginning of a linked list can be a problem. Many linked-list implementations
// include a special node, called the head, to denote the beginning of a linked list.

// Inserting a new node into a linked list is a very efficient task. To insert a new node, the
// link of the node before the inserted node (the previous node) is changed to point to the
// new node, and the new node’s link is set to the node the previous node was pointing to
// before the insertion.

//remove node - The link of the node before the
// removed node is redirected to point to the node the removed node is pointing to, while
// also pointing the removed node to null, effectively taking the node out of the linked list.

