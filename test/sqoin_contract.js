const SqoinContract = artifacts.require("SqoinContract");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("SqoinContract", function (/* accounts */) {
  it("should assert true", async function () {
    let s = await SqoinContract.deployed();
    let hello = await s.sayHello();
    assert.equal(hello , "Hello Sqoin" , "Answer must be Hello Sqoin");

    return assert.isTrue(true);
  });
});
