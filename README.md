# 以太坊地址钱包靓号生成器
[English](https://github.com/BitBitKing/Wallet-Generate/blob/main/README.EN.md) | 简体中文

这是一个简单的BIP39以太坊地址钱包靓号生成器，可以指定位数和利用正则（比如结尾888）来生成靓号、助记词和私钥。

## 安装
- 先安装NodeJs，本地测试v20+没问题，低版本没测试 [NodeJs官网](https://nodejs.org/en)
- git clone 本项目

## 用法
- cd 进入到本项目目录
- `npm install`
- 修改 wallet-generate.js 相应配置
- node ./wallet-generate.js 或 npm run start 运行等待生成 output.txt

## 选项
- Provider_API 需要自己申请, 形如: ` https://mainnet.infura.io/v3/xxxxxx`
- 正则表达式，比如这里是88结尾，自己调节即可，不建议太多位。`return /88$/.test(input)` 
- 生成数量，同样不建议太多，够用就行 `numberOfSpecialData = 10; `


## 贡献
欢迎大家对本项目做出贡献！欢迎 PR & STAR

## 许可证
本项目采用 MIT 许可证。