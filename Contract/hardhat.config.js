require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ignition");
require("@nomicfoundation/hardhat-verify");
const dotenv = require("dotenv");


const purl = "https://polygon-amoy.g.alchemy.com/v2/7024T6qBanm0N3D6FwS-FOKJX-PtHOZd";
const user = "12ceba40c0137a9de3ad367aa0fd9e49257f99f956800a0893652c199bf1659b";
const key = "https://www.oklink.com/acount/ca169975-9a85-4dc6-bc37-e4ca73c2fde9";
dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks:{
    polygonAmoy:{
      url: purl,
      accounts:[user],
    }
  },
  etherscan:{
    apiKey: "NINNWSUIRAT7Y5JXJK1CVAZER75UWD43CP",
  },
  sourcify:{
    enabled :true
  }
  
};
