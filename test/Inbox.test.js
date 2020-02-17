// checks values against each other
const assert = require('assert');

// local ethereum testnet
const ganache = require('ganache-cli')

// uppercase as it is a constructor
// used to create instances of the web3 lib
const Web3 = require('web3')

const web3 = new Web3(ganache.provider());

beforeEach(() => {
    // get list of all accounts
    // web3 calls are asynchronous
    web3.eth.getAccounts()
    .then(res => {
        console.log("beforeEach res : ", res)
    })
    .catch(err => {
        console.log("error fetching accounts")
    })

    // use one of those accounts
    // to deploy the contract

});

describe('Inbox', () => {
    it('deploys a contract', () => {
        console.log("working")

    });
});