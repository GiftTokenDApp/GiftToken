import css from "./homePageElt.module.css";

export const determineClasses = (indexes: any, cardIndex: any) => {
  if (indexes.currentIndex === cardIndex) {
    return css.cardActive;
  } else if (indexes.nextIndex === cardIndex) {
    return css.cardNext;
  } else if (indexes.previousIndex === cardIndex) {
    return css.cardPrev;
  }
  return css.cardInactive;
}