const sqoinContract = artifacts.require("SqoinContract");

module.exports = function( deployer ) {

  deployer.deploy(sqoinContract);
  // Use deployer to state migration tasks.
};
