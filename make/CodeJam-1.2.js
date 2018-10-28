function sum(a, b) {
    return a + b;
}
function make(...args) {
    return function worker(...args2) {
        if (typeof args2[0] === 'function') {
            return args.reduce((acc, item) => args2[0](acc, item));
        }
        args2.forEach(item => args.push(item));
        return worker;
    }
}