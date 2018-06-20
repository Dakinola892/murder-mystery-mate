export default class Character {
    constructor(id, name, items = [], kills = [], protects = [], silences = [], isAlive = true) {
        this.id = id;
        this.name = name;
        this.items = items;
        this.kills = kills;
        this.protects = protects;
        this.silences = silences;
        this.isAlive = isAlive;
    }

    static basic(character) {
        const basicCharacter = {
            id: character.id,
            name: character.name
        };
        return basicCharacter;
    }
}