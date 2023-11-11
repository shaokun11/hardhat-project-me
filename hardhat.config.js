require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    m1: {
      url: "https://mevm.movementlabs.xyz/v1/",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 336,
      gasPrice: "auto",
    },
  }
};
