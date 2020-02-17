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

describe('Car class', () => {
    it('car stops', () => {
        const c1 = new Car()
        assert.equal(c1.park(), 'stopped');
    })

    it('car drives', () => {
        const c1 = new Car()
        assert.equal(c1.drive(), 'vroom');
    })
})