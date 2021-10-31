import * as fs from 'fs';

export abstract class DirectoryScraper {
    scanFiles(dirPath: string) {
        return fs
            .readdirSync(dirPath)
            .reduce<Record<string, unknown>>(
                (acc: Record<string, unknown>, fileName: string) => {
                    let filePath = `${dirPath}/${fileName}`;
                    if (this.isJSONFile(filePath)) {
                        acc[fileName] = this.readJSON(filePath);
                    } else {
                        acc[fileName] = this.readText(filePath);
                    }
                    return acc;
                },
                {}
            );
    }
    abstract isJSONFile(path: string): boolean;
    abstract readText(path: string): string;
    abstract readJSON(path: String): unknown;
}

export class FileReader extends DirectoryScraper {
    public isJSONFile(filePath: string): boolean {
        return filePath.endsWith('.json');
    }
    public readText(filePath: string): string {
        return fs.readFileSync(filePath, 'utf-8').toString();
    }
    public readJSON(filePath: string): unknown {
        return JSON.parse(fs.readFileSync(filePath, 'utf-8').toString());
    }
}

let fileReader = new FileReader();
let filesInfo = fileReader.scanFiles('./files');
console.log(filesInfo);
