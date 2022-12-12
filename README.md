# Gift Token

Ceci constitue le dernier projet de la formation "Développeur Blockchain" d'Alyra. Nous avons été deux développeurs à travailler dessus. 
Techniquement, nous avons opté pour Hardhat et React.
Concernant la partie contrat, nous avons eu recours aux contrats type Ownable proposées par OpenZeppelin.
Concernant l'interface utilisateur, nous avons intégré des solutions comme React-Router-Dom, React-Hook-from / Yup, Framer-Motion et TailwindCss.

## Contenu de la Dapp

Le projet courant contient le contrat `GiftFactory.sol`\
Ce dernier permet de créer le contrat `GiftNetwork.sol` qui gère la partie réseau social\
De plus, le contrat `GiftFactory.sol` permet de générer les cartes cadeaux qui sont respectivement des contrats `GiftCard.sol`\
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

___________________________________________________________________________________________________________________________________________
## Couverture de tests

Nous avons choisi de privilégier la couverture de test à 100% sur le contrat principal (GiftFactory). Par manque de temps, nous n'avons pas pu totalement couvrir l'application.
Voici le rapport provenant de Solidity-Covarage :

![image](https://user-images.githubusercontent.com/42751827/207001985-f3012b7d-4ae8-4db1-bba9-ca68e0d92be0.png)

![image](https://user-images.githubusercontent.com/42751827/207001879-349fcd5e-7fc7-43c9-bf32-2333352bd903.png)
