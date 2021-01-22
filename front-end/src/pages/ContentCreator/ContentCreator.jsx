import React from 'react';
import axios from 'axios';
import ImageSelection from '../../components/ImageSelection/ImageSelection';
import SideIcons from '../../components/SideIcons/SideIcons';
import BottomNav from '../../components/BottomNav/BottomNav';
import DesignTools from '../../components/DesignTools/DesignTools';
import CloseIcon from '../../assets/icons/close-black-18dp.svg';
import TemplateModal from '../../components/TemplateModal/TemplateModal';
import userPersona from '../../assets/images/userPersona.png'
import './ContentCreator.scss'

class ContentCreator extends React.Component {
    state={
        imageSelected: false,
        uploadSelected: false,
        uploadUrl: ''
    }

    applyImage = (chosenId) => {
        console.log(chosenId);
        axios
          .get(`https:/api.shutterstock.com/v2/images/${chosenId}`, {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
            }
        })
        .then((res) => {
            console.log(res);
          this.setState({
            imageSrc: res.data.assets.preview.url,
            imageSelected: true,
          })
          console.log(this.state);
        })
    }

    applyUpload = (src) => {
        console.log(this.state);
        this.setState({
            uploadUrl: src,
            uploadSelected: true,
        })
        console.log(this.state);
    }

    loadTemplate = () => {
        this.setState({
            templateLoaded: true,
        })
    }

    closeImageSearch = () => {
        this.setState({
            imageSelected: false,
        })
    }

    render() {
        let styleImage = {
            backgroundImage: `url(${this.state.imageSrc})`
        }
        return (
            <>
            <div className="creator">
            <SideIcons/>

            <ImageSelection applyImage={this.applyImage} applyUpload={this.applyUpload}/>
            {this.state.uploadSelected === true && <img className="creator__applied-upload" src={this.state.uploadUrl}></img>}
            {this.state.uploadSelected === true && <img src={CloseIcon} alt="" className="creator__close" onClick={()=>{this.setState({uploadSelected:false})}}/>}
            {this.state.imageSelected === true && <div className="creator__applied-image" style={styleImage}></div>}
            {this.state.imageSelected === true && <img src={CloseIcon} alt="" className="creator__close" onClick={()=>{this.setState({imageSelected:false})}}/>}
            {this.state.templateLoaded === true && <img className="creator__applied-template" src={userPersona}></img>}
            <TemplateModal loadTemplate={this.loadTemplate}/>

            <DesignTools/>
            <BottomNav/>
            </div>
            </>
        )
    }
}

export default ContentCreator


