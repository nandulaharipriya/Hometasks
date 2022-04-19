function prefill(n, v) {
    if (n === 0 || n === '0') return [];
    if (!parseInt(n) || n < 0) {
        let TypeError = new Error;
        TypeError.name = "TypeError";
        TypeError.message = n + " is invalid";
        throw TypeError
    };
    return new Array(n).fill(v);
}
