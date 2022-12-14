const defaultEthBalance = '1000';

export const accounts = {
    account0: {privateKey:'0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80', balance:defaultEthBalance},
    account1: {privateKey:'0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d', balance:defaultEthBalance},
    account2: {privateKey:'0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a', balance:defaultEthBalance},
    account3: {privateKey:'0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6', balance:defaultEthBalance},
    account4: {privateKey:'0x47e179ec197488593b187f80a00eb0da91f1b9d0b13f8733639f19c30a34926a', balance:defaultEthBalance},
}; 

export const addressZero = '0x0000000000000000000000000000000000000000';

export const re = new RegExp(/0x[a-fA-F0-9]{40}/);