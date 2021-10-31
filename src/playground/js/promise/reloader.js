function createReloaderTester() {
    let count = 0;
    return (fakeUrl) => {
        return count++ < 3
            ? Promise.reject(`第${count}次失败！`)
            : Promise.resolve(`加载成功！`);
    };
}

async function reLoader(url, loader, n, delay) {
    while (true) {
        try {
            return await loader(url).then(n--);
        } catch (e) {
            if (n === 0) throw e;
            await sleep(delay);
        }
    }
}

function sleep(timeout) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, timeout);
    });
}

let res = await reLoader(urls[0], createReloaderTester(), 5, 3000);
console.log(res);
