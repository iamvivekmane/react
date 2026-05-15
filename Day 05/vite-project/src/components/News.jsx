import React, { Component, useEffect, useEffectEvent } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';



const News = (props) => {
    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const [totalResults, setTotalResults] = useState(0)

    const capitalize = (string) => {
        let lowerCase = string.toLowerCase();
        let upperCase = lowerCase.toUpperCase();
        return upperCase[0] + lowerCase.slice(1);
    }


    const updateNews = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        console.log(parsedData);

        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)

        props.setProgress(100);
    }

    useEffect(() => {
        document.title = "NewsLetter : " + capitalize(props.category) + " News";
        updateNews();
    }, [])




    // handleNextClick = async () => {
    //     // console.log("this is next click")
    //     // if (!(page + 1 > Math.ceil(totalResults / props.pageSize))) {
    //     //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2b08e2763e5f47ab9c62a234e2576be2&page=${page + 1}&pageSize=${props.pageSize}`;
    //     //     setState({ loading: true });
    //     //     let data = await fetch(url);
    //     //     let parsedData = await data.json();
    //     //     setState({
    //     //         page: page + 1,
    //     //         articles: parsedData.articles,
    //     //         loading: false
    //     //     })
    //     // }
    //     setState({ page: page + 1 });
    //     updateNews();

    // }
    // handlePreviousClick = async () => {
    //     // console.log("this is previous click")
    //     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2b08e2763e5f47ab9c62a234e2576be2&page=${page - 1}&pageSize=${props.pageSize}`;
    //     // setState({ loading: true });
    //     // let data = await fetch(url);
    //     // let parsedData = await data.json();
    //     // setState({
    //     //     page: page - 1,
    //     //     articles: parsedData.articles,
    //     //     loading: false
    //     // })

    //     setState({ page: page - 1 });
    //     updateNews();
    // }

    const fetchMoreData = async () => {
        setPage(page + 1);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData, totalResults)
    };



    return (
        <>
            <h2 className='text-center' style={{ marginTop: '90px' }}>{props.category === 'general' ? 'Top Headlines' : capitalize(props.category) + ' News'}</h2>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title} description={element.description} imageURL={element.urlToImage ? element.urlToImage : "https://img.magnific.com/free-vector/news-grunge-text_460848-9369.jpg?semt=ais_hybrid&w=740&q=80"} newsURL={element.url} author={!element.author ? "Unknown author" : element.author} date={new Date(element.publishedAt).toGMTString()} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>




            {/* <div className="container d-flex justify-content-between">
                    <button type="button" disabled={page <= 1} className="btn btn-dark" onClick={handlePreviousClick} > &larr; Previous</button>
                    <button type="button" disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>

                </div> */}
        </>
    )
}


export default News