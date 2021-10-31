function kmp(s: string, p: string) {
    let tar = 0,    // idx in pattern
        pos = 0;    // idx in string
    let nxt = buildNext(p);
    while (pos < s.length) {
        if (s[pos] === s[tar]) {
            tar++;
            pos++;
        } else if (pos) {
            pos = nxt[pos - 1];
        } else {
            tar++;
        }

        if (pos === p.length) {
            console.log(tar - pos);
            pos = nxt[pos - 1];
        }
    }
}

