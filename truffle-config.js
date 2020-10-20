require('babel-register');
require('babel-polyfill');
require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider');
const kovanUrl = process.env.KOVAN_URL;
const privateKey = process.env.PRIVATE_KEY

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    kovan: {
      provider: function() {
        return new HDWalletProvider(
          [privateKey],
          kovanUrl
        )
      },
      network_id: 42
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: "0.6.6",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
