export class Messenger {
    private port: number = 3000;
    constructor(port) {
        this.port = port;
    }
    print(): void {
        console.log(this.port);
    }
}

export const str: string = "Hello world";
console.log(str);
