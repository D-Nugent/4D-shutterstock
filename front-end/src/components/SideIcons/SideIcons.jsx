import React from 'react';
import './SideIcons.scss'
import imageIcon from '../../assets/icons/image-black-18dp.svg'
import webIcon from '../../assets/icons/web-black-18dp.svg'
import shapeIcon from '../../assets/icons/change_history-24px.svg'
import folderIcon from '../../assets/icons/folder-black-18dp.svg'

function SideIcons() {
    return (
        <div className="action">
            <div className="action__container"><img src={imageIcon} alt="Image Icon"/></div>
            <div className="action__container"><span className="action__container-icon">T</span></div>
            <div className="action__container"><img src={webIcon} alt="Web Icon"/></div>
            <div className="action__container"><img src={shapeIcon} alt="Shape Icon"/></div>
            <div className="action__container"><img src={folderIcon} alt="Folder Icon"/></div>
        </div>
    )
}

export default SideIcons
