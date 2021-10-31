import * as fs from 'fs';
interface FileReader {
    isJSONFile(path: string): boolean;
    readText(path: string): string;
    readJSON(path: String): unknown;
}

export default class DirectoryScraper {
    constructor(private fileReader: FileReader) {}
    scanFiles(dirPath: string) {
        return fs
            .readdirSync(dirPath)
            .reduce<Record<string, unknown>>(
                (acc: Record<string, unknown>, fileName: string) => {
                    let filePath = `${dirPath}/${fileName}`;
                    if (this.fileReader.isJSONFile(filePath)) {
                        acc[fileName] = this.fileReader.readJSON(filePath);
                    } else {
                        acc[fileName] = this.fileReader.readText(filePath);
                    }
                    return acc;
                },
                {}
            );
    }
}

export class CommonFileReader implements FileReader {
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

let scraper = new DirectoryScraper(new CommonFileReader());
let filesInfo = scraper.scanFiles('./files');
console.log(filesInfo);
