require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom slab green rare remind history inflict nation fold sentence'; 
let testAccounts = [
"0xc29f34fb2b1e7514f1ca88beea1abc37c6639fb8e9b817161a9ba684ec3b1a41",
"0x8673e672d1477bc7b5427c622cc351ae3f47ed2bc31c673c25eec414bb506885",
"0xd48c6fc0012b8a4600eba2ca3067142c8433ec0f54f73e51611ab4349b37bfc3",
"0x08602f8706e9cf1cb042c35a0ac3d8734470903d5d6b4eff984a822f9ffc1f89",
"0x201bec5d7356ca48f5cdc89647ff503ddabfccb8f712da02f522956c4f58b327",
"0x055a4837347b8d82fba875807eba2bbe44531d2843f0d859668ecc910fb27df4",
"0x238fd4f69bc91b7570b48a159579013147f3832094daa830675e09792a92b791",
"0x4b6d7aa85d0ea1880868d4bf107096b86c228d3ed8ca4afe9e1daed4516b2a7d",
"0x7f9eeafe5f93f4d67b5852bf2161f354258249303320e78c74bc78c391064570",
"0x58ddfbdc6329e2cb40247dacea82a6c2395fa3779c54146ef1e7f6566025b3b5"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

