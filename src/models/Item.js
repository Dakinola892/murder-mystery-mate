export default class Item {
    constructor(id, name, owner, history = [], inPlay = true) {
        this.id = id;
        this.name = name;
        this.owner = owner;
        this.history = history;
        this.inPlay = inPlay;
    }
}