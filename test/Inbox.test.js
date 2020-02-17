// checks values against each other
const assert = require('assert');

// local ethereum testnet
const ganache = require('ganache-cli')

// uppercase as it is a constructor
// used to create instances of the web3 lib
const Web3 = require('web3')

const web3 = new Web3(ganache.provider());


class Car {
    park() {
        return 'stopped';
    }

    drive() {
        return 'vroom';
    }
}

let c1

beforeEach(() => {
    console.log("beforeEach")
    c1 = new Car()
})

describe('Car class', () => {
    it('car stops', () => {
        console.log("stops")
        assert.equal(c1.park(), 'stopped');
    })

    it('car drives', () => {
        console.log("drives")
        assert.equal(c1.drive(), 'vroom');
    })
})