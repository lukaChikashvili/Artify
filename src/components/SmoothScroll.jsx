import { ReactLenis } from '@studio-freight/react-lenis'
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

function SmoothScroll({children}) {

     const lenisRef = useRef()
  
     useEffect(() => {
       function update(time) {
         lenisRef.current?.lenis?.raf(time * 800)
       }
     
       gsap.ticker.add(update)
     
       return () => {
         gsap.ticker.remove(update)
       }
     })
 
  return (
    <ReactLenis root ref={lenisRef} autoRaf={false}>
     {children}
    </ReactLenis>
  )
}

export default SmoothScroll;
