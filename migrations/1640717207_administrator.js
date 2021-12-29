const administrator = artifacts.require("Administrator");

module.exports = function( deployer) {

  deployer.deploy(administrator);
  // Use deployer to state migration tasks.
};
