require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside skull drift return saddle hour hunt knife broken tenant'; 
let testAccounts = [
"0x90abaeddaa5b5407c8e5da90adf0d229be2c9944d3a3c3136284d36d02e98352",
"0x37861ec7178db83e7d5d5b03b2369e8955ce320f01825a08bf94c1a472f7447b",
"0x4b2d43045bd05af9c32a0ce341581644e59f022158a50e240ffaade2284b0daa",
"0x4bad21f562379aabb7192cecbae597b7142212a6c612624fa172497d0c24f861",
"0x2e508fd97683cffcfe1c77eaf08dcbcdb81477577c97f8df3b7af62ad6f387cb",
"0x1ed6fd9f6ec2c6c3dac35a44d27ecf8ec94fc5c9103f70dc25d062a520b5282c",
"0x967da922887f492f51a74b4958956d409442936a6b545f7a81a270792402d740",
"0xb19fccaaa4a4fd599e44d659f8c078039431caa757ec977d2176b6d1f13898b0",
"0x2f51c93d2be2d9dd94a5e4094e2495b4cd48e71f3f95cbb30e48a92fc271dfaf",
"0x3bf07ef22b58168513480149029fad40900a9ddd7f3131d00c022c3aa6aa465a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

