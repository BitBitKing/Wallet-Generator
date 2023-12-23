const fs = require('fs');
const { ethers } = require('ethers');
const bip39 = require('bip39');

// 连接到以太坊节点
const provider = new ethers.providers.StaticJsonRpcProvider('Provider_API');

// 生成助记词和私钥
function generateMnemonicAndPrivateKey() {
  const mnemonic = bip39.generateMnemonic();
  const wallet = ethers.Wallet.fromMnemonic(mnemonic);
  const privateKey = wallet.privateKey;
  return { mnemonic, privateKey };
}

// 生成以太坊地址
function generateEthAddress(privateKey) {
  const wallet = new ethers.Wallet(privateKey, provider);
  return wallet.address;
}

// 检查是否以 "888" 结尾
function endsWith888(input) {
  return /88$/.test(input);
}

// 保存地址、助记词和私钥到文件
function saveToFile(data) {
  fs.writeFile('output.txt', data.join('\n'), (err) => {
    if (err) {
      console.error('无法保存文件:', err);
      return;
    }
    console.log('地址、助记词和私钥已保存到文件 output.txt');
  });
}

// 生成靓号地址、助记词和私钥
function generateSpecialData(count) {
  const specialData = [];
  let i = 0;

  while (specialData.length < count) {
    const { mnemonic, privateKey } = generateMnemonicAndPrivateKey();
    const address = generateEthAddress(privateKey);
    if (endsWith888(address)) {
      specialData.push(`Address: ${address}`, `Mnemonic: ${mnemonic}`, `Private Key: ${privateKey}`, '');
      i++;
    }
  }

  return specialData;
}

// 生成指定数量的靓号地址、助记词和私钥
const numberOfSpecialData = 10;
const specialData = generateSpecialData(numberOfSpecialData);

// 保存靓号地址、助记词和私钥到文件
saveToFile(specialData);