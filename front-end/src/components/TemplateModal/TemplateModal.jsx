import React from 'react';
import './TemplateModal.scss';
import CloseIcon from '../../assets/icons/close-black-18dp.svg'
import userPersona from '../../assets/images/userPersona.png'
import brandWebsite from '../../assets/images/brandWebsite.png'
import marketing from '../../assets/images/marketing.png'
import portfolioOne from '../../assets/images/portfolioOne.png'
import portfolioTwo from '../../assets/images/portfolioTwo.png'

class TemplateModal extends React.Component {
    state = {
        templateClose: false
    }

    loadTemplateHandler = () => {
        this.setState({
            templateClose: true
        })

        this.props.loadTemplate()
    }

    render() {

        let userPersonaStyle = {
            backgroundImage: `url(${userPersona})`
        }
        let brandWebsiteStyle = {
            backgroundImage: `url(${brandWebsite})`
        }
        let marketingStyle = {
            backgroundImage: `url(${marketing})`
        }
        let portfolioOneStyle = {
            backgroundImage: `url(${portfolioOne})`
        }
        let portfolioTwostyle = {
            backgroundImage: `url(${portfolioTwo})`
        }
        return (
            <div className={`templates ${this.state.templateClose === true && '--hidden'}`}>
                <img className="templates__close" src={CloseIcon} alt="close icon"/>
                <div className="templates__container">
                    <h2 className="templates__container-header">Templates</h2>
                    <input type="text" className="templates__container-search" placeholder="Let's find a fit..."/>
                    <div className="templates__container-load">
                        <div className="templates__container-element">
                            <div className="templates__container-element-preview" style={userPersonaStyle} onClick={()=>{this.loadTemplateHandler()}}></div>
                            <h4 className="templates__container-element-title">User Persona</h4>
                        </div>
                        <div className="templates__container-element">
                            <div className="templates__container-element-preview" style={portfolioOneStyle}></div>
                            <h4 className="templates__container-element-title">Portfolio 1</h4>
                        </div>
                        <div className="templates__container-element">
                            <div className="templates__container-element-preview" style={portfolioTwostyle}></div>
                            <h4 className="templates__container-element-title">Portfolio 2</h4>
                        </div>
                        <div className="templates__container-element">
                            <div className="templates__container-element-preview" style={brandWebsiteStyle}></div>
                            <h4 className="templates__container-element-title">Brand Website</h4>
                        </div>
                        <div className="templates__container-element">
                            <div className="templates__container-element-preview" style={marketingStyle}></div>
                            <h4 className="templates__container-element-title">Marketing Page</h4>
                        </div>
                    </div>
                    </div>
            </div>
        )
    }
}

export default TemplateModal
