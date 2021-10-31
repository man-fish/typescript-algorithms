import * as fs from 'fs';
interface FileReader {
    isJSONFile(path: string): boolean;
    readText(path: string): string;
    readJSON(path: String): unknown;
}

export const createScrapeDirectory =
    (fileReader: FileReader) => (dirPath: string) => {
        return fs
            .readdirSync(dirPath)
            .reduce<Record<string, unknown>>(
                (acc: Record<string, unknown>, fileName: string) => {
                    let filePath = `${dirPath}/${fileName}`;
                    if (fileReader.isJSONFile(filePath)) {
                        acc[fileName] = fileReader.readJSON(filePath);
                    } else {
                        acc[fileName] = fileReader.readText(filePath);
                    }
                    return acc;
                },
                {}
            );
    };

export const fileReader: FileReader = {
    isJSONFile(filePath: string): boolean {
        return filePath.endsWith('.json');
    },
    readText(filePath: string): string {
        return fs.readFileSync(filePath, 'utf-8').toString();
    },
    readJSON(filePath: string): unknown {
        return JSON.parse(fs.readFileSync(filePath, 'utf-8').toString());
    },
};

let scrapeDir = createScrapeDirectory(fileReader);
let filesInfo = scrapeDir('./files');
console.log(filesInfo);
