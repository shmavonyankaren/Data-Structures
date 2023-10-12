class MemoFib {
    constructor() {
      this.memo = new Map();
    }

    fib(n) {
        if (this.memo.has(n)) {
            return this.memo.get(n);
        }

        let res;
        if (n <= 2) {
            res = 1;
        } else {
            res = this.fib(n - 1) + this.fib(n - 2);
        }

        this.memo.set(n, res);
        return res;
    }
}