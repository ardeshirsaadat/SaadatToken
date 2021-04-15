var SampleToken = artifacts.require("SaadatToken");

module.exports = function(deployer) {
  deployer.deploy(SampleToken, "SaadatToken", "SAA", 18, 1000);
};