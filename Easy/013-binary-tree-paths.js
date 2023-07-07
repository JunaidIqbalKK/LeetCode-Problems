function binaryTreePaths(root) {
  const result = [];

  function traverse(node, path) {
    if (node === null) {
      return;
    }

    path += node.val.toString();
    //console.log(path);

    if (node.left === null && node.right === null) {
      result.push(path);
    } else {
      traverse(node.left, path + "->");
      traverse(node.right, path + "->");
    }
  }

  traverse(root, "");

  return result;
}

// Testing

const root1 = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: { val: 5, left: null, right: null },
  },
  right: { val: 3, left: null, right: null },
};

console.log(binaryTreePaths(root1)); // Output: ["1->2->5", "1->3"]

const root2 = { val: 1, left: null, right: null };

console.log(binaryTreePaths(root2)); // Output: ["1"]
