import React from 'react'


const handleScrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

function BackTotop() {

  return (
    <>
        <div className="back-to-top" title="Back to top" onClick={handleScrollToTop}>
            <span href="">Back to top
            </span>
        </div>
    
    </>
  )
}

export default BackTotop
