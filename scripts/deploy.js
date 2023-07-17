const { ethers } = require("hardhat");


async function main() {
  const FeeContract = await ethers.getContractFactory("FeeContract");
  const feeWallet = "0x989F603932F082506A7414A296d54EbE4Aeb173C";
  const taxRate = 5;
  const additionalCharge = 2;
  const conversionRate = 100;

  

  const feeContract = await FeeContract.deploy(
    feeWallet,
    taxRate,
    additionalCharge,
    conversionRate
    
  );

  await feeContract.deployed();

  console.log("FeeContract deployed to:", feeContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});
