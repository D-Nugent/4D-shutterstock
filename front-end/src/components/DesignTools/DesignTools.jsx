import React, { Component } from 'react';
import addIcon from '../../assets/icons/add-24px.svg';
import './DesignTools.scss';

export class DesignTools extends Component {
    render() {
        return (
            <div className="design-tools">
                <div className="design-tools__section">
                    <h4 className="design-tools__section-title">Fill</h4>
                    <img src={addIcon} alt="Add Icon" className="design-tools__section-icon"/>
                </div>
                <div className="design-tools__section">
                    <h4 className="design-tools__section-title">Stroke</h4>
                    <img src={addIcon} alt="Add Icon" className="design-tools__section-icon"/>
                </div>
                <div className="design-tools__section">
                    <h4 className="design-tools__section-title">Effects</h4>
                    <img src={addIcon} alt="Add Icon" className="design-tools__section-icon"/>
                </div>
                <div className="design-tools__section">
                    <h4 className="design-tools__section-title">Export</h4>
                    <img src={addIcon} alt="Add Icon" className="design-tools__section-icon"/>
                </div>
                <div className="design-tools__section">
                    <h4 className="design-tools__section-title">Colors</h4>
                    <img src={addIcon} alt="Add Icon" className="design-tools__section-icon"/>
                </div>
            </div>
        )
    }
}

export default DesignTools
