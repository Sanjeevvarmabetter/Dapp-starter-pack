const { ethers } = require("hardhat");

async function main() {
    const MyContract = await ethers.getContractFactory("contract function name");
    console.log("Deploying contract...");
    
    const mycontract = await MyContract.deploy();
    await mycontract.waitForDeployment();

    console.log("My contract deployed to : ",mycontract.target);

}

main()
    .then(()=> process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })