export default class Item {
    constructor(name, owner, history, inPlay = true) {
        this.name = name;
        this.owner = owner;
        this.history = history;
        this.inPlay = inPlay;
    }
}