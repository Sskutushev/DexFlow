import { useEffect, useRef, useState } from 'react';

const useFullPageScroll = (sectionRefs) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const scrollCount = useRef(0);
  const isScrolling = useRef(false); // To prevent multiple scrolls at once

  useEffect(() => {
    // const handleWheel = (event) => {
    //   console.log('Wheel event fired', event.deltaY);
    //   if (isScrolling.current) {
    //     console.log('Already scrolling, returning');
    //     return;
    //   }

    //   scrollCount.current += 1;
    //   console.log('Scroll count:', scrollCount.current);

    //   // Determine scroll direction
    //   const direction = event.deltaY > 0 ? 'down' : 'up';

    //   // Threshold for snapping (e.g., 2 scroll events)
    //   const scrollThreshold = 2;

    //   if (scrollCount.current >= scrollThreshold) {
    //     isScrolling.current = true;
    //     scrollCount.current = 0; // Reset scroll counter
    //     console.log('Scroll threshold reached, snapping');

    //     let nextSectionIndex = currentSectionIndex;
    //     if (direction === 'down' && currentSectionIndex < sectionRefs.length - 1) {
    //       nextSectionIndex = currentSectionIndex + 1;
    //     } else if (direction === 'up' && currentSectionIndex > 0) {
    //       nextSectionIndex = currentSectionIndex - 1;
    //     }

    //     if (nextSectionIndex !== currentSectionIndex) {
    //       console.log('Scrolling to section:', nextSectionIndex);
    //       sectionRefs[nextSectionIndex].current.scrollIntoView({ behavior: 'smooth' });
    //       setCurrentSectionIndex(nextSectionIndex);
    //     }

    //     // Debounce scrolling
    //     setTimeout(() => {
    //       isScrolling.current = false;
    //       console.log('Scrolling finished, isScrolling set to false');
    //     }, 1000); // Adjust debounce time as needed
    //   }
    // };

    // window.addEventListener('wheel', handleWheel, { passive: false }); // passive: false to allow preventDefault

    // return () => {
    //   window.removeEventListener('wheel', handleWheel);
    // };
  }, [currentSectionIndex, sectionRefs]);

  // Optional: Add keyboard navigation (e.g., arrow keys)
  useEffect(() => {
    // const handleKeyDown = (event) => {
    //   if (isScrolling.current) return;

    //   let nextSectionIndex = currentSectionIndex;
    //   if (event.key === 'ArrowDown' && currentSectionIndex < sectionRefs.length - 1) {
    //     nextSectionIndex = currentSectionIndex + 1;
    //   } else if (event.key === 'ArrowUp' && currentSectionIndex > 0) {
    //     nextSectionIndex = currentSectionIndex - 1;
    //   }

    //   if (nextSectionIndex !== currentSectionIndex) {
    //     isScrolling.current = true;
    //     sectionRefs[nextSectionIndex].current.scrollIntoView({ behavior: 'smooth' });
    //     setCurrentSectionIndex(nextSectionIndex);
    //     setTimeout(() => {
    //       isScrolling.current = false;
    //     }, 1000);
    //   }
    // };

    // window.addEventListener('keydown', handleKeyDown);
    // return () => {
    //   window.removeEventListener('keydown', handleKeyDown);
    // };
  }, [currentSectionIndex, sectionRefs]);

  return currentSectionIndex;
};

export default useFullPageScroll;
