# Gift Token

## Contenu de la Dapp

Le projet courant contient le contrat `GiftFactory.sol`\
Ce dernier permet de créer le contrat `GiftNetwork.sol` qui gère la partie réseau social\
De plus le contrat `GiftFactory.sol` permet de générer les cartes cadeaux qui sont respectivement des contrats `GiftCard.sol`\
Le contrat `GiftCard.sol` quand à lui génère un contrat `GiftDAO.sol` qui permet de créer la micro-DAO d'une carte.
___________________________________________________________________________________________________________________________________________
## Prérequis

Renommer le fichier `env` en `.env`.
Renseigner votre clé infura.

Pour travailler en local :
Renseigner votre clé privée Metamask dans le paramètre `PRIVATE_KEY`
___________________________________________________________________________________________________________________________________________
## Utilisation

1. `npm install`
2. `npm run node`
3. `npm run compile`
4. `npm run deploy-dev`
5. Copier l'adresse du contrat dans un paramètre `REACT_APP_CONTRACT_ADDRESS` dans le fichier `.env`
6. `npm run start`