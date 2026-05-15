import React, { Component } from 'react'

const NewsItem = (props) => {
  let { title, description, imageURL, newsURL, author, date, source } = props;
  return (
    <div  >
      <div style={{ height: '600px', backgroundColor: '#1a1d27', border: '1px solid #2d3148', color: 'white' }} className="card my-4">
        <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
          <span class="badge rounded-pill bg-danger"
          >{source}
          </span>
        </div>
        <img style={{ height: '200px' }} src={imageURL} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title ? title.slice(10) : title}...</h5>
          <p class="card-text"><small class="text-body-secondary">By {author} on {date}</small></p>
          <p className="card-text">{description ? description.slice(20) : description}...</p>
          <a href={newsURL} style={{ position: 'absolute', bottom: '10px' }} target='_blank' className="btn btn-sm btn-dark">Read more</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem