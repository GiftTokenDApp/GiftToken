import React, { useEffect, useState } from "react";
import css from "./homePageElt.module.css";
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

    const { mainContextState } = useMainContext();
    const { dappContextState } = useDappContext();

    // const [indexes, setIndexes] = useState({
    //     previousIndex: giftCardsData.length - 1,
    //     currentIndex: 0,
    //     nextIndex: 1
    // });
    // const [trigger, setTrigger] = useState(true);

    // const switchCardToDisplay = (dir: string) => {
    //     let newIndexes= {...indexes};
    //     if (dappContextState.cardsDataList) {
    //         if (dir === "Carte précédente") {
    //             if(newIndexes.currentIndex - 1 < 0){
    //                 newIndexes.previousIndex = 0;
    //                 newIndexes.currentIndex = dappContextState.cardsDataList.length - 1;
    //                 newIndexes.nextIndex = dappContextState.cardsDataList.length - 2;
    //             } else {
    //                 newIndexes.previousIndex = newIndexes.currentIndex;
    //                 newIndexes.currentIndex = newIndexes.currentIndex - 1;
    //                 newIndexes.nextIndex = newIndexes.currentIndex - 1 === -1 ? dappContextState.cardsDataList.length - 1 : newIndexes.currentIndex - 1;
    //             };
    //         } else {
    //             if(newIndexes.currentIndex + 1 > dappContextState.cardsDataList.length - 1){
    //                 newIndexes.previousIndex = dappContextState.cardsDataList.length - 1;
    //                 newIndexes.currentIndex = 0;
    //                 newIndexes.nextIndex = 1;
    //             } else {
    //                 newIndexes.previousIndex = newIndexes.currentIndex;
    //                 newIndexes.currentIndex = newIndexes.currentIndex + 1;
    //                 newIndexes.nextIndex = newIndexes.currentIndex + 1 === dappContextState.cardsDataList.length ? 0 : newIndexes.currentIndex + 1;
    //             };
    //         }
    //         setIndexes(newIndexes)
    //     }
    // }

    // useEffect(() => {
    //     if (trigger) {
    //         giftCardsData.map((card, index) => {
    //             indexes.currentIndex === index && updateCurrentCard(card);
    //             return null
    //         })   
    //         setTrigger(false)
    //     } else {
    //         mainContextState?.cards?.map((card, index) => {
    //             indexes.currentIndex === index && updateCurrentCard(card);
    //             return null
    //         })              
    //     }
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [indexes])
    
    // const GiftCardsElementsList = dappContextState.cardsDataList?.map((card, index) => {
    //     const newLi = <li key={index} className={`${css.card} ${determineClasses(indexes, index)}`} >
    //         <GiftCard key={card.address} index={index} address={card.address} title={card.title} description={card.description} coinsAmount={0} creator={card.creator} funders={card.funders} beneficiary={card.beneficiary} releaseDate={card.releaseDate} />
    //     </li>
    //     return newLi
    // })    

    return (
        <>
            {/* {
                GiftCardsElementsList && GiftCardsElementsList.length === 0 &&<GtAddCardButton />
            }
            {
                GiftCardsElementsList && GiftCardsElementsList.length === 1 && <div className="w-full h-full flexJIC flex-col gap-6 relative">
                    <ul className="list-none flex items-center flex-col h-52 mx-24 pr-16 mb-56 my-auto relative">
                        {   
                            GiftCardsElementsList
                        }
                    </ul>
                    <div className="absolute top-96">
                        <GtAddCardButton />
                    </div>
                </div>
            }
            {
                GiftCardsElementsList && GiftCardsElementsList.length > 1 && <div className="w-full h-full flexJIC flex-col gap-6 relative">
                    <ul className="list-none p-0 flex items-center flex-col h-52 mx-24 pr-16 mt-10 my-auto relative">
                        {   
                            GiftCardsElementsList
                        }
                    </ul>
                    <div className="flexJIC gap-12 absolute top-[21rem]">
                        <GtCardButton title="Carte précédente" css="btnGray" func={switchCardToDisplay} />
                        <GtAddCardButton />
                        <GtCardButton title="Carte suivante" css="btnGray" func={switchCardToDisplay} />
                    </div>
                 </div>
            } */}
        </>
        // <div className="w-full h-full flexJIC flex-col gap-6 relative">
        //     { GiftCardsElementsList && GiftCardsElementsList[0] ? <>
        //         <ul className="list-none p-0 flex items-center flex-col h-52 mx-24 pr-16 my-auto relative">
        //             {   
        //                 GiftCardsElementsList
        //             }
        //         </ul>
        //         {
        //             GiftCardsElementsList && GiftCardsElementsList.length > 1 && <div className="flexJIC gap-12">
        //                 <GtCardButton title="Carte précédente" css="btnGray" func={switchCardToDisplay} />
        //                 <GtAddCardButton />
        //                 <GtCardButton title="Carte suivante" css="btnGray" func={switchCardToDisplay} />
        //             </div>
        //         }
        //     </> : <GtAddCardButton />
        //     }
        // </div>
    );
};

export default CardCarousel;
