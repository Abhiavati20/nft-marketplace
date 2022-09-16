require('@nomicfoundation/hardhat-toolbox');
const fs = require('fs');
const privateKey = fs.readFileSync('.secret').toString();
module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1337,
    },
    // mumbai : {
    //   url :
    // },
    mainnet: {
      url: 'https://mainnet.infura.io/v3/e5ad0612dd344297ba6430c6e4952a1d',
      accounts: [privateKey],
    },
  },
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
