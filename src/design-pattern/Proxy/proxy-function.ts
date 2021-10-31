function loadImage(path: string) {
    console.log('loading image from path : ' + path);
    return {
        path: path,
        image: new Image(/* fake image from path */),
    };
}

function createMementoLoader(loader: (path: string) => any) {
    const map: Record<string, any> = {};
    return function (path: string) {
        if (path in map) {
            console.log('No need to load from fs for : ' + path);
            return map[path];
        }

        const image = loader(path);
        map[path] = image;
        return image;
    };
}

let loadImageWithMem = createMementoLoader(loadImage);
