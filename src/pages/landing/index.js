import React from "react";
import clsx from "clsx";
import HamBurgerMenu from '../../assets/icons/menu.svg';
import styled from './index.module.scss';

const LandingPage = React.memo(() => {
    
    return (
        <div className={styled.gridContainer}>
            <div className={styled.top}>
                <div className={styled.navbar}>
                    <div className={styled.circleContainer} >
                        <img className={styled.hamburgerMenu} src={HamBurgerMenu} />
                    </div>
                    <div className={styled.circleContainer} >
                        <img className={styled.hamburgerMenu} src={HamBurgerMenu} />
                    </div>
                </div>
            </div>
            <div className={styled.bottom}>
               
            </div>
        </div>
    )
});


export default LandingPage;