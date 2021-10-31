interface UF {
    union(p: number, q: number): void;
    connected(p: number, q: number): boolean;
    count(): number;
}

class UnionFound implements UF {
    private _count: number;
    private _parent: number[];
    private _size: number[];
    constructor(n: number) {
        this._count = n;
        // set initizal union count;
        this._parent = new Array(n);
        this._size = new Array(n).fill(1);
        for (let i = 0; i < n; i++) {
            // set parent to self of node;
            this._parent[i] = i;
        }
    }

    // find root
    private _find(x: number): number {
        while (x != this._parent[x]) {
            this._parent[x] =  this._parent[this._parent[x]];
            // path compression
            x = this._parent[x];
        }
        return x;
    }

    union(p: number, q: number): void {
        let rootP = this._find(p);
        let rootQ = this._find(q);

        if (rootP === rootQ) return;

        if (this._size[rootP] > this._size[rootQ]) {
            this._parent[rootQ] = rootP;
            this._size[rootP] += this._size[rootQ];
        } else {
            this._parent[rootP] = rootQ;
            this._size[rootQ] += this._size[rootP];
        }

        this._count--;
    }

    connected(p: number, q: number): boolean {
        let rootP = this._find(p);
        let rootQ = this._find(q);

        return rootP === rootQ;
    }

    count(): number {
        return this._count;
    }
}