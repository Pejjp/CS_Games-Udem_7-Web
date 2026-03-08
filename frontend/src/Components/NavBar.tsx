import React, { useRef, useEffect, type SetStateAction } from 'react';
import './NavBar.css';


const NavBar: React.FC<{ onPageChange: React.Dispatch<React.SetStateAction<string>>, isEasterEggActif: boolean }> = ({ onPageChange, isEasterEggActif }) => {
    const [navBarWidth, setNavBarWidth] = React.useState(200);
    const navBarRef = useRef<HTMLDivElement>(null);
    const [isTextVisible, setIsTextVisible] = React.useState(true);
    // const easTerEggTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const mouseDownHandler = (e: React.MouseEvent<HTMLDivElement>)=>{
        const startX = e.clientX;
        const sbWidth = window.getComputedStyle(navBarRef.current!).width;
        const startWidth = parseInt(sbWidth, 10);

        const mouseMoveHandler = (e: MouseEvent)=>{
            const dx =  e.clientX- startX;
            // const dx = e.clientX - startX;

            const newWidth = startWidth + dx;
            if(newWidth>50 && newWidth<500) {
                setNavBarWidth(newWidth);
            }
        }

        const mouseUpHandler = ()=>{
            window.removeEventListener('mousemove', mouseMoveHandler);
            window.removeEventListener('mouseup', mouseUpHandler);
        }

        window.addEventListener('mousemove', mouseMoveHandler);
        window.addEventListener('mouseup', mouseUpHandler);
    }

    useEffect(()=>{
    if(navBarWidth<100) {
        setIsTextVisible(false);
    };
    if(navBarWidth>=100) {
        setIsTextVisible(true);
    }
    },[navBarWidth])

    return (

        <nav className='nav-main'>

            <div className='navbar-container' ref={navBarRef} style={{width: `${navBarWidth}px`}}>
                <div className='navbar-elements'>
                    <button className='nav-button' onClick={()=>onPageChange('game')}>
                        🌟
                        <span hidden = {!isTextVisible} >Game Page</span>
                    </button>
                    {
                        isEasterEggActif &&
                        <button className='nav-button' onClick={()=>onPageChange('easter-egg')}>
                            🐣
                            <span hidden = {!isTextVisible} >Easter Egg</span>
                        </button>
                    }
                </div>
            </div>
            <div
            className='nav-resize-handle'
            onMouseDown = {mouseDownHandler}
            >

            </div>
        </nav>
    );
}

export default NavBar;