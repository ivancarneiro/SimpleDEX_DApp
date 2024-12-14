const { ethers } = require("hardhat");

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    // Deploy TokenA
    const tokenADeployment = await deploy("TokenA", {
        from: deployer,
        args: [], // Sin argumentos, usa constructor por defecto
        log: true,
    });

    // Deploy TokenB
    const tokenBDeployment = await deploy("TokenB", {
        from: deployer,
        args: [], // Sin argumentos, usa constructor por defecto
        log: true,
    });

    // Deploy SimpleDEX con las direcciones de TokenA y TokenB
    const simpleDEXDeployment = await deploy("SimpleDEX", {
        from: deployer,
        args: [
            tokenADeployment.address,
            tokenBDeployment.address
        ],
        log: true,
    });
};

module.exports.tags = ["TokenA", "TokenB", "SimpleDEX"];