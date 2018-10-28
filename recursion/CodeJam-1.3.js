function recursion(obj, i = 0, arr = []) {
    typeof arr[i] === 'undefined' ? arr[i] = [] : false;
    arr[i].push(obj.value);
    if(typeof obj.left === 'object') {
      recursion(obj.left, i+1, arr);
    }
    if(typeof obj.right === 'object') {
      recursion(obj.right, i+1, arr);
    }
    return arr;
  }