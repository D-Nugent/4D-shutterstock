import React, { Component } from 'react';
import './ImageSelection.scss';
import axios from 'axios';
import HideIcon from '../../assets/icons/chevron_left-black-18dp.svg'

export class ImageSelection extends Component {
    state = {
        imageList: [],
        loaded: false,
        selectedImage: [],
    }


    searchImages(event){
        event.preventDefault();
        this.setState({
            searchTerm: event.target.search.value
        });
        (axios
          .get(`https:/api.shutterstock.com/v2/images/search`, {
            params: {
              query: event.target.search.value,
            },
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
            }
        })
        .then((res) => {
            console.log(res);
          this.setState({
            imageList: res.data.data,
            loaded: true,
          })
        }))
    }

    imageSelector(event){
        this.props.applyImage(event.target.getAttribute('data-id'))
        console.log(event.target.getAttribute('data-id'));
    }

    hideImages = () => {
        this.setState({
            imageSearchVis: false,
        })
    }

    render() {
        return (
            <div className={`image-container ${this.state.imageSearchVis === false && '--hidden'}`}>
                <img className="image-container__close" src={HideIcon} alt="Close Icon" onClick={()=>{this.hideImages()}}/>
                <h2 className="image-container__heading">Images</h2>
                <form action="GET" className="image-container__search" onSubmit={(event)=>{this.searchImages(event)}}>
                    <input type="text" className="image-container__search-field" placeholder="Find Your Perfect Image..." required id="search"/>
                    <button type="submit" className="image-container__search-submit">Search</button>
                </form>
                {this.state.loaded === false && <p className="image-container__descriptor">Search for anything, our library is updated daily so that you have the perfect image for your project.</p>}
                <div className="image-container__content">
                    {this.state.imageList.map(content => (
                        <img className="image-container__content-thumbnail" key={content.id} data-id={content.id} src={content.assets.large_thumb.url} alt={content.description} onClick={(event)=> {this.imageSelector(event)}}></img>
                            ))}
                </div>
            </div>
        )
    }
}

export default ImageSelection
