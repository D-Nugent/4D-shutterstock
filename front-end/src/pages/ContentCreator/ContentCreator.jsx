import React from 'react';
import axios from 'axios';
import ImageSelection from '../../components/ImageSelection/ImageSelection';
import './ContentCreator.scss'

class ContentCreator extends React.Component {
    state={
        imageSelected: false,
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
            imageSrc: res.data.assets.preview_1000.url,
            imageSelected: true,
          })
          console.log(this.state);
        })
    }

    closeImageSearch = () => {
        this.setState({
            imageSelected: false,
        })
    }

    render() {
        let styleTest = {
            backgroundImage: `url(${this.state.imageSrc})`
        }
        return (
            <>
            <div className="creator__nav">NavBar</div>
            <div className="creator">
            <ImageSelection applyImage={this.applyImage}/>
            {this.state.imageSelected === true && <div className="creator__applied-image" style={styleTest}draggable="true" onDrop={(event)=>{this.dropItem(event)}}></div>}
            <div className="creator__tools"></div>
            </div>
            </>
        )
    }
}

export default ContentCreator


