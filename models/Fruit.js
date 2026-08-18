const fruits = require("./fruits.json");

class Fruit {
    constructor(fruit) {
        this.genus = fruit.genus;
        this.name = fruit.name;
        this.id = fruit.id;
        this.family = fruit.family;
        this.order = fruit.order;
        this.nutritions = fruit.nutritions;
    }

    update(data) {
        const updatedFruit = fruits.find(f => f.name.toLowerCase() == this.name.toLowerCase())

        if (updatedFruit) {
            updatedFruit.name = data.name
            updatedFruit.family = data.family
            return new Fruit(updatedFruit)
        } else {
            throw "The fruit doesn't exist"
        }
    }

    remove() {
        const targetAqcuired = fruits.find(f => f.name.toLowerCase() == this.name.toLowerCase())

        if (targetAqcuired) {
            fruits.splice(fruits.indexOf(targetAqcuired), 1)
            //delete fruits[fruits.indexOf(targetAqcuired)]
            return targetAqcuired
        } else {
            throw "the fruit doesn't exist"
        }
    }

    static showAll() {
        return fruits.map(q => new Fruit(q));
    }

    static show(name) {
        const fruit = fruits.find(f => f.name.toLowerCase() == name)
        if(fruit) {
            return new Fruit(fruit)
        } else {
            throw `The fruit ${name} does not exist`
        }
    }

    static showGene(gene) {
        const fruit = fruits.find(f => f.genus.toLowerCase() == gene)
        if(fruit) {
            return new Fruit(fruit)
        } else {
            throw `The fruit with genus: ${gene} does not exist`
        }
    }

    static create(newFruit) {
        const fruit = fruits.find(f => f.name.toLowerCase() == newFruit.name.toLowerCase())

        if (fruit) {
            throw "The fruit already exists"
        } else {
            newFruit["id"] = fruits.push(newFruit)
            return new Fruit(newFruit)
        }
    }

    static nuke() {
        fruits.splice(0)
    }

}

module.exports = Fruit;