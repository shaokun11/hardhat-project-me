// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
    const lockAddress = "<lockAddress>";
    const deployer = await hre.ethers.getSigner();
    const lockedAmount = await hre.ethers.provider.getBalance(lockAddress);
    const currentBalance = await hre.ethers.provider.getBalance.getBalance(deployer.address);
    console.log(
        `Current balance of ${deployer.address} is ${hre.ethers.utils.formatEther(currentBalance)}ETH`
    );
    const lock = hre.ethers.getContractAt("Lock", lockAddress);

    const tx = await lock.withdraw();
    await tx.wait();

    console.log(
        `Withdrawn ${hre.ethers.utils.formatEther(lockedAmount)}ETH from ${lockAddress} to ${deployer.address}`
    );

    const posBalance = await hre.ethers.provider.getBalance.getBalance(deployer.address);

    console.log(
        `Balance after withdrawal of ${deployer.address} is ${hre.ethers.utils.formatEther(posBalance)}ETH`
    );
    console.log(`sum of previous balance and withdrawn value: ${currentBalance + lockedAmount}`);
    
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
