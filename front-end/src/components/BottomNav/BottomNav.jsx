import React from 'react';
import addPageIcon from '../../assets/icons/library_add-24px.svg';
import toggleIcon from '../../assets/icons/toggle_off-24px.svg';
import zoomInIcon from '../../assets/icons/zoom_in-24px.svg';
import zoomOutIcon from '../../assets/icons/zoom_out-24px.svg';
import './BottomNav.scss'

function BottomNav() {
    return (
        <div className="bottom-nav">
            <div className="bottom-nav__container">
                <button className="bottom-nav__container-pages"><img classname="bottom-nav__container-pages-icon" src={addPageIcon} alt="add page icon"/>Pages</button>
            </div>
            <div className="bottom-nav__container">
                <div className="bottom-nav__container-perspective">
                <p className="bottom-nav__container-perspective-ruler">Ruler<img classname="bottom-nav__container-perspective-ruler-icon" src={toggleIcon} alt="toggle icon"></img></p>
            </div>
            <div className="bottom-nav__container-perspective">
                    <img src={zoomOutIcon} alt="Zoom out icon" className="bottom-nav__container-perspective-icon"/>
                <select className="bottom-nav__container-perspective-dropdown">
                    <option className="bottom-nav__container-perspective-dropdown-option">
                    45%
                    </option>
                </select>
                    <img src={zoomInIcon} alt="Zoom in icon" className="bottom-nav__container-perspective-icon"/>
                </div>
            </div>
        </div>
    )
}

export default BottomNav