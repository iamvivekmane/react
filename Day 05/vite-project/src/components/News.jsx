import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=2b08e2763e5f47ab9c62a234e2576be2&pageSize=20";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
    }

    handleNextClick = async () => {
        console.log("this is next click")
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=2b08e2763e5f47ab9c62a234e2576be2&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
        }

    }
    handlePreviousClick = async () => {
        console.log("this is previous click")
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=2b08e2763e5f47ab9c62a234e2576be2&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })

    }
    render() {
        return (
            <div className="container my-2" >
                <h2>News: </h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title.slice(0, 45)} description={element.description.slice(0, 88)} imageURL={element.urlToImage} newsURL={element.url} />
                        </div>
                    })}

                </div>
                <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePreviousClick} > &larr; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

                </div>
            </div >
        )
    }
}

export default News