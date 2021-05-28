export default class Post {
    constructor(title, msg) {
        this.title = title;
        this.msg = msg;
        this.date = new Date();
    }

    toString() {
        return JSON.stringify({
            title: this.title,
            date: this.date,
            msg: this.msg
        }, null, 2)
    }

    get UppercaseTitle() {
        return this.title.toUpperCase();
    }
}