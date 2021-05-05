var ARZ = artifacts.require("ARZ");

module.exports = async (deployer, network, accounts) => {
  await deployer.deploy(ARZ);
  token = await ARZ.deployed();
  console.log("ARZ token.address", token.address, "\n\n");  
};
