import React, { Component } from 'react'

const NewsItem = (props) => {
  let { title, description, imageURL, newsURL, author, date, source } = props;
  return (
    <div>
      <div className="card my-4">
        <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
          <span class="badge rounded-pill bg-danger"
          >{source}
          </span>
        </div>
        <img src={imageURL} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p class="card-text"><small class="text-body-secondary">By {author} on {date}</small></p>
          <p className="card-text">{description}...</p>
          <a href={newsURL} target='_blank' className="btn btn-sm btn-dark">Read more</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem