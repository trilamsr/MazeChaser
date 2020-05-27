export default class Timer {
    constructor({callBack, delay}) {
        this.id = setTimeout(callBack, delay);
        this.callBack = callBack;
        this.delay = delay;
        this.remain = delay;
        this.start = Date.now();
    }

    pause = () => {
        clearTimeout(this.id);
        this.remain -= Date.now()-this.start;
    }

    resume = () => {
        this.start = Date.now();
        clearTimeout(this.id)
        this.id = setTimeout(this.callBack, this.remain)
    }

    destroy = () => {
        clearTimeout(this.id)
    }
}