const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");



module.exports = buildModule("Paypalmodule", (m) => {
  
  const PaypalContract = m.contract("Paypal");

  return { PaypalContract };
});
