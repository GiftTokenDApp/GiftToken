import React, { useEffect, useState } from 'react'
import { ethers } from "ethers";
import { GiftNetwork__factory as GiftNetworkContractFactory} from '../typechain-types/factories/contracts/GiftNetwork__factory';

let FactoryAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

const DAppComponent = () => {

    const [cardAddress, setCardAddress] = useState(null);
    const [nb, setNb] = useState(0)
    const [error, setError] = useState('');
  
    async function getAddress() {
      if(typeof window.ethereum !== 'undefined') {
        const accounts = await window.ethereum.request({method:'eth_requestAccounts'});
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(FactoryAddress, GiftNetworkContractFactory.abi, provider);        
        try {
            const value = await contract.links(accounts[0],nb);
            console.log(value.toString());
            setCardAddress(value);
        } catch (err) {
            err && setError(err.toString());
        }
      }
    }    

    async function createCard(_title: string, _description: string, _goalToBeReleased: number, _dateToBeReleased: number, _beneficiary: string) {
        if(typeof window.ethereum !== 'undefined') {
            const accounts = await window.ethereum.request({method:'eth_requestAccounts'});
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const contract = new ethers.Contract(FactoryAddress, GiftNetworkContractFactory.abi, provider);   
            const signer = provider.getSigner();
            try {
                const trx = {
                    from: accounts[0],
                    value: ethers.utils.parseEther("1"),
                }
                const transaction = await contract.connect(signer).createCard(_title, _description, _goalToBeReleased, _dateToBeReleased, _beneficiary, trx);               
                await transaction.wait();
                console.log('Carté créée.');
                setNb(nb => nb + 1);
            } catch (err) {
                err && setError(err.toString());
            }
        }
    }
    
  useEffect(() => {
    getAddress()
  }, [])
  
  useEffect(() => {
    console.log(cardAddress);
  }, [cardAddress])

    return (
        <div className='flexJIC gap-12 flex-col'>
            <div>Carte déployée à l'address {cardAddress}</div>
            <button className='w-48 px-4 py-2 bg-gtYellow rounded-3xl' onClick={()=>getAddress()}>Dernière carte créée</button>
            <button className='w-48 px-4 py-2 bg-gtOrange rounded-3xl' onClick={()=>createCard(`Nouvelle carte ${nb}`,`Une nouvelle carte numéro ${nb}`,10,0,"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266")}>Créer carte</button>
        </div>
    )
}

export default DAppComponent