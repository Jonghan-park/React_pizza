import React, { useState, useEffect } from 'react'
import { ScrollToTopContainer, ScrollToTopIconContainer, ScrollToTopIcon } from './ScrollToTopElements'
import { FaAngleUp } from 'react-icons/fa'

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 400){
        setShowTopBtn(true);
      }else{
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  return (
    <ScrollToTopContainer>
      {" "}
      { showTopBtn && (
      <ScrollToTopIconContainer onClick={goToTop}>
      <ScrollToTopIcon>
      
        <FaAngleUp />
        
      </ScrollToTopIcon>
      </ScrollToTopIconContainer>
      )} {" "}
    </ScrollToTopContainer>
  )
}

export default ScrollToTop