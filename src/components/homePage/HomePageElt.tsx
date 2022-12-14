import React, { useEffect, useState } from "react";
import css from "./homePageElt.module.css";
import { determineClasses } from "./functions";
import { useDappContext } from "../../contexts/DappContext";
import { GiftCard } from "../elements/giftCard";
import GtAddCardButton from "../elements/buttons/gtAddCardButton/GtAddCardButton";
import GtCardButton from "../elements/buttons/gtCardButton/GtCardButton";

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-react-card-carousel-component
 */

const CardCarousel = () => {

    const { dappContextState, setCurrentCardFromData, getCardsAddressesList, hideEventData } = useDappContext();

    const [indexes, setIndexes] = useState({
        previousIndex: dappContextState.cardsDataList ? dappContextState.cardsDataList.length - 1 : 1,
        currentIndex: 0,
        nextIndex: 1
    });
    // This state is made to prevent cardCreationEvent to display
    const [trigger, setTrigger] = useState(true);
    const [firstRender, setFirstRender] = useState(true);
    const [cardsList, setCardsList] = useState<JSX.Element[] | null>([])

    const switchCardToDisplay = (dir: string) => {
        let newIndexes= {...indexes};
        if (dappContextState.cardsDataList) {
            if (dir === "Carte précédente") {
                if(newIndexes.currentIndex - 1 < 0){
                    newIndexes.previousIndex = 0;
                    newIndexes.currentIndex = dappContextState.cardsDataList.length - 1;
                    newIndexes.nextIndex = dappContextState.cardsDataList.length - 2;
                } else {
                    newIndexes.previousIndex = newIndexes.currentIndex;
                    newIndexes.currentIndex = newIndexes.currentIndex - 1;
                    newIndexes.nextIndex = newIndexes.currentIndex - 1 === -1 ? dappContextState.cardsDataList.length - 1 : newIndexes.currentIndex - 1;
                };
            } else {
                if(newIndexes.currentIndex + 1 > dappContextState.cardsDataList.length - 1){
                    newIndexes.previousIndex = dappContextState.cardsDataList.length - 1;
                    newIndexes.currentIndex = 0;
                    newIndexes.nextIndex = 1;
                } else {
                    newIndexes.previousIndex = newIndexes.currentIndex;
                    newIndexes.currentIndex = newIndexes.currentIndex + 1;
                    newIndexes.nextIndex = newIndexes.currentIndex + 1 === dappContextState.cardsDataList.length ? 0 : newIndexes.currentIndex + 1;
                };
            }
            setIndexes(newIndexes)
        }
    }
    
    useEffect(() => {
        if (dappContextState.cardsDataList && dappContextState.cardsDataList?.length > 0) {
            const newGiftCardsElementsList = dappContextState.cardsDataList?.map((card, index) => {
                const newLi = <li key={index} className={`${css.card} ${determineClasses(indexes, index)}`} >
                    <GiftCard key={card.address} address={card.address} contract={card.contract} title={card.title} description={card.description} creationDate={card.creationDate} goal={card.goal} creator={card.creator} funders={card.funders} beneficiary={card.beneficiary} status={card.status} releaseDate={card.releaseDate} coinsAmount={card.coinsAmount} cardDAOAddress={card.cardDAOAddress} />
                </li>
                return newLi
            })              
            newGiftCardsElementsList && setCardsList(newGiftCardsElementsList);   
            newGiftCardsElementsList && setCurrentCardFromData(dappContextState.cardsDataList[indexes.currentIndex]);  
            firstRender && hideEventData();
            setFirstRender(false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dappContextState.cardsDataList, indexes])

    useEffect(() => {
        getCardsAddressesList();        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    useEffect(() => {
        if (trigger) {
            dappContextState.cardsDataList?.map((card, index) => {
                indexes.currentIndex === index && setCurrentCardFromData(card);
                return null
            })   
            setTrigger(false)
        } else {
            dappContextState.cardsDataList?.map((card, index) => {
                indexes.currentIndex === index && setCurrentCardFromData(card);
                return null
            })              
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [indexes])    

    return (
        <>
            {
                cardsList && cardsList.length === 0 && <GtAddCardButton />
            }
            {
                cardsList && cardsList.length === 1 && <div className="w-full h-full flexJIC flex-col gap-6 relative">
                    <ul className="list-none flex items-center flex-col h-52 mx-24 pr-16 mb-56 my-auto relative">
                        {   
                            cardsList
                        }
                    </ul>
                    <div className="absolute top-96">
                        <GtAddCardButton />
                    </div>
                </div>
            }
            {
                cardsList && cardsList.length > 1 && <div className="w-full h-full flexJIC flex-col gap-6 relative">
                    <ul className="list-none p-0 flex items-center flex-col h-52 mx-24 pr-16 mt-10 my-auto relative">
                        {   
                            cardsList
                        }
                    </ul>
                    <div className="flexJIC gap-12 absolute top-[21rem]">
                        <GtCardButton title="Carte précédente" css="btnGray" func={switchCardToDisplay} />
                        <GtAddCardButton />
                        <GtCardButton title="Carte suivante" css="btnGray" func={switchCardToDisplay} />
                    </div>
                 </div>
            }
        </>
    );
};

export default CardCarousel;