// type Context = Record<string, any>;

function JwtHandler(ctx: Context) {
    ctx.uid = 1;
    console.log('jwt authorization success');
    ctx.next();
}

function PassiveHandler(ctx: Context) {
    if (!ctx.uid) {
        return;
    }
    console.log('passive success');
    ctx.next();
}

class App {
    private ctx: Context = new Context();
    use(handler: Handler) {
        this.ctx.use(handler);
        return this;
    }

    init() {
        this.ctx.next();
    }
}

type Handler = (ctx: Context) => void;

class Context {
    private _id = 0;
    private handlers: Handler[] = [];
    [propName: string]: any;
    next() {
        if (this._id < this.handlers.length) {
            this.handlers[this._id](this);
            this._id++;
        }
    }
    use(handler: Handler) {
        this.handlers.push(handler);
    }
}

let app = new App();

app.use(JwtHandler).use(PassiveHandler);
app.init();
