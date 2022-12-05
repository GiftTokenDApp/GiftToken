import React, { useCallback } from 'react'
import { AnimatePresence } from "framer-motion";
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import HomePageElt from '../components/homePage/HomePageElt';
import { useModalContext } from '../contexts/ModalContext';
import CreateCardModal from '../components/modal/CreateCardModal';
import DisplayCardModal from '../components/modal/DisplayCardModal';
import { useDappContext } from '../contexts/DappContext';

function HomePage() {

  const { modalContextState, resetModalDisplay } = useModalContext()
  const { hideEventData } = useDappContext()

  const handleCloseModal = useCallback(()=>{
    resetModalDisplay();
    hideEventData()
  },[hideEventData, resetModalDisplay])

  return (
    <div className="w-full h-full flexJIC flex-col font-poppinsRegular md:gap-6">
      <Header headerType='homePage' />
      <div className="w-full h-[82vh] flex justify-start items-center flex-col md:h-[81vh]">
      <div className="w-full h-[12vh] flexJIC flex-col gap-12 text-center text-gtDarkBlue md:h-[15vh] lg:flex-row-reverse lg:text-left">
        <h1 className='flexJIC h-2/6 px-5 pb-1 text-center text-lg font-bold md:text-3xl md:font-extrabold md:h-1/6 md:px-12 md:pb-5'>Créer, cagnoter, abonder, offrer une carte cadeau et bien plus encore !</h1>
      </div>
      <div className="w-full h-[69.3vh] flexJIC">
          <div className="w-4/6 h-5/6 flexJIC mb-20">
            <HomePageElt />
          </div>
      </div>
      </div>
      <Footer />
      <AnimatePresence
          // Disable any initial animations on children that
          // are present when the component is first rendered
          initial={false}
          // Only render one component at a time.
          // The exiting component will finish its exit
          // animation before entering component is rendered
          // exitBeforeEnter={true}
          mode='wait'
          // Fires when all exiting nodes have completed animating out
          onExitComplete={() => null}
      >
      { modalContextState.addCardModalOpen && <CreateCardModal handleClose={handleCloseModal} /> }
      { modalContextState.displayCardModalOpen && <DisplayCardModal handleClose={handleCloseModal} /> }
      </AnimatePresence>
    </div>
  )
}

export default HomePage;