import React, { useEffect, useState } from "react";
import css from "./homePageElt.module.css";
import { giftCardsData } from "./data";
import { GiftCard } from "../giftCard";
import GtCardButton from "../buttons/gtCardButton/GtCardButton";
import { determineClasses } from "./functions";
import { useMainContext } from "../../contexts/MainContext";
import GtAddCardButton from "../buttons/gtAddCardButton/GtAddCardButton";
import { useDappContext } from "../../contexts/DappContext";

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-react-card-carousel-component
 */

const CardCarousel = () => {

    const { mainContextState , updateCurrentCard, loadCards } = useMainContext();
    const { dappContextState } = useDappContext();
    const [cardAddressesList, setCardAddressesList] = useState<string[]>([]);

    const [indexes, setIndexes] = useState({
        previousIndex: giftCardsData.length - 1,
        currentIndex: 0,
        nextIndex: 1
    });
    const [trigger, setTrigger] = useState(true);

    const switchCardToDisplay = (dir: string) => {
        let newIndexes= {...indexes};
        if (dir === "Carte précédente") {
            if(newIndexes.currentIndex - 1 < 0){
                newIndexes.previousIndex = 0;
                newIndexes.currentIndex = giftCardsData.length - 1;
                newIndexes.nextIndex = giftCardsData.length - 2;
            } else {
                newIndexes.previousIndex = newIndexes.currentIndex;
                newIndexes.currentIndex = newIndexes.currentIndex - 1;
                newIndexes.nextIndex = newIndexes.currentIndex - 1 === -1 ? giftCardsData.length - 1 : newIndexes.currentIndex - 1;
            };
        } else {
            if(newIndexes.currentIndex + 1 > giftCardsData.length - 1){
                newIndexes.previousIndex = giftCardsData.length - 1;
                newIndexes.currentIndex = 0;
                newIndexes.nextIndex = 1;
            } else {
                newIndexes.previousIndex = newIndexes.currentIndex;
                newIndexes.currentIndex = newIndexes.currentIndex + 1;
                newIndexes.nextIndex = newIndexes.currentIndex + 1 === giftCardsData.length ? 0 : newIndexes.currentIndex + 1;
            };
        }
        setIndexes(newIndexes)
    }

    useEffect(() => {
        if (trigger) {
            giftCardsData.map((card, index) => {
                indexes.currentIndex === index && updateCurrentCard(card);
                return null
            })   
            setTrigger(false)
        } else {
            mainContextState?.cards?.map((card, index) => {
                indexes.currentIndex === index && updateCurrentCard(card);
                return null
            })              
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [indexes])

    useEffect(() => {
        trigger ? giftCardsData && loadCards(giftCardsData) : mainContextState?.cards && loadCards(mainContextState.cards)          
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [giftCardsData])
    
    const GiftCardsElementsList = cardAddressesList?.map((card, index) => {
        const newLi = <li key={index} className={`${css.card} ${determineClasses(indexes, index)}`} >
            <GiftCard key={card} index={giftCardsData[0].index} address={card} title={giftCardsData[0].title} description={giftCardsData[0].description} coinsAmount={giftCardsData[0].coinsAmount} creator={giftCardsData[0].creator} funders={giftCardsData[0].funders} beneficiary={giftCardsData[0].beneficiary} releaseDate={giftCardsData[0].releaseDate} />
        </li>
        return newLi
    })
    // const GiftCardsElementsList = giftCardsData.map((card, index) => {
    //     const newLi = <li key={index} className={`${css.card} ${determineClasses(indexes, index)}`} >
    //         <GiftCard key={card.address} index={card.index} address={card.address} title={card.title} description={card.description} coinsAmount={card.coinsAmount} creator={card.creator} funders={card.funders} beneficiary={card.beneficiary} releaseDate={card.releaseDate} />
    //     </li>
    //     return newLi
    // })

    useEffect(() => {
        dappContextState.cardsList && setCardAddressesList(dappContextState.cardsList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dappContextState.cardsList])
    

    return (
        <div className="w-full h-full flexJIC flex-col gap-6 relative">
            {/* {  
                dappContextState.cardsList
            } */}
            { GiftCardsElementsList && GiftCardsElementsList[0] ? <>
                <ul className="list-none p-0 flex items-center flex-col h-52 mx-24 pr-16 my-auto relative">
                    {   
                        GiftCardsElementsList
                    }
                </ul>
                {
                    GiftCardsElementsList && GiftCardsElementsList.length > 1 && <div className="flexJIC gap-12">
                        <GtCardButton title="Carte précédente" css="btnGray" func={switchCardToDisplay} />
                        <GtCardButton title="Carte suivante" css="btnGray" func={switchCardToDisplay} />
                    </div>
                }
            </> : <GtAddCardButton />
            }
        </div>
    );
};

export default CardCarousel;
