import React from 'react';
import axios from 'axios';
import PageLoading from '../../components/PageLoading/PageLoading'
import './Home.scss';

class Home extends React.Component {
    state = {
        imageList: [],
        loaded: false,
        searchTerm: ""
    }

    componentDidMount(){
        axios
        .get(`${process.env.REACT_APP_API_URL}/images`, {
          params: {
            query: "kittens"
          }
        })
        .then((res) => {
          this.setState({
            imageList: res.data,
            loaded: true,
          })
        })
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log(prevState);
        console.log(this.state);
        prevProps !== this.props &&
        (axios
        .get(`${process.env.REACT_APP_API_URL}/images`, {
          params: {
            query: this.state.searchTerm
          }
        })
        .then((res) => {
            console.log(res);
          this.setState({
            imageList: res.data,
            loaded: true,
          })
        }))
    }
    
    searchImages(event){
        event.preventDefault();
        this.setState({
            searchTerm: event.target.search.value
        });
        (axios
            .get(`${process.env.REACT_APP_API_URL}/images`, {
              params: {
                query: event.target.search.value
              }
            })
            .then((res) => {
                console.log(res);
              this.setState({
                imageList: res.data,
                loaded: true,
              })
            }))
    }



    render() {
        console.log(this.state);
        if (this.state.loaded === false) {
            return <PageLoading/>
        } else {
            return (
                <div className="home">
                    <h1 className="home__title">HOME - Search Images</h1>
                    <form action="" className="home__form" onSubmit={(event)=>this.searchImages(event)}>
                        <input type="text" className="home__form-search" id="search"/>
                        <button type="submit" className="home__form-submit">Search</button>
                    </form>
                    <div className="gallery">
                        {this.state.imageList.map(content => (
                            <div className="gallery__container" key={content.id}>
                                <img src={content.assets.large_thumb.url} alt={content.description} className="gallery__container-thumbnail"/>
                                <p className="gallery__container-desc">{content.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )
        }
    }
}

export default Home
