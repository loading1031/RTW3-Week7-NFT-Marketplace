require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config(); // dotenv 가져오기

const account1 = process.env.REACT_APP_ALCHEMY_API_URL;
const fs = require('fs');
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    // goerli: {
    //   url: "<YOUR_ALCHEMY_URL>",
    //   accounts: [ "<YOUR_PRIVATE_KEY>" ]
    // },
    amoy: {
      url: account1,
      accounts: [process.env.REACT_APP_PRIVATE_KEY]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};