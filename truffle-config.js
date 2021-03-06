const fs = require('fs');
const HDWalletProvider = require('@truffle/hdwallet-provider');

const mnemonic = fs.readFileSync(".secret").toString().trim();
 if (!mnemonic || mnemonic.split(' ').length !== 12) {
  console.log('unable to retrieve mnemonic from .secret');
}

module.exports = {
  networks: {
    develop: {
      port: 8545,
      network_id: "1337",
    },
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
      skipDryRun: true,
    },    
    goerli: {
      //https://twitter.com/Mudit__Gupta/status/1378979226590670852
      provider: () => new HDWalletProvider({
        mnemonic: { phrase: mnemonic },
        //https://twitter.com/Mudit__Gupta/status/1378979226590670852
        //providerOrUrl: 'https://rpc.goerli.mudit.blog/',
        providerOrUrl: 'https://goerli-rpc.mudit.blog/',  //Only for students
        numberOfAddresses: 10,
        pollingInterval: 10e3,
        chainId: 5,
      }),
      network_id: 5,
      gasPrice: 3e9,
      networkCheckTimeout: 36e5, //1h = 36e5, 10min = 6e5
      deploymentPollingInterval: 10e3,  //10s = 10e3, default is 4e3
      skipDryRun: true,
      //confirmations: 2,
      timeoutBlocks: 100,      
    }, 
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {  },
  
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.4",
    }
  }
}