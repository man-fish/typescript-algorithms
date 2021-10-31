// 有8个图片资源的url，已经存储在数组urls中。
// urls类似于['https://image1.png', 'https://image2.png', ....]
// 而且已经有一个函数function loadImg，输入一个url链接，返回一个Promise，该Promise在图片下载完成的时候resolve，下载失败则reject。
// 但有一个要求，任何时刻同时下载的链接数量不可以超过3个。
// 请写一段代码实现这个需求，要求尽可能快速地将所有图片下载完成。

var urls = [
    'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting1.png',
    'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting2.png',
    'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting3.png',
    'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting4.png',
    'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting5.png',
    'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn6.png',
    'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn7.png',
    'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn8.png',
];

function loadImg(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = function () {
            console.log('一张图片加载完成');
            resolve(img);
        };
        img.onerror = function () {
            reject(new Error('Could not load image at' + url));
        };
        img.src = url;
    });
}

async function limitedLoader(urls, loader, n) {
    // 初始化请求池，结果池；
    let loaderPool = [],
        results = [];
    while (urls.length) {
        // 无限循环读取 urls；
        if (loaderPool.length < n) {
            // 请求池有剩余位置，将请求添加到请求池里。
            let url = urls.pop();
            console.log(
                '当前请求url：',
                url,
                '请求池已用空间：',
                loaderPool.length
            );
            let p = loader(url).then((res) => {
                results.push(res);
                // 请求结束将请求从请求池里移除；
                loaderPool.splice(loaderPool.indexOf(p), 1);
            });
            loaderPool.push(p);
        } else {
            // 等待请求池有余位；
            await Promise.race(loaderPool);
        }
    }
    return results;
}

limitedLoader(urls, loadImg, 3);
