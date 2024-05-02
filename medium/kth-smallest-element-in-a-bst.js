var kthSmallest = function(root, k) {
    let count = 0;
    let result = null;
    let current = root;
    
    while (current !== null) {
        if (current.left === null) {
            count++;
            if (count === k) {
                result = current.val;
                break;
            }
            current = current.right;
        } else {
            let predecessor = current.left;
            while (predecessor.right !== null && predecessor.right !== current) {
                predecessor = predecessor.right;
            }
            if (predecessor.right === null) {
                predecessor.right = current;
                current = current.left;
            } else {
                predecessor.right = null;
                count++;
                if (count === k) {
                    result = current.val;
                    break;
                }
                current = current.right;
            }
        }
    }
    
    return result;
};
