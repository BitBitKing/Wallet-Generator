# Ethereum Address Wallet Generator
English | [简体中文](https://github.com/BitBitKing/Wallet-Generate/blob/main/README.md)


This is a simple BIP39 Ethereum address wallet generator, allowing for specifying the length and using regex (like ending in 888) to generate beautiful addresses.

# Installation

- Install NodeJs first, locally tested with v20+, lower versions not tested [NodeJs](https://nodejs.org/en)

- git clone this project

# Usage

- cd into the project directory

- `npm install`

- Modify the relevant configurations in wallet-generate.js

- run `node ./wallet-generate.js` or `npm run start` and wait for the generation of output.txt

# Options
- Provider_API: you need to apply it yourself, like this:  https://mainnet.infura.io/v3/xxxxxx

- Regex: for example, here it's ending with 88, adjust to your own preference, not recommended for too many digits. `return /88$/.test(input)`

- Number of generations: `numberOfSpecialData = 10; `

# Contributions
Contributions are very welcome! PRs & STARs are welcomed

# License
This project is licensed under the MIT License.